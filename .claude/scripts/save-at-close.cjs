#!/usr/bin/env node
// save-at-close.cjs, the backup at the close: the ONE named door through which a session saves its folder.
// Kit file (../fady.be/kit/scripts/save-at-close.cjs), kit version 2026-09-23. Installed in every folder as
// .claude/scripts/save-at-close.cjs by Fady's double-click of kit/hooks/install-save-at-close.cmd.
//
// Why: Fady, 2026-09-23, by widget, his own idea: "when the session closes and everything checks out fine,
// then the eof with the save would run normally". The shape: research/2026-09-23-rules-review.md in the HQ,
// section 3 (the close step saves through one named door, only when the checks pass; not a SessionEnd hook,
// not a Stop hook).
//
// Who runs it: the closing step of a skill (a venture's /eof, the HQ's /ooo and /idea), after the session's
// last write, and only after list_sessions showed no other running session in this folder (that check is the
// skill's: this script cannot see sessions). Whoever writes, saves (Fady, 2026-09-23 evening): a session that
// wrote into ANOTHER folder (the HQ answering a FOR-HQ line, the pass re-pasting kit text) runs that folder's
// own copy of this script, from wherever it sits. The command is exactly
//     node .claude/scripts/save-at-close.cjs                   (or with --check, to see what it would do)
//     node ../<folder>/.claude/scripts/save-at-close.cjs       (the same door of another folder)
// and the kit's deny-git.cjs lets exactly those through (kit 2026-09-23: any folder prefix, nothing else).
// An installed copy (one that sits in <folder>\.claude\scripts\) always saves THAT folder, never the folder it
// is run from: the app resets a session's working directory after every shell call, so "run it from the
// folder's root" cannot reach another folder. The kit's own copy under kit/scripts/ has no folder of its own
// and saves the working directory, which is what the test runner uses with a throwaway folder.
//
// It refuses with ONE line "NOT SAVED <reason>" and exit code 1, and runs nothing, when:
//   - the folder has no .git folder, no git remote named origin, or no save-to-cloud.cmd at its root
//     (mom-visit has no cloud backup, by Fady's decision of 2026-09-04);
//   - .git\index.lock exists (never deleted here; looked at before and after the folder check);
//   - node ../fady.be/kit/verify.cjs <folder> ends with a FAIL (the folder name is found the way verify.cjs
//     maps it: its FOLDERS list, where the key is the name and `dir` the path under the Desktop);
//   - --check was given: then every check runs, nothing is started, and the line says what a real run would do.
// Otherwise it runs the folder's own save-to-cloud.cmd through cmd.exe, as a double-click would, with:
//   - NO_PAUSE=1, the switch the .cmd itself offers automated callers (it skips the pause at its end), and
//     stdin fed one Enter and then closed, so even a pause without that switch cannot wait for a key;
//   - GIT_TERMINAL_PROMPT=0 and GCM_INTERACTIVE=never, so a git that needs a sign-in fails at once instead of
//     waiting for a window nobody watches (Fady's double-click stays the way to sign in again);
//   - its own TEMP folder per folder (<temp>\save-at-close\<folder>), because the .cmd keeps its git log in ONE
//     file under %TEMP% for every venture, and two sessions closing at the same minute would read each other's
//     log (the shared log is queued in kit/README.md, 2026-09-22 item 3; this keeps the .cmd itself unchanged);
//   - a 9-minute limit, after which the whole process tree is stopped (taskkill /T /F); with the folder check
//     (45 seconds at most) the run stays inside the 10 minutes a shell tool call may take, so the line arrives.
// Then ONE line: "SAVED <snapshot>" (exit 0), "UP TO DATE <snapshot>" (exit 0: nothing new, GitHub already
// matched; the .cmd's own rule is that this is never called SAVED) or "NOT SAVED <reason>" (exit 1).
// SAVED needs both the .cmd's SAVED banner and its exit code 0; anything else is NOT SAVED.
// It runs no git command itself: the remote and the lock are read from files inside .git, so this script can
// never leave a lock of its own. git add, commit and push are the .cmd's, exactly as when Fady double-clicks it.
// Tests: kit/hooks/test-save-at-close.cjs (a throwaway folder, a fake save-to-cloud.cmd, a stub verify.cjs).

