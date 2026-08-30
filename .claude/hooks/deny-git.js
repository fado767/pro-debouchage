// PreToolUse hook for shell tools (Bash, PowerShell).
// AGENTS.md section 7: sandboxed tools never run git and never run the backup scripts.
// Reads the tool input as JSON on stdin, denies matching commands.

const REASON =
  "AGENTS.md section 7: sandboxed tools never run git or the backup scripts. Only Fady does.";

// git as a command word: start of line, or after a separator (; & | && || ( ) { } newline, or $( ).
// An optional path prefix is allowed (C:/Program Files/Git/bin/git, ./git, git.exe).
// This does not match substrings such as "digit" or file names such as "foo-git.js".
const GIT = /(?:^|[;&|(){}\n]|\$\()[ \t]*(?:[A-Za-z_][A-Za-z0-9_]*=[^ \t]*[ \t]+)*(?:[\w.:\\/-]*[\\/])?git(?:\.exe)?(?![\w.-])/i;

const SCRIPTS = /(save-to-cloud|first-time-setup)\.cmd/i;

function deny(reason) {
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason: reason,
      },
    })
  );
  process.exit(0);
}

let raw = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (c) => (raw += c));
process.stdin.on("end", () => {
  let input = {};
  try {
    input = JSON.parse(raw || "{}");
  } catch (e) {
    process.exit(0); // unreadable input, do not block
  }
  const ti = input.tool_input || {};
  const command = String(ti.command || "");
  if (!command) process.exit(0);
  if (GIT.test(command) || SCRIPTS.test(command)) deny(REASON);
  process.exit(0);
});
