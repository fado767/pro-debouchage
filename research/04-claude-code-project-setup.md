# Claude Code project setup, current official guidance (fetched 2026-08-22)

*Research by the claude-code-guide agent (Opus), written to disk by the kickoff session because that agent had no write tool. All points from the official docs, URL after each. No em dashes.*

Scope: a long-running, non-software business project (one client, landing page plus Google Ads), run daily by one person, with subagents, that must stay cheap to start and improve itself over time.

## 1. CLAUDE.md

- Two memory systems load at every session start: CLAUDE.md (you write it, instructions and rules) and auto memory (Claude writes it, learnings and corrections). Both are context, not enforced configuration. To make something happen every time, use a hook. https://code.claude.com/docs/en/memory
- Size: target under 200 lines per CLAUDE.md. Longer files consume more context and reduce adherence. https://code.claude.com/docs/en/memory
- What belongs: commands Claude cannot guess, conventions that differ from defaults, business decisions, environment quirks, gotchas. What does not: anything derivable from the files, tutorials, reference docs, things that change often. Test per line: "would removing this cause a mistake?" https://code.claude.com/docs/en/best-practices
- A CLAUDE.md section that became a multi-step procedure (about 30 lines or more) belongs in a skill. https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more
- `@path` imports organise but do NOT save context: they are expanded at launch. Claude Code reads CLAUDE.md, not AGENTS.md; the official pattern is a CLAUDE.md whose first line is `@AGENTS.md` (a symlink needs Admin on Windows). https://code.claude.com/docs/en/memory
- `.claude/rules/` exists: one markdown file per topic, `paths:` frontmatter makes a rule load only when matching files are touched. An unscoped rule costs the same as CLAUDE.md text. https://code.claude.com/docs/en/memory
- `/context` shows what loaded, `/doctor` proposes trims, the project-root CLAUDE.md is re-injected after `/compact`. https://code.claude.com/docs/en/context-window

## 2. Skills

- `.claude/skills/<name>/SKILL.md`, the directory name is the command. Keep under 500 lines, detail in sibling reference files (progressive disclosure: only descriptions load at start, the body on use, reference files only if opened). https://code.claude.com/docs/en/skills
- Frontmatter fields: name, description, when_to_use, argument-hint, arguments, disable-model-invocation, user-invocable, allowed-tools, disallowed-tools, model, effort, context (fork), agent, background, hooks, paths, shell, metadata, license, compatibility. description plus when_to_use truncate at 1,536 characters, so the key use case goes first.
- `disable-model-invocation: true` keeps a skill's description out of startup context entirely (zero cost until `/name` is typed) and stops Claude firing it on its own. Recommended for anything with side effects. Trade-off: typing the name in prose no longer triggers it.
- Once invoked, the rendered SKILL.md stays in the conversation for the session; write standing instructions, not one-time steps.
- Slash commands are merged into skills; `.claude/commands/*.md` still works, skills win on a name clash and are the recommended form.
- Extras: `$ARGUMENTS`, `${CLAUDE_PROJECT_DIR}`, `` !`command` `` injects live shell output into the body at invoke time, `context: fork` runs the skill in its own subagent.

## 3. Subagents

- `.claude/agents/<name>.md` with frontmatter: name, description, tools or disallowedTools, model (haiku, sonnet, opus, fable, inherit), permissionMode, skills (preloaded in full), memory, isolation: worktree, maxTurns, background, mcpServers. https://code.claude.com/docs/en/sub-agents
- Define a custom agent when you want a fixed tool restriction, a fixed model, preloaded skills, or the same shaped job repeatedly. Stay ad hoc for one-offs. A subagent gets a fresh window and returns a summary, so heavy reading costs the session almost nothing. Subagents do not inherit the main session's auto memory.
- Adversarial review is an explicit recommendation: a fresh-context subagent reviews the result against the plan and reports only gaps that affect correctness. https://code.claude.com/docs/en/best-practices

## 4. Hooks

