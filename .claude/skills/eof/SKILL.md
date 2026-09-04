---
name: eof
description: Close the day on the Pro Débouchage project. Use when Fady says "eof", "pro-eof", "close the day", "we are done for today", or leaves mid-day and wants a clean close. It gives the plain-English day summary, files everything that is not filed, rewrites HANDOFF.md, reports file sizes and applies rule improvements. Use orch to start a day and orch-mid to resume one.
---

# /eof (until 2026-09-04: /pro-eof)

**Procedure only. This skill owns HOW, never WHAT.** `AGENTS.md` binds over this file, especially
sections 7 (byte budgets, rewrite in place), 8 (logging) and 9 (close it or file it). Renamed from
`pro-eof` on 2026-09-04 (the HQ consistency pass); the procedure is unchanged.

## Run it, in this order

1. **The plain-English day summary** to Fady: what changed today, what it means for him, where things
   stand. Short, scannable, IN BULLET POINTS (Fady 2026-09-01). This is the session's job to give,
   never his to ask for. An eof can happen at any hour, morning included: never write "evening" or
   "tonight" from habit, use the actual time of day.
2. **File everything.** Walk the day's chat for anything loggable that is not yet in a file: done work
   to `LOG.md` (one entry for the session, max 5 lines and under about 2,500 bytes), open work to
   `NOW.md` (owner-tagged, closed lines removed and summarised in the LOG entry), decisions to
   `DECISIONS.md`, changed truths to `STATE.md`, account changes to `playbook/accounts.md`. Nothing
   stays only in chat.
3. **Size check, in bytes.** Run `wc -c STATE.md NOW.md HANDOFF.md LOG.md DECISIONS.md` and report the
   result against the budgets in `AGENTS.md` section 3: `STATE.md` 14 KB, `NOW.md` 8 KB, `HANDOFF.md`
   4 KB. `LOG.md` and `DECISIONS.md` have no file budget, report their size anyway so the growth stays
   visible. If a budget is passed, trim in this session before writing anything else, and say what
   moved where. Lines are not the measure: one line here can be 350 characters.
4. **Fact-sync if today touched a fact.** If the session changed an account, a price, a name or
   anything on a live surface, do not wait for Monday: fan out the READ-ONLY FACT-SYNC agent now
   (`AGENTS.md` section 7) to cross-check every `playbook/` file against `STATE.md`, `NOW.md`,
   `DECISIONS.md` and the live site source. Fix what it reports in this session or file it in
   `NOW.md`, never leave it in chat. If nothing of that kind changed, say so in one line and move on.
   (Added 2026-08-30 on Fady's yes.)
5. **Stop the background agents.** Check the session's background agents and tasks; stop any still
   running and confirm all are closed BEFORE the handoff is written, so nothing lingers as a running
   session in Fady's panel after the close. (Added 2026-08-24 on Fady's yes.)
6. **Rewrite `HANDOFF.md`** for the next session: what today did, what is next, what is waiting on
   whom, and whether the next session should start with `/orch` (a new day) or `/orch-mid`
   (same day, Fady is coming back). Budget 4 KB. Any rule improvement proposed today goes into the
   handoff the moment it is proposed, so it survives a fresh session.
7. **Improvements** to the rules or the skills: APPLY them directly, dated, and file them in `LOG.md`,
   when they only change how Claude and the files work internally. Put an improvement to Fady ONLY
   when it changes what HE does, sees or decides (rule changed 2026-09-01 on Fady's word; before that
   every improvement waited for his yes). A skill that misfired today is fixed today. An improvement
   that would help every venture is noted as one line for the HQ (`../fady.be/IDEAS.md` is where Fady
   collects them; this session does not edit the HQ files itself).
8. **The closing block**, always the last thing said: one line "what was logged and where" (or
   "Nothing to log this session"), and the reminder that Fady double-clicks `save-to-cloud.cmd`
   himself if anything on disk changed. Closing reminders are never open items.

## Never
- No em dashes in anything new. No git, no `save-to-cloud.cmd`. Nothing edited in `../taxi-business/`.
- Never rewrite `LOG.md` or `DECISIONS.md` history; append only.