'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn, spawnSync } = require('child_process');

const BACKUP_SCRIPT = 'save-to-cloud.cmd';
const VERIFY_LIMIT_MS = 45 * 1000;
const SAVE_LIMIT_MS = 9 * 60 * 1000;
// For the test runner only: a shorter save limit in seconds. It can only LOWER the limit, never raise it.
const TEST_LIMIT_S = Number(process.env.SAVE_AT_CLOSE_TEST_LIMIT_SECONDS) || 0;
const saveLimitMs = TEST_LIMIT_S > 0 ? Math.min(SAVE_LIMIT_MS, TEST_LIMIT_S * 1000) : SAVE_LIMIT_MS;

// The folder to save: an installed copy lives in <folder>/.claude/scripts/ and saves that folder; the kit's own
// copy (kit/scripts/) has no such home and saves the working directory (the test runner relies on this).
const INSTALLED_IN = /[\\/]\.claude[\\/]scripts$/i.test(__dirname) ? path.resolve(__dirname, '..', '..') : null;
const FOLDER = INSTALLED_IN || process.cwd();
const GIT_DIR = path.join(FOLDER, '.git');
const LOCK = path.join(GIT_DIR, 'index.lock');
const LOCK_TEXT = '.git\\index.lock exists (git is busy, or a stopped git left it behind); it was not touched and nothing was run';

function result(word, text, code) {
  return { line: (word + ' ' + text).replace(/\s+/g, ' ').trim(), code };
}
const notSaved = (text) => result('NOT SAVED', text, 1);
function exists(p) { try { fs.accessSync(p); return true; } catch (e) { return false; } }
function duration(ms) { return ms >= 120000 ? Math.round(ms / 60000) + ' minutes' : Math.round(ms / 1000) + ' seconds'; }

// A remote named origin with a url, read from .git/config (no git process, no lock).
function hasOrigin(text) {
  let inOrigin = false;
  for (const raw of String(text).split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line[0] === '#' || line[0] === ';') continue;
    const head = line.match(/^\[\s*([A-Za-z0-9.-]+)(?:\s+"((?:[^"\\]|\\.)*)")?\s*\]/);
    if (head) { inOrigin = head[1].toLowerCase() === 'remote' && head[2] === 'origin'; continue; }
    if (inOrigin && /^url\s*=\s*\S/i.test(line)) return true;
  }
  return false;
}

// The HQ's verify.cjs: fady.be\kit\verify.cjs in this folder's parents (the HQ itself, a Desktop folder,
// or a folder one level deeper such as experiments\<name>).
function findVerify() {
  let dir = FOLDER;
  for (let i = 0; i < 4; i++) {
    const candidate = path.join(dir, 'fady.be', 'kit', 'verify.cjs');
    if (exists(candidate)) return candidate;
    const up = path.dirname(dir);
    if (up === dir) break;
    dir = up;
  }
  return null;
}