- Shell commands (or http, mcp tool, prompt, agent handlers) at lifecycle events; deterministic where CLAUDE.md is advisory; zero context unless they return output. https://code.claude.com/docs/en/hooks-guide
- Useful events: SessionStart (matchers startup, resume, clear, compact), UserPromptSubmit, Stop, SessionEnd, PreToolUse (can block), PostToolUse, PreCompact, PostCompact.
- A SessionStart hook's stdout is added to context: the "print the state file at start" pattern. For content needed on every start the docs say CLAUDE.md may be simpler; reserve the hook for dynamic output.
- A Stop hook can gate: a command hook exiting 2 blocks the turn from ending; a prompt hook asks a small model whether the work is complete. Overridden after 8 consecutive blocks.
- Shape, project `.claude/settings.json`:

```json
{
  "hooks": {
    "SessionStart": [
      { "matcher": "compact", "hooks": [ { "type": "command", "command": "echo Reminder: state lives in STATE.md and NOW.md, log to LOG.md before finishing." } ] }
    ],
    "Stop": [
      { "hooks": [ { "type": "prompt", "prompt": "If anything this turn changed client state, spend or a decision and it was not written to a state file, respond {\"ok\": false, \"reason\": \"log it first\"}. Otherwise {\"ok\": true}." } ] }
    ]
  }
}
```
On Windows, command hooks run through Git Bash when present, else PowerShell. https://code.claude.com/docs/en/tools-reference#shell-selection-in-settings-hooks-and-skills

## 5. Auto memory

- Per repository at `~/.claude/projects/<project>/memory/`, MEMORY.md is the index, only its first 200 lines or 25 KB load. Machine-local, not in git, for preferences and corrections. Business state belongs in versioned project files. https://code.claude.com/docs/en/memory

## 6. Patterns for a daily orchestrator

- Governing principle: procedure in skills, facts in files, always-true rules in CLAUDE.md, guarantees in hooks. "You paste the same playbook for the third time" triggers a skill; "Claude gets a convention wrong twice" triggers a CLAUDE.md line; "it must happen every time" triggers a hook. https://code.claude.com/docs/en/features-overview
- Three skills, not one, one per day phase.
- How big a start read: no single published number; the constraints are CLAUDE.md under 200 lines, MEMORY.md 200 lines or 25 KB, SKILL.md under 500 lines; a realistic startup is about 7,500 tokens. Practical: a handful of files of 100 to 200 lines each, everything larger on demand.
- The read list lives inside the skill, not in CLAUDE.md. Expensive parts go to subagents. Give the day a verifiable end condition.
- Session hygiene: `/clear` between unrelated tasks, `/rename`, `--continue` or `--resume`, `/btw` for side questions, `/compact <instructions>`.

## 7. Worth using in 2026

- Plan mode (Shift+Tab), auto mode as the default permission mode with an allowlist.
- Scheduled work, three tiers: `/loop` inside an open session (session-scoped, 7 days), Desktop scheduled tasks (local machine, no open session, can touch local files, the right tier for a daily routine that reads local state), Routines in the cloud (min 1 hour, fresh clone, no local files). https://code.claude.com/docs/en/scheduled-tasks
- Dynamic workflows (the Workflow tool, `ultracode`, `/deep-research`): dozens of subagents from a script, expensive, for audits not daily routine. https://code.claude.com/docs/en/workflows
- Worktrees, remote and cloud sessions, Remote Control from a phone, cross-session messaging, checkpointing and `/rewind`, `/context`, `/goal`, `/verify`, `/batch`, Artifacts.

## Recommended minimal structure (the agent's proposal; the kickoff session adopted the flat version, see AGENTS.md section 3)

```
pro-debouchage/
  CLAUDE.md                  # first line @AGENTS.md
  AGENTS.md
  .claude/settings.json      # hooks, permissions allowlist (optional)
  .claude/skills/<three day skills>/SKILL.md
  .claude/agents/            # optional: researcher.md (haiku, read-only), reviewer.md (opus, read-only)
  STATE.md NOW.md DECISIONS.md LOG.md HANDOFF.md
  playbook/ site/ assets/ research/
```

Suggested frontmatter for the three day skills (adopted in spirit; `disable-model-invocation` deliberately NOT set on 2026-08-22 so that typing the skill name in prose still triggers it, the cost is three short descriptions):

```yaml
---
name: pro-orch
description: ...
disable-model-invocation: true   # optional, see trade-off above
allowed-tools: Read Glob Grep
model: opus
effort: high
---
```
