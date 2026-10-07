#!/usr/bin/env node
/*
 * chrome.cjs, the Chrome profile helper. Shared kit file, identical in every venture folder.
 * Owner of the kit: ../fady.be/kit/README.md. Kit version 2026-10-07 (open gives a new window; 2026-10-06 the occlusion flag; 2026-09-04 before).
 *
 * WHY: every session used to ask Fady "which browser?". Chrome's own Local State file is the one
 * owner of the profile map, so a session reads it and opens the profile it needs itself.
 *
 *   node .claude/scripts/chrome.cjs                      list the profiles (name, directory, account)
 *   node .claude/scripts/chrome.cjs open "fady.be"       open that profile (by name or directory)
 *   node .claude/scripts/chrome.cjs open "Profile 4" https://business.google.com/
 *   node .claude/scripts/chrome.cjs status               is Chrome running, and with the occlusion flag?
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
 * Verified 2026-09-04 in the HQ: "open" starts the right profile every time. What it does NOT do is
 * connect the Claude extension instantly: a fresh window can take 30 to 60 seconds to show up in
 * list_connected_browsers (a pro-debouchage agent saw it connect by itself after about thirty
 * seconds the same day). So: open by command, wait, check again after a minute, and only if still
 * empty ask Fady for ONE click (the Claude side panel in that window). Never ask which browser.
 * One browser-driving agent at a time, ever, guarded by browser-lock.cjs.
 */
const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');

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

if (cmd === 'open') {
  if (!target) { console.error('Usage: chrome.cjs open "<profile name or directory>" [url]'); process.exit(1); }
  const p = findProfile(target);
  if (!p) { console.error('No profile named "' + target + '". Known: ' + list.map((x) => x.name + ' [' + x.dir + ']').join(', ')); process.exit(1); }
  const before = flagStatus();
  // A NEW WINDOW every time (HQ, 2026-10-07, from the taxi session's finding): the extension opens a
  // session's tabs in the background, and no tool brings a tab forward, so a tab behind another one
  // reads hidden and screenshots time out. In a window of its own the agent's first tab is the
  // active tab. The agent works in this window, never in Fady's, and never opens a second tab here
  // (a second tab is a background tab again): it navigates the one tab.
  launch(p, url, ['--new-window']);
  console.log(`Opened a NEW Chrome window in profile "${p.name}" (${p.dir}, ${p.account})${url ? ' at ' + url : ''}. Work in this window's one tab (navigate it, never add a tab: a second tab is hidden). Now wait 30 to 60 seconds and check list_connected_browsers; only if still empty, ask Fady to open the Claude side panel in that window once.`);
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

console.error('Unknown command "' + cmd + '". Use no argument to list, or: open "<profile>" [url] | status | restart "<profile>"');
process.exit(1);
