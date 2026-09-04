// session-stamp.cjs, LOGGING GUARD part 1 of 2, SessionStart hook.
// Drops one timestamp file, .claude/hooks/state/<session_id>.stamp, so the Stop half (log-guard.cjs)
// can ask "which files changed since this session began" by reading modification times.
// Modification times see every writer (the Edit tool, a Bash heredoc, a node script), which is why
// the guard reads them instead of recording tool calls. Fails OPEN on any error.
// Shared kit file, identical in every venture folder. Owner of the kit: ../fady.be/kit/README.md.
// Built in taxi-business 2026-08-29; kit version 2026-09-04.
const fs = require('fs');
const path = require('path');
let data = '';
process.stdin.on('data', c => (data += c));
process.stdin.on('end', () => {
  try {
    const j = JSON.parse(data || '{}');
    const id = String(j.session_id || 'nosession').replace(/[^a-z0-9-]/gi, '');
    const dir = path.join(__dirname, 'state');
    fs.mkdirSync(dir, { recursive: true });
    // A resume re-stamps, which can only make the guard quieter, never noisier.
    fs.writeFileSync(path.join(dir, id + '.stamp'), String(Date.now()));
    // Housekeeping: drop stamps older than 7 days so the folder cannot grow forever.
    const week = Date.now() - 7 * 24 * 60 * 60 * 1000;
    for (const f of fs.readdirSync(dir)) {
      try { const p = path.join(dir, f); if (fs.statSync(p).mtimeMs < week) fs.unlinkSync(p); } catch (e) {}
    }
  } catch (e) { /* fail open on purpose */ }
  process.exit(0);
});
