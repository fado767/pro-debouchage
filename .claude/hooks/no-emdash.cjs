// no-emdash.cjs, PreToolUse hook for Write and Edit (moved from PostToolUse on 2026-09-15 by the HQ,
// on the ecom sweep finding of 2026-09-11: exit 2 now refuses the write BEFORE it lands, because
// Anthropic's hooks reference says a PostToolUse hook cannot undo what the tool already did).
// THE RULE (every venture AGENTS.md, writing rules): no em dashes, ever, in anything NEW.
// It checks the TEXT THE TOOL WROTE (the Write content, or the Edit new_string), never the whole
// file, so an old file that still carries em dashes from earlier history is not flagged when a
// session edits one line of it (the taxi business keeps about 1,764 historical em dashes on purpose).
// Exit 2 blocks the call and hands the session one line back; the session fixes the text and writes again.
// Shared kit file, identical in every venture folder. Owner of the kit: ../fady.be/kit/README.md.
// Kit version 2026-09-15 (2026-09-04 shape), replacing the whole-file check used in pro-debouchage and ecom before.

const path = require("path");
const EM_DASH = String.fromCharCode(0x2014); // the em dash, built from its code so this file passes its own check
// Only files INSIDE this project folder are checked. Claude's memory notes live outside it
// (~/.claude/projects/...) and their index uses the harness's own dash format.
const ROOT = path.resolve(__dirname, "..", "..").split("\\").join("/").toLowerCase().replace(/\/+$/, "");

let raw = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (c) => (raw += c));
process.stdin.on("end", () => {
  let input = {};
  try {
    input = JSON.parse(raw || "{}");
  } catch (e) {
    process.exit(0);
  }
  const ti = input.tool_input || {};
  const file = String(ti.file_path || "");
  if (file) {
    const abs = path.resolve(ROOT, file).split("\\").join("/").toLowerCase();
    if (!abs.startsWith(ROOT + "/")) process.exit(0); // outside the project: not ours to check
  }
  // What was actually written this call.
  let text = "";
  if (typeof ti.content === "string") text = ti.content;          // Write
  else if (typeof ti.new_string === "string") text = ti.new_string; // Edit
  if (!text || text.indexOf(EM_DASH) === -1) process.exit(0);

  const lines = text.split(/\r?\n/);
  const hits = [];
  for (let i = 0; i < lines.length && hits.length < 5; i++) {
    if (lines[i].indexOf(EM_DASH) !== -1) hits.push(lines[i].trim().slice(0, 60));
  }
  process.stderr.write(
    "AGENTS.md writing rules: no em dashes, ever, in anything new. The text just written to " +
      (file || "a file") +
      " contains an em dash (" +
      hits.map((h) => '"' + h + '"').join(", ") +
      "). Replace each one with a comma, a full stop or brackets, then continue.\n"
  );
  process.exit(2);
});
