# Claude Code project best practices vs this setup (2026-08-28, Opus, foundation audit)

*Raw agent report, condensed. Sources: code.claude.com docs (memory, best-practices, skills, workflows, routines, scheduled tasks, whats-new), anthropic.com engineering posts (effective harnesses for long-running agents, effective context engineering, agent skills), claude.com blog (steering Claude Code).*

Measured: CLAUDE.md (5 lines) + AGENTS.md (106 lines) = 111 lines / 12.8 KB loaded every session, under Anthropic's 200-line target. `.claude/` holds only skills/ and launch.json: no settings.json, no hooks, no rules/. That is the biggest gap.

## (a) VALIDATED, already right per official guidance
- CLAUDE.md = `@AGENTS.md` import + Claude-specific lines below: the exact documented pattern, and the documented Windows alternative to a symlink.
- 111 lines total: under the "target under 200 lines" guidance.
- Procedures in 3 skills, facts out of the rulebook: matches "move multi-step procedures to a skill".
- Small state files read at session start + append-only LOG: matches the long-running-harness guidance (sessions start from progress files, not rebuilt context).
- Size caps as hard rules: "bloated CLAUDE.md files cause Claude to ignore your actual instructions".
- One-owner-per-fact table (section 4): matches "remove outdated or conflicting instructions".
- Fan-out to Opus subagents returning findings, not dumps: matches "subagents are one of the most powerful tools".
- "Design round done only when deployed and verified": matches "give Claude a check it can run".
- Auto-memory with MEMORY.md as an index plus topic files: the designed shape (only first 200 lines / 25 KB of MEMORY.md load).
- Rules written concrete and verifiable.
Nothing here is something Anthropic now recommends against, except the git ban is broader than needed (see b6).

## (b) RECOMMEND, concrete changes (each needs Fady's yes, rule changes)
1. Turn the unbendable rules into PreToolUse hooks in .claude/settings.json: deny git writes, deny Write/Edit on site-v1/** and ../taxi-business/**. CLAUDE.md text is advisory, hooks are enforcement. (docs: memory; blog: steering Claude Code, which names "never do this in CLAUDE.md" as the anti-pattern.)
2. Em-dash check as a PostToolUse hook (grep on written files) instead of a prose rule.
3. Move the page-source rules (image rules, rebuild rule) to a path-scoped .claude/rules/site-source.md with `paths: ["design/site-source/**", "assets/**"]`: loads only when touching those files, frees ~15 lines per session.
4. Make "rebuild and check" a script with an exit code Claude can run; optionally a Stop hook / goal condition so a turn cannot end until it passes.
5. Add `disable-model-invocation: true` to /pro-eof (and arguably /pro-orch): side-effect workflows Fady should time; also zero context cost until invoked.
6. Relax the git ban to read-only: allow git log/status/diff (sessions should see what changed; that is how drift starts), keep the write ban and enforce it with the hook from item 1.
7. Run /doctor once on this folder (v2.1.206+ proposes CLAUDE.md trims; the section-3 folder map is the candidate).
8. Adversarial review subagent before "done" on copy/page changes: fresh context sees only the diff plus the voice rule.

## (c) NEW TOOLS worth adopting
- Desktop scheduled tasks (LOCAL, Code tab > Routines > Local): runs on this machine against this folder; the right home for the VIES/VAT poll and the weekly ads report. Only fires while the desktop app is open.
- Cloud routines: run with laptop closed BUT clone a GitHub repo, no local files, fully autonomous. Wrong for this gated local project unless the folder goes to GitHub.
- /loop: in-session polling (e.g. /loop 30m VIES check) while working anyway.
- Dynamic workflows / ultracode keyword: for research-heavy fan-out with adversarial cross-checks; use per-prompt, not as session default.
- Artifacts: publish the weekly ads report / plans as a private page, matches "Fady reacts to work, not prose".
- /goal: encodes "not done until deployed and verified" as a re-checked condition.
- Subagent persistent memory (`memory:` field): a dedicated ads-analyst subagent remembering campaign learnings across sessions.

## (d) SKIP, and why
- Agent teams (experimental, overkill for one page). Cross-session messaging (macOS/Linux only). Worktree /batch fan-out (built for huge repos). Extra progress files like claude-progress.txt (LOG+STATE already own that; a fourth file breaks one-owner-per-fact). Nested per-directory CLAUDE.md (monorepo advice; path-scoped rules instead). ultracode as session default (cost). Cloud routines for day open/close (need Fady's yes and local files). Managed-policy CLAUDE.md (MDM territory).
