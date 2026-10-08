#!/usr/bin/env node
/*
 * chrome.cjs, the Chrome profile helper. Shared kit file, identical in every venture folder.
 * Owner of the kit: ../fady.be/kit/README.md. Kit version 2026-10-08 (windows and front; 2026-10-07 open gives a new window; 2026-10-06 the occlusion flag; 2026-09-04 before).
 *
 * WHY: every session used to ask Fady "which browser?". Chrome's own Local State file is the one
 * owner of the profile map, so a session reads it and opens the profile it needs itself.
 *
 *   node .claude/scripts/chrome.cjs                      list the profiles (name, directory, account)
 *   node .claude/scripts/chrome.cjs open "fady.be"       open that profile (by name or directory)
 *   node .claude/scripts/chrome.cjs open "Profile 4" https://business.google.com/
 *   node .claude/scripts/chrome.cjs status               is Chrome running, and with the occlusion flag?
 *   node .claude/scripts/chrome.cjs windows              list Chrome's windows: handle, pid, min or ok, title
 *   node .claude/scripts/chrome.cjs front "<title start>" [tab]
 *                                                        bring the window whose title starts with (or contains)
 *                                                        that text in front, then select a tab: "last" (the
 *                                                        default, Ctrl+9), 1 to 8 (Ctrl+N), or "none"
 *   node .claude/scripts/chrome.cjs restart "fady.be"    close Chrome gently and reopen it with the flag
 *                                                        (Fady's go first: it closes his own tabs too,
 *                                                        and reopens them with --restore-last-session)
 *
 * THE OCCLUSION FLAG (HQ, 2026-10-06, tested in throwaway profiles): Chrome on Windows marks a window
 * that another window covers as hidden. Then document.visibilityState reads "hidden", the extension's
 * screenshots time out and some app buttons ignore scripted clicks, so every session asked Fady to keep
 * Chrome "in front". Started with --disable-features=CalculateNativeWinOcclusion, a covered window stays
 * visible and keeps painting. The flag only takes effect on the FIRST Chrome process: when Chrome is
 * already running without it, "open" says so and the session tells Fady in one line; "restart" fixes it
 * with his go. Two cases the flag does not cover: a MINIMIZED window stays hidden, and a tab behind
 * another tab in the same window stays hidden. That second case is why "open" gives a NEW window
 * since 2026-10-07 (Anthropic's tracker, claude-code issues 97751 and 97428: the extension opens a
 * session's tabs in the background and has no call to bring one forward): the agent's first tab is
 * the active tab of its own window. It navigates that one tab and never adds a second one. In a
 * hidden tab, read_page, find, form_input and clicks by ref still work; only screenshots fail.
 * The chrome://flags store (enabled_labs_experiments) does not carry this switch: tested, no effect.
 *
 * THE FRONT COMMAND (HQ, 2026-10-08, from the taxi session's recipe of that night, used six times in one
 * day): the extension's createIfEmpty can still put a session's tab BEHIND the window's own first tab,
 * so the tab reads hidden. "front" finds the Chrome window by its title (Chrome's window title is the
 * ACTIVE tab's title plus " - Google Chrome", so the window chrome.cjs opened is found by its first
 * tab's title), restores it when minimized, brings it in front with SetForegroundWindow, CHECKS that it
 * really is the foreground window (Windows may refuse; then nothing is sent and the line says NOT
 * FRONTED), and only then sends Ctrl+9 (the last tab, where the session's tab sits) or Ctrl+N. Never ask
 * Fady to front or restore Chrome. Read the tab's visibility by a screenshot afterwards, never by JS.
 * "windows" is the read-only half: it lists every visible Chrome window with its title, nothing moves.
 *
 * Verified 2026-09-04 in the HQ: "open" starts the right profile every time. What it does NOT do is
 * connect the Claude extension instantly: a fresh window can take 30 to 60 seconds to show up in
 * list_connected_browsers (a pro-debouchage agent saw it connect by itself after about thirty
 * seconds the same day). So: open by command, wait, check again after a minute, and only if still
 * empty ask Fady for ONE click (the Claude side panel in that window). Never ask which browser.
 * One browser-driving agent at a time, ever, guarded by browser-lock.cjs.
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn, spawnSync, execSync } = require('child_process');

const LOCAL_STATE = path.join(process.env.LOCALAPPDATA || '', 'Google', 'Chrome', 'User Data', 'Local State');
const CHROME = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
].find((p) => fs.existsSync(p)) || 'chrome.exe';
const OCCLUSION_FEATURE = 'CalculateNativeWinOcclusion';
const OCCLUSION_FLAG = '--disable-features=' + OCCLUSION_FEATURE;

function profiles() {
  const j = JSON.parse(fs.readFileSync(LOCAL_STATE, 'utf8'));
  const ic = (j.profile && j.profile.info_cache) || {};
  return Object.keys(ic).map((dir) => ({
    dir,
    name: ic[dir].name || '',
    account: ic[dir].user_name || '(no Google account)',
    person: ic[dir].gaia_name || '',
  }));
}

// Fady's real Chrome: the browser processes (no --type=) on the default user data dir, not headless,
// not a throwaway --user-data-dir of a build or test script.
function runningBrowsers() {
  try {
    const out = execSync(
      'powershell -NoProfile -Command "Get-CimInstance Win32_Process -Filter \\"name=\'chrome.exe\'\\" | Where-Object { $_.CommandLine -notmatch \'--type=\' } | ForEach-Object { $_.ProcessId.ToString() + \' \' + $_.CommandLine }"',
      { encoding: 'utf8', windowsHide: true }
    );
    return out.split(/\r?\n/).filter(Boolean).map((l) => {
      const i = l.indexOf(' ');
      return { pid: Number(l.slice(0, i)), cmd: l.slice(i + 1) };
    }).filter((p) => !/--user-data-dir=|--headless/.test(p.cmd));
  } catch (e) { return []; }
}
function anyChrome() {
  try { return /chrome\.exe/i.test(execSync('tasklist /FI "IMAGENAME eq chrome.exe"', { encoding: 'utf8', windowsHide: true })); } catch (e) { return false; }
}
function flagStatus() {
  const r = runningBrowsers();
  if (!r.length) return { running: false, flagged: false, line: 'Chrome is not running.' };
  const flagged = r.every((p) => p.cmd.includes(OCCLUSION_FEATURE));
  return {
    running: true, flagged,
    line: flagged
      ? 'Chrome is running WITH the occlusion flag: a covered window keeps working (a minimized one does not).'
      : 'Chrome is running WITHOUT the occlusion flag: a window covered by another goes hidden (screenshots time out, some buttons ignore clicks). Keep the agent window uncovered, or ask Fady once for: node .claude/scripts/chrome.cjs restart "<profile>" (it closes and reopens his Chrome).',
  };
}
function launch(p, url, extra) {
  const args = [OCCLUSION_FLAG, '--profile-directory=' + p.dir, ...(extra || [])];
  if (url) args.push(url);
  const child = spawn(CHROME, args, { detached: true, stdio: 'ignore' });
  child.unref();
}
const sleep = (ms) => { const end = Date.now() + ms; while (Date.now() < end) { /* wait */ } };