// The key verify.cjs knows this folder by: the entry of its FOLDERS list whose `dir` (or, without one, whose
// name) is this folder's path under the Desktop. verify.cjs itself does path.join(DESKTOP, cfg.dir || name).
function folderKey(verifyPath, rel) {
  let src = '';
  try { src = fs.readFileSync(verifyPath, 'utf8'); } catch (e) { return null; }
  const start = src.indexOf('const FOLDERS');
  if (start < 0) return null;
  const end = src.indexOf('\n};', start);
  const block = src.slice(start, end > start ? end : undefined);
  const entry = /^[ \t]*['"]?([\w.-]+)['"]?[ \t]*:[ \t]*\{([^\n]*)/gm;
  const want = rel.toLowerCase();
  let m;
  while ((m = entry.exec(block))) {
    const dir = ((m[2].match(/\bdir\s*:\s*['"]([^'"]+)['"]/) || [])[1] || m[1]).replace(/\\/g, '/').replace(/\/+$/, '');
    if (dir.toLowerCase() === want) return m[1];
  }
  return null;
}

// (b) the folder's checks: node <HQ>\kit\verify.cjs <key> --quiet must end CLEAN with exit code 0.
function folderCheck() {
  const verifyPath = findVerify();
  if (!verifyPath) return { stop: notSaved('the HQ check kit/verify.cjs was not found (looked for fady.be\\kit\\verify.cjs above this folder); nothing was run') };
  const desktop = path.resolve(path.dirname(verifyPath), '..', '..');
  const rel = path.relative(desktop, FOLDER).split(path.sep).join('/');
  if (!rel || rel.startsWith('..') || path.isAbsolute(rel)) return { stop: notSaved('this folder is not under ' + desktop + ', where kit/verify.cjs looks; nothing was run') };
  const key = folderKey(verifyPath, rel);
  if (!key) return { stop: notSaved('kit/verify.cjs does not list this folder (' + rel + '), so its checks cannot run; nothing was run') };
  const r = spawnSync(process.execPath, [verifyPath, key, '--quiet'], { cwd: FOLDER, encoding: 'utf8', timeout: VERIFY_LIMIT_MS, windowsHide: true, maxBuffer: 16 * 1024 * 1024 });
  if (r.error) {
    const why = r.error.code === 'ETIMEDOUT' ? 'did not finish within ' + duration(VERIFY_LIMIT_MS) : 'could not start (' + r.error.message + ')';
    return { stop: notSaved('the folder check (kit/verify.cjs ' + key + ') ' + why + '; nothing was run') };
  }
  const text = (r.stdout || '') + '\n' + (r.stderr || '');
  if (r.status === 0 && /RESULT: CLEAN/.test(text)) return { key };
  const fails = text.split(/\r?\n/).filter((l) => /^\s*FAIL\s/.test(l)).map((l) => l.trim().replace(/^FAIL\s+/, ''));
  const what = fails.length ? fails.length + ' FAIL, the first: ' + fails[0].slice(0, 160) : 'no clean result, exit code ' + r.status;
  return { stop: notSaved('the folder check failed (kit/verify.cjs ' + key + ': ' + what + '); nothing was run') };
}

// What save-to-cloud.cmd reported, read from its own banners (kit version of 2026-09-04).
function readResult(code, out) {
  const lines = out.split(/\r?\n/);
  const banner = (word) => lines.some((l) => new RegExp('^\\s*##\\s+' + word + '\\s+##\\s*$').test(l));
  const valueAfter = (label) => {
    for (const l of lines) { const i = l.indexOf(label); if (i >= 0) return l.slice(i + label.length).trim(); }
    return '';
  };
  if (code === 0 && banner('SAVED')) {
    const snap = valueAfter('New snapshot saved:');
    const range = valueAfter('Uploaded range:');
    return result('SAVED', 'new snapshot ' + (snap || '(id not shown)') + (range ? ' (range ' + range + ')' : '') + ', checked against GitHub by ' + BACKUP_SCRIPT, 0);
  }
  if (code === 0 && banner('UP TO DATE')) {
    return result('UP TO DATE', 'nothing new to save, GitHub already matches this computer (snapshot ' + (valueAfter('The latest snapshot on GitHub is:') || 'not shown') + ')', 0);
  }
  if (banner('NOT SAVED')) {
    const i = lines.findIndex((l) => /What went wrong:/.test(l));
    const why = i >= 0 ? (lines[i + 1] || '').trim() : '';
    return notSaved(why || BACKUP_SCRIPT + ' said NOT SAVED');
  }
  const last = lines.map((l) => l.trim()).filter(Boolean).pop() || 'no output';
  return notSaved(BACKUP_SCRIPT + ' gave no clear result (exit code ' + code + ', its last line: ' + last.slice(0, 120) + ')');
}

function timeoutResult(out) {
  const steps = out.split(/\r?\n/).map((l) => l.trim()).filter((l) => /^\[\d\/\d\]/.test(l));
  const where = steps.length ? ' at step "' + steps[steps.length - 1] + '"' : '';
  const lock = exists(LOCK) ? '; a .git\\index.lock is now left behind (the double-click clears a stale one itself after three tries)' : '';
  return notSaved('the save did not finish within ' + duration(saveLimitMs) + ' and was stopped' + where + lock);
}

// The one run of the folder's own save-to-cloud.cmd.
function runSave(key) {
  return new Promise((resolve) => {
    const comspec = process.env.ComSpec || 'cmd.exe';
    const target = path.join(FOLDER, BACKUP_SCRIPT);
    const temp = path.join(os.tmpdir(), 'save-at-close', key);
    try { fs.mkdirSync(temp, { recursive: true }); } catch (e) {
      resolve(notSaved('could not make its temp folder ' + temp + ' (' + e.message + '); nothing was run'));
      return;
    }
    const env = Object.assign({}, process.env, { NO_PAUSE: '1', GIT_TERMINAL_PROMPT: '0', GCM_INTERACTIVE: 'never', TEMP: temp, TMP: temp });
    let out = '';
    let timedOut = false;
    let child;
    try {
      // cmd /d /s /c ""<path>"" : /s strips the outer quotes, the inner pair keeps a path with spaces whole.
      child = spawn(comspec, ['/d', '/s', '/c', '""' + target + '""'], {
        cwd: FOLDER, env, windowsVerbatimArguments: true, windowsHide: true, stdio: ['pipe', 'pipe', 'pipe'],
      });
    } catch (e) {
      resolve(notSaved('could not start cmd.exe (' + e.message + '); nothing was run'));
      return;
    }
    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');
    child.stdout.on('data', (c) => { out += c; });
    child.stderr.on('data', (c) => { out += c; });
    child.stdin.on('error', () => {});
    child.stdin.end('\r\n');
    const timer = setTimeout(() => {
      timedOut = true;
      const taskkill = path.join(process.env.SystemRoot || 'C:\\Windows', 'System32', 'taskkill.exe');
      spawnSync(taskkill, ['/PID', String(child.pid), '/T', '/F'], { windowsHide: true, stdio: 'ignore' });
    }, saveLimitMs);
    child.on('error', (e) => { clearTimeout(timer); resolve(notSaved('could not run ' + BACKUP_SCRIPT + ' (' + e.message + ')')); });
    child.on('close', (code) => { clearTimeout(timer); resolve(timedOut ? timeoutResult(out) : readResult(code, out)); });
  });
}

async function main() {
  const args = process.argv.slice(2);
  const check = args.includes('--check');
  const extra = args.filter((a) => a !== '--check');
  if (extra.length) return notSaved('unknown argument "' + extra[0] + '" (the only option is --check); nothing was run');

  // (c) a folder with a cloud backup: .git as a folder, a remote named origin, save-to-cloud.cmd at the root
  let st = null;
  try { st = fs.statSync(GIT_DIR); } catch (e) {}
  if (!st) return notSaved('this folder has no .git folder, so it has no cloud backup; nothing was run');
  if (!st.isDirectory()) return notSaved('.git here is a file (a linked worktree), not the folder\'s own repository; nothing was run');
  let config = '';
  try { config = fs.readFileSync(path.join(GIT_DIR, 'config'), 'utf8'); } catch (e) {}
  if (!hasOrigin(config)) return notSaved('this folder has no git remote named origin, so it has no cloud backup; nothing was run');
  if (!exists(path.join(FOLDER, BACKUP_SCRIPT))) return notSaved('no ' + BACKUP_SCRIPT + ' at the root of this folder; nothing was run');

  // (a) the lock, (b) the folder's checks, (a) the lock once more (the check takes a few seconds)
  if (exists(LOCK)) return notSaved(LOCK_TEXT);
  const fc = folderCheck();
  if (fc.stop) return fc.stop;
  if (exists(LOCK)) return notSaved(LOCK_TEXT);

  // (d) --check: say what a real run would do, start nothing
  if (check) return notSaved('check only, nothing was run: every check passed (kit/verify.cjs ' + fc.key + ' clean, remote origin set, no index.lock); a real run would start ' + BACKUP_SCRIPT + ' in ' + FOLDER);

  return runSave(fc.key);
}

main().then(
  (r) => { process.stdout.write(r.line + '\n'); process.exitCode = r.code; },
  (e) => { process.stdout.write('NOT SAVED unexpected error in save-at-close.cjs: ' + String((e && e.message) || e).replace(/\s+/g, ' ') + '\n'); process.exitCode = 1; }
);
