#!/usr/bin/env node
/*
 * chrome.cjs, the Chrome profile helper. Shared kit file, identical in every venture folder.
 * Owner of the kit: ../fady.be/kit/README.md. Kit version 2026-09-04.
 *
 * WHY: every session used to ask Fady "which browser?". Chrome's own Local State file is the one
 * owner of the profile map, so a session reads it and opens the profile it needs itself.
 *
 *   node .claude/scripts/chrome.cjs                      list the profiles (name, directory, account)
 *   node .claude/scripts/chrome.cjs open "fady.be"       open that profile (by name or directory)
 *   node .claude/scripts/chrome.cjs open "Profile 4" https://business.google.com/
 *
 * Verified 2026-09-04 in the HQ: "open" starts the right profile every time. What it does NOT do is
 * connect the Claude extension: a freshly opened window appears in list_connected_browsers only
 * after the Claude side panel in that window has been opened once (Fady's one click per Chrome
 * launch). So: open by command, check list_connected_browsers, and if it is empty ask Fady for that
 * ONE click in that window. Never ask which browser. One browser-driving agent at a time, ever.
 */
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const LOCAL_STATE = path.join(process.env.LOCALAPPDATA || '', 'Google', 'Chrome', 'User Data', 'Local State');
const CHROME = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
].find((p) => fs.existsSync(p)) || 'chrome.exe';

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

const [cmd, target, url] = process.argv.slice(2);
let list;
try { list = profiles(); } catch (e) {
  console.error('Could not read Chrome Local State at ' + LOCAL_STATE + ': ' + e.message);
  process.exit(1);
}

if (!cmd) {
  for (const p of list) console.log(`${p.dir.padEnd(10)} "${p.name}"  ${p.account}${p.person ? '  (' + p.person + ')' : ''}`);
  process.exit(0);
}

if (cmd === 'open') {
  if (!target) { console.error('Usage: chrome.cjs open "<profile name or directory>" [url]'); process.exit(1); }
  const want = target.toLowerCase();
  const p = list.find((x) => x.dir.toLowerCase() === want) || list.find((x) => x.name.toLowerCase() === want);
  if (!p) { console.error('No profile named "' + target + '". Known: ' + list.map((x) => x.name + ' [' + x.dir + ']').join(', ')); process.exit(1); }
  const args = ['--profile-directory=' + p.dir];
  if (url) args.push(url);
  const child = spawn(CHROME, args, { detached: true, stdio: 'ignore' });
  child.unref();
  console.log(`Opened Chrome profile "${p.name}" (${p.dir}, ${p.account})${url ? ' at ' + url : ''}. Now check list_connected_browsers; if empty, ask Fady to open the Claude side panel in that window once.`);
  process.exit(0);
}

console.error('Unknown command "' + cmd + '". Use no argument to list, or: open "<profile>" [url]');
process.exit(1);