// The window half: one PowerShell script, written to the temp folder for the call and removed after it.
// It compiles a small user32 bridge (EnumWindows, GetWindowText, IsIconic, ShowWindow, SetForegroundWindow,
// GetForegroundWindow) and keeps only windows of the chrome.exe processes whose title carries "Google Chrome",
// so the desktop app and other Chromium apps (the same window class) never match.
const WINDOWS_PS = String.raw`param([string]$Mode = 'list', [string]$Prefix = '', [string]$Tab = 'last')
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$code = @"
using System; using System.Text; using System.Collections.Generic; using System.Runtime.InteropServices;
public class CW {
  public delegate bool EnumProc(IntPtr h, IntPtr l);
  [DllImport("user32.dll")] public static extern bool EnumWindows(EnumProc f, IntPtr l);
  [DllImport("user32.dll")] public static extern bool IsWindowVisible(IntPtr h);
  [DllImport("user32.dll")] public static extern bool IsIconic(IntPtr h);
  [DllImport("user32.dll", CharSet = CharSet.Unicode)] public static extern int GetWindowText(IntPtr h, StringBuilder s, int n);
  [DllImport("user32.dll", CharSet = CharSet.Unicode)] public static extern int GetClassName(IntPtr h, StringBuilder s, int n);
  [DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr h, out uint pid);
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int cmd);
  [DllImport("user32.dll")] public static extern IntPtr GetForegroundWindow();
  public static List<string> List() {
    var r = new List<string>();
    EnumWindows(delegate(IntPtr h, IntPtr l) {
      if (!IsWindowVisible(h)) return true;
      var c = new StringBuilder(256); GetClassName(h, c, 256);
      if (c.ToString() != "Chrome_WidgetWin_1") return true;
      var t = new StringBuilder(1024); GetWindowText(h, t, 1024);
      if (t.Length == 0) return true;
      uint pid; GetWindowThreadProcessId(h, out pid);
      r.Add(h.ToInt64().ToString() + "\t" + pid.ToString() + "\t" + (IsIconic(h) ? "min" : "ok") + "\t" + t.ToString());
      return true;
    }, IntPtr.Zero);
    return r;
  }
}
"@
Add-Type -TypeDefinition $code
$chromePids = @(Get-Process chrome -ErrorAction SilentlyContinue | ForEach-Object { $_.Id })
$rows = @([CW]::List() | ForEach-Object {
  $p = $_ -split "` + '`' + `t", 4
  if (($chromePids -contains [int]$p[1]) -and ($p[3] -like '*Google Chrome*')) {
    [PSCustomObject]@{ H = [int64]$p[0]; ProcId = [int]$p[1]; State = $p[2]; Title = $p[3] }
  }
})
if ($Mode -eq 'list') {
  if (-not $rows) { "NO CHROME WINDOW is open (Fady's Chrome, the default user data dir)." ; exit 0 }
  $rows | ForEach-Object { "$($_.H)` + '`' + `t$($_.ProcId)` + '`' + `t$($_.State)` + '`' + `t$($_.Title)" }
  exit 0
}
$want = @($rows | Where-Object { $_.Title.StartsWith($Prefix, [System.StringComparison]::OrdinalIgnoreCase) })
if (-not $want) { $want = @($rows | Where-Object { $_.Title.IndexOf($Prefix, [System.StringComparison]::OrdinalIgnoreCase) -ge 0 }) }
if (-not $want) { "NO WINDOW: no Chrome window title starts with or contains that text. Windows seen: " + (($rows | ForEach-Object { $_.Title }) -join ' | '); exit 3 }
$w = $want[0]
$h = [IntPtr]$w.H
if ($w.State -eq 'min') { [void][CW]::ShowWindow($h, 9); Start-Sleep -Milliseconds 400 }
[void][CW]::SetForegroundWindow($h)
Start-Sleep -Milliseconds 400
if ([CW]::GetForegroundWindow() -ne $h) { "NOT FRONTED: Windows refused to bring the window '" + $w.Title + "' in front (another app holds the foreground). No key was sent. Try once more; if it fails again, tell Fady in one line and work by the DOM."; exit 2 }
$keyName = ''
if ($Tab -ne 'none') {
  $key = if ($Tab -eq 'last') { '^9' } else { '^' + $Tab }
  $keyName = if ($Tab -eq 'last') { 'Ctrl+9, the last tab' } else { 'Ctrl+' + $Tab }
  (New-Object -ComObject WScript.Shell).SendKeys($key)
  Start-Sleep -Milliseconds 400
}
"FRONTED: '" + $w.Title + "' (pid " + $w.ProcId + ")" + $(if ($keyName) { ", " + $keyName + " sent" } else { "" }) + ". Take a screenshot now to confirm the tab is visible."
exit 0
`;
function runWindowsPs(args) {
  const file = path.join(os.tmpdir(), 'chrome-windows-' + process.pid + '.ps1');
  fs.writeFileSync(file, WINDOWS_PS, 'utf8');
  try {
    const r = spawnSync('powershell.exe', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', file, ...args], { encoding: 'utf8', windowsHide: true, timeout: 60000 });
    return { code: r.status === null ? 1 : r.status, out: (r.stdout || '').trim(), err: (r.stderr || '').trim() };
  } finally {
    try { fs.unlinkSync(file); } catch (e) { /* nothing to remove */ }
  }
}

const [cmd, target, url] = process.argv.slice(2);
let list;
try { list = profiles(); } catch (e) {
  console.error('Could not read Chrome Local State at ' + LOCAL_STATE + ': ' + e.message);
  process.exit(1);
}
function findProfile(t) {
  const want = String(t).toLowerCase();
  return list.find((x) => x.dir.toLowerCase() === want) || list.find((x) => x.name.toLowerCase() === want);
}

if (!cmd) {
  for (const p of list) console.log(`${p.dir.padEnd(10)} "${p.name}"  ${p.account}${p.person ? '  (' + p.person + ')' : ''}`);
  process.exit(0);
}

if (cmd === 'status') {
  console.log(flagStatus().line);
  process.exit(0);
}

if (cmd === 'windows') {
  const r = runWindowsPs(['-Mode', 'list']);
  if (r.out) console.log(r.out);
  if (r.err) console.error(r.err);
  process.exit(r.code);
}

if (cmd === 'front') {
  if (!target) { console.error('Usage: chrome.cjs front "<title start>" [last | 1-8 | none]'); process.exit(1); }
  const tab = url === undefined ? 'last' : String(url);
  if (!/^(last|none|[1-8])$/.test(tab)) { console.error('The tab is "last" (default), a number 1 to 8, or "none".'); process.exit(1); }
  const r = runWindowsPs(['-Mode', 'front', '-Prefix', target, '-Tab', tab]);
  if (r.out) console.log(r.out);
  if (r.err) console.error(r.err);
  process.exit(r.code);
}

if (cmd === 'open') {
  if (!target) { console.error('Usage: chrome.cjs open "<profile name or directory>" [url]'); process.exit(1); }
  const p = findProfile(target);
  if (!p) { console.error('No profile named "' + target + '". Known: ' + list.map((x) => x.name + ' [' + x.dir + ']').join(', ')); process.exit(1); }
  const before = flagStatus();
  // A NEW WINDOW every time (HQ, 2026-10-07, from the taxi session's finding): the extension opens a
  // session's tabs in the background, and no tool brings a tab forward, so a tab behind another one
  // reads hidden and screenshots time out. In a window of its own the agent's first tab is the
  // active tab. The agent works in this window, never in Fady's, and never opens a second tab here
  // (a second tab is a background tab again): it navigates the one tab. If a tab still lands behind,
  // "front" brings the window and the tab forward (kit 2026-10-08).
  launch(p, url, ['--new-window']);
  console.log(`Opened a NEW Chrome window in profile "${p.name}" (${p.dir}, ${p.account})${url ? ' at ' + url : ''}. Work in this window's one tab (navigate it, never add a tab: a second tab is hidden; if the extension still puts your tab behind, run: node .claude/scripts/chrome.cjs front "<this window's title start>"). Now wait 30 to 60 seconds and check list_connected_browsers; only if still empty, ask Fady to open the Claude side panel in that window once.`);
  if (before.running && !before.flagged) console.log('NOTE: ' + before.line);
  else if (!before.running) console.log('Chrome started fresh WITH the occlusion flag: a covered window keeps working; a minimized one does not, so never minimize it.');
  process.exit(0);
}

if (cmd === 'restart') {
  if (!target) { console.error('Usage: chrome.cjs restart "<profile name or directory>"   (with Fady\'s go: it closes his Chrome)'); process.exit(1); }
  const p = findProfile(target);
  if (!p) { console.error('No profile named "' + target + '". Known: ' + list.map((x) => x.name + ' [' + x.dir + ']').join(', ')); process.exit(1); }
  if (anyChrome()) {
    // Gentle close only (the window's own close, so Chrome saves its session); never a forced kill.
    try { execSync('powershell -NoProfile -Command "Get-Process chrome -ErrorAction SilentlyContinue | ForEach-Object { $_.CloseMainWindow() | Out-Null }"', { windowsHide: true, stdio: 'ignore' }); } catch (e) { /* nothing to close */ }
    const deadline = Date.now() + 25000;
    while (anyChrome() && Date.now() < deadline) sleep(500);
    if (anyChrome()) { console.log('NOT RESTARTED: Chrome did not close by itself within 25 seconds (a dialog or a download may hold it). Nothing was forced. Fady closes Chrome himself, then run open.'); process.exit(1); }
    sleep(1500);
  }
  launch(p, null, ['--restore-last-session']);
  console.log(`RESTARTED: Chrome reopened WITH the occlusion flag in profile "${p.name}" (${p.dir}), restoring the last session. A covered window now keeps working; a minimized one does not. Wait 30 to 60 seconds for the extension.`);
  process.exit(0);
}

console.error('Unknown command "' + cmd + '". Use no argument to list, or: open "<profile>" [url] | status | windows | front "<title start>" [tab] | restart "<profile>"');
process.exit(1);
