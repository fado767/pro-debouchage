#!/usr/bin/env node
/*
 * browser-lock.cjs, the machine-wide browser lock. Shared kit file, identical in every venture folder.
 * Owner of the kit: ../fady.be/kit/README.md. Kit version 2026-09-04 (Fady's ask after two project
 * sessions ran in parallel and their Chrome agents collided on 2026-08-24 and 2026-09-01).
 *
 * ONE Chrome-driving agent at a time on this machine, across ALL projects. This file makes the rule
 * checkable instead of remembered: every session or agent takes the lock before it touches Chrome
 * and releases it the moment its tabs are closed. The lock lives outside every project folder so all
 * of them see the same one.
 *
 *   node .claude/scripts/browser-lock.cjs acquire "Vachtmeesters"   take it (exit 0) or learn who holds it (exit 1)
 *   node .claude/scripts/browser-lock.cjs release "Vachtmeesters"   give it back (only the holder can)
 *   node .claude/scripts/browser-lock.cjs status                      who holds it, since when
 *   node .claude/scripts/browser-lock.cjs release --force             Fady's emergency reset only
 *
 * A lock older than STALE_MIN minutes counts as abandoned (a crashed agent) and is taken over, with a
 * line saying so. Re-acquiring by the same owner refreshes the timestamp.
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(process.env.LOCALAPPDATA || require('os').tmpdir(), 'fady-kit');
const LOCK = path.join(DIR, 'browser.lock');
const STALE_MIN = 20;

const [cmd, owner] = process.argv.slice(2);
const now = Date.now();
const stamp = (t) => new Date(t).toTimeString().slice(0, 5);
const mins = (t) => Math.round((now - t) / 60000);

function readLock() {
  try { return JSON.parse(fs.readFileSync(LOCK, 'utf8')); } catch (e) { return null; }
}
function write(o) {
  fs.mkdirSync(DIR, { recursive: true });
  fs.writeFileSync(LOCK, JSON.stringify(o));
}

const cur = readLock();
const stale = cur && mins(cur.since) >= STALE_MIN;

if (cmd === 'status') {
  if (!cur) console.log('FREE: nobody is driving Chrome.');
  else console.log(`${stale ? 'STALE' : 'HELD'} by ${cur.owner} since ${stamp(cur.since)} (${mins(cur.since)} min, folder ${cur.cwd})${stale ? ', counts as abandoned' : ''}.`);
  process.exit(0);
}

if (cmd === 'acquire') {
  if (!owner) { console.error('Usage: browser-lock.cjs acquire "<venture name>"'); process.exit(2); }
  if (cur && !stale && cur.owner !== owner) {
    console.log(`HELD by ${cur.owner} since ${stamp(cur.since)} (${mins(cur.since)} min, folder ${cur.cwd}). Do NOT open Chrome. Do other work first and retry; it frees itself after ${STALE_MIN} min if that agent died.`);
    process.exit(1);
  }
  write({ owner, since: now, cwd: process.cwd(), pid: process.pid });
  console.log(`LOCK TAKEN by ${owner} at ${stamp(now)}${cur && stale ? ` (took over a stale lock of ${cur.owner}, ${mins(cur.since)} min old)` : ''}. Release it the moment your tabs are closed.`);
  process.exit(0);
}

if (cmd === 'release') {
  if (!cur) { console.log('Already free.'); process.exit(0); }
  if (owner === '--force' || cur.owner === owner || stale) {
    fs.unlinkSync(LOCK);
    console.log(`RELEASED (was ${cur.owner} since ${stamp(cur.since)}).`);
    process.exit(0);
  }
  console.log(`NOT released: held by ${cur.owner}, not by ${owner || '(no name given)'}.`);
  process.exit(1);
}

console.error('Usage: browser-lock.cjs acquire "<venture>" | release "<venture>" | status | release --force');
process.exit(2);
