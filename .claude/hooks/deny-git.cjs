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

// The two backup scripts, denied where a shell would RUN them. Changed 2026-09-21: before, any command
// that merely NAMED a script was denied, and an ecom session writing plain prose about the backup was
// refused (and blamed the wrong words). A copy, a move, a read, a grep or a sentence now passes.
// The script as a token: an optional quote, an optional path (spaces only inside quotes), the name.
const NAME = '(?:save-to-cloud|first-time-setup)\\.cmd';
const TOKEN = '(?:"[^"\\n]*?[\\\\/]|\'[^\'\\n]*?[\\\\/]|["\']?(?:[\\w.:\\\\/~$%-]*[\\\\/])?)' + NAME;
// 1. At a command position: start, or after ; & | ( ) { } newline, $( or a backtick (bash runs backticks
//    in double quotes and in an unquoted heredoc). The call operator & and the dot are stepped over.
const SCRIPT_AT_CMD = new RegExp('(?:^|[;&|(){}\\n`]|\\$\\()[ \\t]*(?:[&.][ \\t]+)?(?:[A-Za-z_][A-Za-z0-9_]*=[^ \\t]*[ \\t]+)*' + TOKEN, 'i');
// 2. Handed to a launcher word or a run flag that stands right before it: call, start "", Invoke-Item,
//    then, do, exec, -c, -Command, -File, -FilePath, /c, /k.
const SCRIPT_LAUNCHED = new RegExp('(?:^|[^\\w.-])(?:call|start|invoke-item|ii|then|do|else|exec|nohup|env|time|xargs|-c|-command|-file|-filepath|/c|/k)(?:[ \\t]+(?:""|\'\'|-[\\w]+))*[ \\t]+(?:["\'][ \\t]*)?(?:[&.][ \\t]+)?' + TOKEN, 'i');
// 3. Named anywhere in a command that also carries a word that starts programs: cmd, a second shell,
//    Start-Process, Invoke-Expression, explorer, child_process, subprocess, a task scheduler.
const SCRIPT_NAMED = new RegExp(NAME, 'i');
const EXEC_CONTEXT = /(?<![\w.-])(?:cmd(?:\.exe)?|powershell(?:\.exe)?|pwsh(?:\.exe)?|bash(?:\.exe)?|sh|wsl(?:\.exe)?|start-process|saps|invoke-expression|iex|explorer(?:\.exe)?|conhost(?:\.exe)?|wscript|cscript|schtasks|register-scheduledtask|child_process|execsync|execfile|spawn|spawnsync|subprocess|os\.system|popen|shellexecute)(?![\w-])/i;

function verdict(command) {
  let m = command.match(GIT) || command.match(GIT_ANYWHERE);
  if (m) return 'git as a command ("' + m[0].trim().slice(-60) + '")';
  m = command.match(SCRIPT_AT_CMD) || command.match(SCRIPT_LAUNCHED);
  if (m) return 'a backup script is run ("' + m[0].trim().slice(-80) + '")';
  if (SCRIPT_NAMED.test(command) && EXEC_CONTEXT.test(command)) {
    return 'a backup script is named next to a program starter ("' + command.match(EXEC_CONTEXT)[0] + '")';
  }
  return null;
}

function deny(what) {
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason:
          REASON + " Blocked here: " + what + ". If this is only text or a file name and nothing is run, write the text with the Write or Edit tool, or reword the command.",
      },
    })
  );
  process.exit(0);
}

if (require.main === module) {
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
    const what = verdict(command);
    if (what) deny(what);
    process.exit(0);
  });
} else {
  module.exports = { verdict };
}
