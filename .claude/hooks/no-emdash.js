// PostToolUse hook for Write and Edit.
// AGENTS.md section 6: no em dashes, ever, in anything new.
// Reads the tool input as JSON on stdin, checks the written file, exits 2 when an em dash is there.

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");
const EM_DASH = "\u2014";

// History and raw reports may carry em dashes, they are not new copy.
const SKIP_DIRS = ["/_archive/", "/to-delete/", "/research/", "/.git/", "/node_modules/"];

function norm(p) {
  return p.split("\\").join("/").toLowerCase();
}

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
  const tr = input.tool_response || {};
  const given = String(tr.filePath || ti.file_path || "");
  if (!given) process.exit(0);

  const absReal = path.resolve(ROOT, given);
  const abs = norm(absReal);
  const root = norm(ROOT).replace(/\/+$/, "");

  if (!abs.startsWith(root + "/")) process.exit(0);
  if (SKIP_DIRS.some((d) => abs.includes(d))) process.exit(0);

  let buf;
  try {
    buf = fs.readFileSync(absReal);
  } catch (e) {
    process.exit(0);
  }
  if (buf.includes(0)) process.exit(0); // binary file

  const text = buf.toString("utf8");
  if (text.indexOf(EM_DASH) === -1) process.exit(0);

  const lines = text.split(/\r?\n/);
  const hits = [];
  for (let i = 0; i < lines.length && hits.length < 5; i++) {
    if (lines[i].indexOf(EM_DASH) !== -1) hits.push("line " + (i + 1));
  }
  process.stderr.write(
    "AGENTS.md section 6: no em dashes, ever, in anything new. " +
      given +
      " contains an em dash (" +
      hits.join(", ") +
      "). Replace each one with a comma, a full stop or brackets, then continue.\n"
  );
  process.exit(2);
});
