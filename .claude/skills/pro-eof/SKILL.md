---
name: pro-eof
description: Close the day on the Pro Débouchage project. Use when Fady says "pro-eof", "eof", "close the day", "we are done for today", or leaves mid-day and wants a clean close. It gives the plain-English day summary, files everything that is not filed, rewrites HANDOFF.md, reports file sizes and proposes rule improvements as one dated line. Use pro-orch to start a day and pro-orch-mid to resume one.
---

# pro-eof

**Procedure only. This skill owns HOW, never WHAT.** `AGENTS.md` binds over this file, especially
sections 7 (size caps, rewrite in place), 8 (logging) and 9 (close it or file it).

## Run it, in this order

1. **The plain-English day summary** to Fady: what changed today, what it means for him, where things
   stand. Short, scannable. This is the session's job to give, never his to ask for.
2. **File everything.** Walk the day's chat for anything loggable that is not yet in a file: done work
   to `LOG.md` (one entry for the session, max 5 lines), open work to `NOW.md` (owner-tagged, closed
   lines removed and summarised in the LOG entry), decisions to `DECISIONS.md`, changed truths to
   `STATE.md`, account changes to `playbook/accounts.md`. Nothing stays only in chat.
3. **Size check.** Report the line count of `STATE.md` (cap 120), `NOW.md` (cap 60), `HANDOFF.md`
   (cap 40) and the byte size of `LOG.md` and `DECISIONS.md`. If a cap is hit, trim in this session
   before writing anything else, and say what moved where.
4. **Rewrite `HANDOFF.md`** for the next session: what today did, what is next, what is waiting on
   whom, and whether the next session should start with `/pro-orch` (a new day) or `/pro-orch-mid`
   (same day, Fady is coming back). Max 40 lines. Any rule improvement proposed today goes into the
   handoff the moment it is proposed, so it survives a fresh session.
5. **Propose improvements** to the rules or the skills as ONE dated line each, apply only on Fady's
   explicit yes, and file the applied ones in `LOG.md`. A skill that misfired today is fixed today.
6. **The closing block**, always the last thing said: one line "what was logged and where" (or
   "Nothing to log this session"), and the reminder that Fady double-clicks `save-to-cloud.cmd`
   himself if anything on disk changed. Closing reminders are never open items.

## Never
- No em dashes in anything new. No git, no `save-to-cloud.cmd`. Nothing edited in `../taxi-business/`.
- Never rewrite `LOG.md` or `DECISIONS.md` history; append only.
