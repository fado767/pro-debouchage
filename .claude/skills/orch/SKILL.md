---
name: orch
description: Start the day on the Pro Débouchage project (Roro's drain-unblocking business). Use when Fady opens a session on this folder and says "orch", "pro-orch", "run today", "where are we", asks for the morning overview or the day's plan. It reads the small state files, checks them against each other, gives the MINE / RORO'S / A CLOCK'S overview and proposes the day, then waits. Use orch-mid to resume a day already started, and eof to close it.
---

# /orch (until 2026-09-04: /pro-orch)

**Procedure only. This skill owns HOW, never WHAT.** Facts, dates, gates and client state live in the
owner files named in `AGENTS.md` section 4. Read them fresh, never recall them. `AGENTS.md` binds over
this file. Renamed from `pro-orch` on 2026-09-04 (the HQ consistency pass) so every venture folder
answers to the same three words; the procedure is unchanged.

## Run it, in this order

0. **Name the session first:** call `set_session_title` (session "self") with
   `Pro Débouchage | orch | <today>` before anything else, so the sidebar entry and every Chrome tab
   group this session creates carry the project's name and never a bare "Orchestration" (Fady,
   2026-09-04). Rename again if the scope changes.
1. **Read, in full, the four small files:** `STATE.md`, `NOW.md`, `HANDOFF.md`, and the last entry of
   `LOG.md`. They are held to byte budgets by rule (`STATE.md` 14 KB, `NOW.md` 8 KB, `HANDOFF.md`
   4 KB), so reading them whole is cheap. Open a playbook file only when an open item points into it.
   Never open `research/` unless the day's work needs a source.
2. **One-line sweep.** Do the four files agree with each other (dates, what is open, what the handoff
   says was done)? Clean: say "Sweep clean." and nothing more. Not clean: stop, put the contradiction
   to Fady before anything else, and fix the file on his answer.
   - **On Monday, and after any session that changed an account, a price, a name or a live surface,
     fan out the FACT-SYNC audit alongside this sweep**, in the same batch as the weekly ads check.
     One READ-ONLY agent cross-checks every `playbook/` file against `STATE.md`, `NOW.md`,
     `DECISIONS.md` and the live site source and reports contradictions with file and line
     (`AGENTS.md` section 7). It reports, it never fixes: fold its findings into the day's plan at
     step 5, then fix them in the session or file them in `NOW.md`. It is read-only and cheap, so it
     never holds up the overview. The sweep covers the live state files, this covers the playbook,
     which nothing else forces anyone to re-read.
3. **If the handoff says the day already started, stop here and run `/orch-mid` instead.**
4. **The overview.** ONE numbered list, 1..N continuous, grouped under three bold headers:
   **MINE** (a session or agent can act on it now) · **RORO'S** (waiting on Roro or Fady's visit) ·
   **A CLOCK'S** (deliberately waiting on a date or a verdict, for example Google's verification). One
   or two plain sentences per item. Fady answers by number.
5. **The proposed plan, with reasons.** Which agents, in what order, what is time-sensitive, what
   deliberately waits. Describe each proposed agent's job in plain English (what it does, what Fady
   gets back), placed right after any question that needs his decision, so ONE reply from him gives
   the go. Never a bare menu. Then WAIT for Fady's go.
6. **Decisions that are Fady's go in an AskUserQuestion widget**, essentials inside the widget, 2 to 4
   options, recommended option first. He sees the widget, not the prose.

## While the day runs
- Fan out to subagents on Opus 5 by default. Read-only agents may run in parallel; agents that edit
  files run ONE at a time. Before a file agent runs, note which files it will touch; after it closes,
  open those files and confirm the claim matches the disk.
- Do the work by default: anything without payment, credentials or a decision that is truly Fady's is
  done, browser included. Access grants and anything touching money or a live surface are planned as
  Fady's own clicks (agent inventories, Fady clicks, agent verifies read-only).
- Browser work follows `AGENTS.md` section 14: take the machine-wide lock first
  (`node .claude/scripts/browser-lock.cjs acquire "Pro Débouchage"`, and stop if it says HELD: another
  project is driving Chrome), open the right Chrome profile by command
  (`node .claude/scripts/chrome.cjs open "Pro Debouchage"` for info@, `"fady.be"` for hi@), confirm
  the account from the page, close your own tabs, release the lock, verify the result and never the
  submission. A sub-agent that drives Chrome gets the acquire and release lines in its brief.
- Same-session logging (`AGENTS.md` section 8). Close it or file it (section 9).
- When the context grows long, say so unprompted, rewrite `HANDOFF.md`, and hand over to a fresh
  session that starts with `/orch-mid`.
- Close the day with `/eof`.

## Never
- No em dashes in anything new. No git, no `save-to-cloud.cmd`. Nothing edited in `../taxi-business/`.
- Never propose what a file marks as decided against, dropped or gated, without naming the gate.
- Never repeat a fact from memory that a file owns: open the owner and read it.
