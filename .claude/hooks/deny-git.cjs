// deny-git.cjs, PreToolUse hook for the shell tools (Bash, PowerShell).
// THE RULE (every venture AGENTS.md, "Backup and git"): sandboxed tools never run git and never run
// the backup scripts. Fady double-clicks save-to-cloud.cmd himself. This hook makes the rule
// deterministic instead of trusting a session to remember it.
// Shared kit file, identical in every venture folder. Owner of the kit: ../fady.be/kit/README.md.
// Proven in pro-debouchage since 2026-08-28 (as deny-git.js); kit version 2026-09-04.

const REASON =
  "AGENTS.md (Backup and git): sandboxed tools never run git or the backup scripts, not even read-only. Only Fady does, by double-clicking save-to-cloud.cmd.";

// git as a command word: start of line, or after a separator (; & | && || ( ) { } newline, or $( ).
// An optional path prefix is allowed (C:/Program Files/Git/bin/git, ./git, git.exe).
// This does not match substrings such as "digit" or file names such as "foo-git.js".
const GIT = /(?:^|[;&|(){}\n]|\$\()[ \t]*(?:[A-Za-z_][A-Za-z0-9_]*=[^ \t]*[ \t]+)*(?:[\w.:\\/-]*[\\/])?git(?:\.exe)?(?![\w.-])/i;

// Added 2026-09-20 (the HQ sweep tested ten shapes that slipped past the pattern above: `$x = git status`,
// `cmd /c git ...`, `bash -c "git ..."`, `Start-Process git ...`, `npx git ...`, a quoted full path to
// git.exe). git as a standalone word ANYWHERE in the command, when a real git subcommand follows it.
// Still no match inside other words (digit, legit, github) or file names (.gitignore, foo-git.js).
const SUB = '(?:status|log|diff|show|add|commit|push|pull|fetch|clone|init|checkout|switch|branch|merge|rebase|reset|restore|stash|tag|remote|rev-parse|rev-list|ls-files|ls-remote|clean|config|gc|rm|mv|describe|blame|worktree|cherry-pick|revert|reflog|fsck|prune|submodule|apply|archive|bisect|grep|update-index|symbolic-ref)';
const GIT_ANYWHERE = new RegExp('(?:^|[^\\w.\\-/\\\\])(?:[\\w.:\\\\/ -]*[\\\\/])?git(?:\\.exe)?["\']?\\s+(?:-[-\\w]+(?:[= ]\\S+)?\\s+)*' + SUB + '(?![\\w-])', 'i');

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
  if (GIT.test(command) || GIT_ANYWHERE.test(command) || SCRIPTS.test(command)) deny(REASON);
  process.exit(0);
});
