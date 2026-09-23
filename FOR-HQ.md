# FOR-HQ.md, pro-debouchage's channel to the HQ

*Kit template, 2026-09-22 (Fady's pick by widget in the HQ that day). One file per venture, at the folder root, backed up with the folder. Append only, newest at the bottom. A venture never edits the HQ; this file is how it reaches it.*

**What goes here:** one dated line per item the HQ should see: a proposed kit change, a rule that misfired, a doubt about a shared rule, something this folder does better that every folder should do, a question for the orch of the orchs. Not daily state (the state files), not a venture decision (`DECISIONS.md`), not a fact (its owner file).

**How the HQ answers:** it reads every `FOR-HQ.md` on "/hq, check the projects" and at the monthly pass. A system matter is decided by Claude in the HQ, applied through the kit, and told to Fady in one line; anything that changes what Fady does, sees or decides comes to him as a widget. The HQ writes its answer under the line; the pass ticks it. Fady never carries a note by hand.

**The line:** `- YYYY-MM-DD, <session or skill>: <the item in one or two sentences>.` The HQ answers under it: `  - HQ YYYY-MM-DD: <applied where | declined, why | widget: his pick>.`

## Lines

- 2026-09-22, HANDOFF.md: the auto-mode classifier blocked plain build and diff commands for a site agent several times today, identical retries passed. The Browser pane document is "hidden" most of the time and starves IntersectionObserver: the End key in the tab, or a screenshot right before the read, gets a visible window.
- 2026-09-22, `/eof` (pro-debouchage): kit candidate, a size-guard hook (Fady's pick that morning, "note it to HQ"): PostToolUse on Write and Edit for the three live state files, budgets per venture in a small JSON next to the hook like log-owners.json (here 14 KB, 8 KB, 4 KB), prints ONE line only when a file passes its budget, silent otherwise. The byte budgets are a never-bend rule that only a manual wc -c checks today.
- 2026-09-22, `/eof` (pro-debouchage): `/orch` step 4 says the live site is read from the Browser pane; a curl over the sitemap URLs (status codes, one command, no browser) did the same check today in seconds and runs while another project holds Chrome. Proposal: the kit names curl first, the pane only when a page must be looked at.
- 2026-09-22, `/eof` (pro-debouchage): the browser lock heartbeat as a timer does not work: a Sonnet browser agent briefed "re-run the acquire line every 10 minutes" let the lock go 56 minutes while alive and well. What would work: the brief puts the acquire line at the START OF EVERY BLOCK of its job (before block A, before block B, and so on), a step, not a timer. Proposal for the kit's browser rule and every venture's browser briefs.
- 2026-09-23, `/orch` (pro-debouchage): a read-only Chrome agent found TWO connected Chrome instances, one marked inUse from about two hours earlier, while `browser-lock.cjs status` read FREE. Either another venture drives Chrome without taking the lock, or a dead session left the extension connection marked. Proposal: the kit's browser rule tells every agent to report the connected-browser list it saw, so the HQ can tell which. Same run: Google's "Verify that it's you" re-authentication stood before the Business Profile dashboard on Profile 4 (info@), a human sign-in; the agent stopped correctly.
