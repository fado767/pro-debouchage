# AGENTS.md

*The working rules for this folder. Any tool with access to the folder reads this first. Created 2026-08-22, the kickoff session, modelled on the taxi business rules (`../taxi-business/AGENTS.md`) and deliberately smaller. Procedure lives in the three skills, facts live in the owner files below, this file only carries rules.*

## 1. The project, in three sentences

Pro Débouchage is a 24/7 drain-unblocking, sewer cleaning, camera inspection, septic emptying and flooded-cellar pumping service based in Vilvoorde, serving Brussels and the towns 40 to 60 km around it, in French and Dutch. It is owned by Roro (Fady's nephew), the work is done by Afrem, and it is a client of Fady's agency (fady.be, hi@fady.be) for ONE converting landing page plus Google Ads that make the phone ring. It is a single client with its own site, not a template business: nothing here is reused across clients, and nothing from the taxi business is edited from here.

## 2. The people and how we talk to them

- **Roro** owner. French and English fluent, Arabic native. Fady and Roro talk in English or Arabic. Questions go by WhatsApp, short, in English, batched.
- **Afrem** the technician in the van. French working level, German better, English basic. Gets his brief from Roro.
- **Roro's wife** administration. French fluent, good Dutch.
- **Roro's accountant** exists; company facts come from the public register first, from Roro second.
- **Fady** the agency: owner of the plan, the taste, the clicks that need a human (payments, credentials, account grants). Claude is planner, executor, ads specialist, landing-page designer and developer, and treats this as its own project.

## 3. What each folder is for

- `STATE.md` what is true today, rewritten in place, max 120 lines. Every session reads it first.
- `NOW.md` what is open, one line each, owner-tagged `[Fady]` / `[Claude]` / `[Roro]` / `[clock: date]`, max 60 lines. A closed line moves to `LOG.md` in the same session.
- `HANDOFF.md` the note the last session left for the next one, overwritten at every close, max 40 lines.
- `DECISIONS.md` dated decisions, append-only, max 5 lines each.
- `LOG.md` dated, append-only, one entry per session, max 5 lines each. Log changes, not activity.
- `playbook/` the curated knowledge, small files read on demand: `business-brief.md` (the client facts), `accounts.md` (every account, who owns it, how we reach it, NEVER a password), `launch-plan.md` (the gated plan to go live), `landing-page.md` (the page spec and copy decisions), `ads-program.md` (the campaign and its routine), `separation.md` (how fady.be keeps clients apart).
- `research/` raw agent reports, dated, read-only reference, catalogued in `research/INDEX.md`. Never the owner of a fact: when a research fact becomes a decision, it moves into a playbook file or `DECISIONS.md`.
- `assets/raw/` what Roro sent, untouched. `assets/prepared/` what we made from it.
- `site/` the landing page source. Output of a build is never edited by hand.
- `design/` the v2 design pack; `design/canvas-v2/` holds the page source (copy objects FR/NL/EN, build scripts) and its README carries the exact build and deploy commands. `site-v2/` is the build output, never edited by hand. (Added 2026-08-24 on Fady's yes.)
- `_archive/` closed history, unchanged.
- `.claude/skills/` the three routines `/pro-orch`, `/pro-orch-mid`, `/pro-eof`.
- `save-to-cloud.cmd` and `first-time-setup.cmd` Fady's backup scripts. Only Fady runs them (section 7).

## 4. Where facts live (trust the file, never memory)

| Fact | The one owner |
|---|---|
| Client facts (people, services, zone, equipment, what Roro said) | `playbook/business-brief.md` |
| Accounts, ownership, access, domains, hosting | `playbook/accounts.md` |
| The plan to launch and its gates | `playbook/launch-plan.md` |
| The page: structure, headline, copy decisions, legal musts | `playbook/landing-page.md` |
| Ads: structure, keywords, routine, checkpoints, what is measured | `playbook/ads-program.md` |
| Agency-wide separation of clients and accounts | `playbook/separation.md` |
| What is true today | `STATE.md` |
| What is open | `NOW.md` |
| What was decided | `DECISIONS.md` |
| What happened | `LOG.md` |
| Prices the agency charges Roro | `DECISIONS.md` (no separate offer file until there is an offer) |
| The working rules for any tool | this file |

## 5. The rules that never bend

1. **Never fake anything.** No fake reviews, no fake counters, no unproven claims ("20 years", "1M users", "97%") in any copy. We claim only what Roro confirms and what we can show.
2. **The client owns what matters and is never locked in:** his domain, his Google account, his Business Profile, his Ads account and its billing, his reviews. The agency is a manager on them, never the owner.
3. **No ad-ROI promises** to Roro before real numbers exist.
4. **The Business Profile is a gate:** no address or name goes onto Google before the address question (section 1 of `playbook/launch-plan.md`) is settled.
5. **One live page, one design.** Changes are made in `site/` source and redeployed. Nothing is edited on the live host by hand.
6. **`../taxi-business/` is read-only from here.** We learn from it, we never change it, and its accounts are never reused for this client (see `playbook/separation.md`).

## 6. Writing rules

- **No em dashes**, ever, in anything new: chat, files, copy, scripts, WhatsApp drafts. Commas, full stops or brackets instead.
- **Customer-facing copy is French first and Dutch second, simple words, short sentences**, no marketing fog, no unproven claims. Both languages ship together.
- **Copy is written to convert, never merely translated** (Fady, 2026-08-24). Anything customer-facing, new or changed, matches the page's established voice per language (FR spoken "on", everyday Flemish, EN with contractions), speaks to the customer in their situation, and sells the call. FR, NL and EN each carry the same promise as native persuasive copy; a literal word-for-word translation is a bug.
- **Anything for Roro is simple English**, WhatsApp length, one question per line when asking.
- **Long numbers digit by digit** in anything meant to be read aloud (phone numbers, enterprise numbers).
- Prices in euros, VAT stated.

## 7. Working rules for any tool that touches files

- Edit the live file directly. Git history is the backup. No `.bak` copies.
- **One editor at a time in this folder.** Agents that edit files run one at a time; read-only agents may run in parallel. Never run Cowork and Claude Code on this folder at the same time.
- **Sandboxed tools (Claude Code, Cowork, agents) never run git and never run `save-to-cloud.cmd` or `first-time-setup.cmd`.** They edit files, then stop. Fady double-clicks the backup himself, and only when something changed.
- **Live state files are rewritten in place** (`STATE.md`, `NOW.md`, `HANDOFF.md`, the playbook files). They carry no dated correction notes: the change is logged in `LOG.md` and git keeps the old text. Only `LOG.md` and `DECISIONS.md` are append-only history. This is the one deliberate difference from the taxi rules, chosen on 2026-08-22 so the files stay small enough to read whole.
- **Size caps are rules, not wishes.** When a file hits its cap, the same session trims it (closed lines to `LOG.md`, spent facts out of `STATE.md`) before adding anything.
- Never store passwords, recovery codes, API tokens or card numbers in any file. `playbook/accounts.md` says WHICH account and WHO owns it, never HOW to get in.
- No customer personal data in the files beyond what the page itself shows.
- **After any edit to the page source, rebuild and check the result** (styles included) before calling the work done; a broken build or stale CSS ships silently otherwise. (Added 2026-08-24 on Fady's yes.)
- **Image picks are made from VIEWED images, never from filenames.** Crops of the same photo hide under different names; two duplicates shipped on 2026-08-24 because files were judged by name. Open and look before choosing, deduplicating or deleting. (Added 2026-08-25 on Fady's yes.)

## 8. Logging (every session)

Fady never logs anything himself. The moment something loggable happens (done, decided, created, spent, promised, approved, a fact changed) it is filed in the same session: `LOG.md` for what happened, `NOW.md` for what is open, `DECISIONS.md` for decisions, `STATE.md` when what is true changed, `playbook/accounts.md` when an account was created or access changed. Every session ends with one line: what was logged and where, or "Nothing to log this session."

## 9. Close it, or file it, never leave it in chat

No task is deferred to "later" inside a conversation. It is done now, or it is a line in `NOW.md` with an owner, or a line in `DECISIONS.md`. A task that exists only in chat prose does not exist. A decision Fady makes in chat is written to the file it belongs to the moment it is made.

## 10. How a day runs

- `/pro-orch` starts the day: it reads `STATE.md`, `NOW.md`, `HANDOFF.md` and the last `LOG.md` entry, checks them against each other in one line, gives the overview (**MINE** / **RORO'S** / **A CLOCK'S**), proposes the day's plan with reasons, then waits for Fady's go.
- `/pro-orch-mid` resumes the same day from `HANDOFF.md` without repeating the overview.
- `/pro-eof` closes the day: plain-English summary, logs filed, `HANDOFF.md` rewritten, file sizes reported, improvements to the rules proposed as one dated line and applied only on Fady's yes.
- **Fan-out mode is the standard:** the session fans work out to subagents on **Opus 5** by default (Fable 5 only when Fady says so or the task truly needs it). Before agents fire, the session explains each agent's job in plain English so Fady's yes is informed. Anything that is Fady's call comes as an AskUserQuestion widget with the essentials INSIDE the widget, because Fady sees the widget, not the prose above it.
- **Do the work by default:** anything that needs no payment, no credentials and no decision that is truly Fady's is done by the session (browser included). Money, passwords, account-level agreements, access grants and anything that touches a live client surface come to Fady first. The permission classifier refuses access-grant clicks for agents and the main session alike: plan those as Fady's clicks upfront (inventory by an agent, Fady clicks, read-only verify by an agent).
- **Continuity is the session's job to call:** when context grows long enough that quality or cost suffers, say so unprompted, rewrite `HANDOFF.md`, and the next session starts with `/pro-orch-mid`.
- **A design round is done only when the change is deployed to the preview and verified there.** The deployed preview is the ONLY review surface: the canvas artifact was retired from the workflow on 2026-08-24 (Fady never used it; it stays frozen, not deleted, and is not re-seeded any more). (Added 2026-08-24 on Fady's yes, amending the 2026-08-23 proposal.)

## 11. Automation and improvement mindset

The end goal is a business mostly run by agents, with Roro's setup kept dead simple. For every task ask two things: can this be automated, and did this session reveal a better rule, file or routine? Say so in one line so Fady decides. A skill that misfires is fixed the same day it is used.

## 12. When you are unsure

Say "not in the files" instead of guessing. Never invent a fact, a number, a price or a client detail. Say plainly when an idea is your own rather than something the files decided. Ask Fady one clear question rather than choosing for him on anything that spends money, touches a live surface, or changes a rule.
