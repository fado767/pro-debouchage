// log-guard.cjs, LOGGING GUARD part 2 of 2, Stop hook.
// THE RULE (every venture AGENTS.md, logging): the moment something loggable happens, it is written
// into the right owner file in the SAME session. This hook asks the one question it can answer
// without judgement: since this session began, did a project file change while NO log-owner file
// changed? True: exit 2, which hands the session one line back (the session files it and stops
// again). False: silent. It speaks only once (stop_hook_active) and fails OPEN on any error.
//
// WHICH FILES ARE LOG OWNERS is the only thing that differs per venture, so it lives next to this
// file in log-owners.json: { "owners": [regex strings, matched against the lower-cased path relative
// to the folder root, forward slashes], "skipDirs": [folder names never scanned], "hint": "..." }.
// Without that file the defaults below apply (the standard venture file set).
// Shared kit file, identical in every venture folder. Owner of the kit: ../fady.be/kit/README.md.
// Built in taxi-business 2026-08-29; kit version 2026-09-04 (owners moved to log-owners.json).
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');

const DEFAULT_OWNERS = ['^log\\.md$', '^state\\.md$', '^open\\.md$', '^now\\.md$', '^decisions\\.md$', '^handoff\\.md$'];
const DEFAULT_SKIP = ['.git', 'node_modules', '.claude', '.wrangler', 'research', '_archive', 'to-delete', '_to_delete'];

let owners = DEFAULT_OWNERS, skip = DEFAULT_SKIP, hint = '';
try {
  const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'log-owners.json'), 'utf8'));
  if (Array.isArray(cfg.owners) && cfg.owners.length) owners = cfg.owners;
  if (Array.isArray(cfg.skipDirs)) skip = cfg.skipDirs;
  if (typeof cfg.hint === 'string') hint = cfg.hint;
} catch (e) { /* defaults */ }
const OWNERS = owners.map(s => new RegExp(s, 'i'));
const SKIP_DIRS = new Set(skip.map(s => s.toLowerCase()));

let data = '';
process.stdin.on('data', c => (data += c));
process.stdin.on('end', () => {
  try {
    const j = JSON.parse(data || '{}');
    if (j.stop_hook_active) return process.exit(0);            // already told once, never loop
    const id = String(j.session_id || 'nosession').replace(/[^a-z0-9-]/gi, '');
    const stampPath = path.join(__dirname, 'state', id + '.stamp');
    if (!fs.existsSync(stampPath)) return process.exit(0);     // no stamp: stay silent
    const since = Number(fs.readFileSync(stampPath, 'utf8').trim());
    if (!Number.isFinite(since)) return process.exit(0);
    const changed = [];
    (function walk(dir, rel) {
      let entries; try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch (e) { return; }
      for (const e of entries) {
        if (e.isDirectory()) { if (SKIP_DIRS.has(e.name.toLowerCase())) continue; walk(path.join(dir, e.name), rel ? rel + '/' + e.name : e.name); }
        else if (e.isFile()) { try { if (fs.statSync(path.join(dir, e.name)).mtimeMs > since) changed.push((rel ? rel + '/' + e.name : e.name).toLowerCase()); } catch (err) {} }
      }
    })(ROOT, '');
    if (changed.length === 0) return process.exit(0);          // read-only session
    if (changed.some(p => OWNERS.some(re => re.test(p)))) return process.exit(0);  // routing followed
    const list = [...new Set(changed)].slice(0, 12).join(', ');
    process.stderr.write('LOGGING GUARD (AGENTS.md, logging): this session changed project files and changed no log-owner file. Changed: ' + list + '. Log it in the SAME session before stopping. ' + (hint || 'Events and spend to LOG.md, facts that changed to STATE.md, open items to OPEN.md or NOW.md, decisions to DECISIONS.md.') + ' If the change genuinely owns no log line, say so in your closing line and stop again: this hook speaks only once.\n');
    return process.exit(2);
  } catch (e) { return process.exit(0); }                      // fail open on purpose
});
