# 08. Claude Design: how to drive it for our landing page

Researched 2026-08-23 by Claude Code (Opus 5), web research only. No account was opened and nothing was tested inside the product.

Sources, official first:
- Anthropic, "Introducing Claude Design by Anthropic Labs", https://www.anthropic.com/news/claude-design-anthropic-labs (launched 2026-04-17)
- Anthropic Help Center, "Get started with Claude Design", https://support.claude.com/en/articles/14604416-get-started-with-claude-design
- Anthropic Help Center, "Set up your design system in Claude Design", https://support.claude.com/en/articles/14604397-set-up-your-design-system-in-claude-design
- Claude Academy, "Using Claude Design for prototypes and UX", https://academy.claude.com/tutorials/using-claude-design-for-prototypes-and-ux
- Anthropic Help Center, "Upload files to Claude", https://support.claude.com/en/articles/8241126-upload-files-to-claude
- Piebald-AI mirror of the DesignSync tool description, https://github.com/Piebald-AI/claude-code-system-prompts/blob/main/system-prompts/tool-description-designsync.md (a mirrored internal tool description, not an Anthropic doc, but the most precise source on sync mechanics)
- VoltAgent, awesome-claude-design, https://github.com/VoltAgent/awesome-claude-design (the DESIGN.md format)
- Mike Kwal, "Claude Design Imports Your Design System", https://mikekwal.com/blog/claude-design-system-import/
- roast.page, "Claude Design for Landing Pages", https://roast.page/blog/claude-design-landing-pages-guide
- Pasquale Pillitteri, "10 Advanced Prompts for Claude Design" (news/1486) and "/design-sync two way" (news/5308), https://pasqualepillitteri.it
- explainx.ai, Claude Design June 2026 update, and Claude Code /design command August 2026
- dev.to, Bilel Salem, "From Prompt to Pull Request: Using Claude Design, Claude Code, and GitHub Together"
- aifordevelopers.substack.com, "How to Actually Use Claude Design"

Anything marked "unverified" is a community claim I could not confirm in an Anthropic source.

---

## 1. Inputs: what Claude Design can eat

Confirmed by Anthropic:
- A project "automatically inherits your organization's design system". No manual configuration once an org design system exists.
- Context it accepts: screenshots, images, competitor products, wireframes, existing slide decks, visual references.
- Design system sources: GitHub repositories, design files, raw uploads, or a local codebase through the `/design-sync` command in Claude Code.
- Codebase link: through the **Import** button, either GitHub import or a local directory. Anthropic warns not to link a whole monorepo. Link the specific directory holding the components and exclude `.git` and `node_modules/`.

File limits (the claude.ai chat limits, which Claude Design inherits, per "Upload files to Claude"): 30 MB per file, up to 20 files per conversation, images up to 8000 by 8000 pixels, 20 images per turn. Accepted document types include PDF, DOCX, TXT, RTF, ODT, HTML, EPUB, JSON, CSV and Markdown. Images: JPEG, PNG, GIF, WebP. Font files are not listed as an accepted upload anywhere, so "upload our .woff2" is **unverified**. Use Google Fonts by name instead.

Local folders: it cannot read our disk on its own. Either we upload, or we link a GitHub repo, or we push from Claude Code with `/design-sync`. `/design-sync` is the only path that reads a local folder, and it reads the folder Claude Code is running in.

The `/design-sync` bundle, from the mirrored DesignSync tool description:
- Operations: `list_projects`, `get_project`, `list_files`, `get_file` (256 KiB cap per remote file read), `create_project`, `finalize_plan`, `write_files`, `delete_files`, `register_assets`, `unregister_assets`.
- Required order: list and read, then `finalize_plan` (locks the exact write and delete paths plus `localDir`, which defaults to the current working directory, and returns a `planId`), then write or delete.
- `write_files` takes a `localPath` (reads from disk) or inline `data`, **max 256 files per call**.
- Preview cards: the Design System pane builds its card index from the **first line** of each preview HTML file, an HTML comment `<!-- @dsCard group="..." -->`. Those markers are compiled into `_ds_manifest.json` by the app itself. With correct markers, explicit registration is not needed.
- `register_assets` (fields `name`, `path`, `viewport`, `group`) is described as legacy, only for hand authored projects with no `@dsCard` markers. So a per asset `viewport` field exists, but it is the legacy path.
- The target project must be verified as `type: PROJECT_TYPE_DESIGN_SYSTEM` before pushing.

Photos as real page imagery: Claude Design writes HTML and CSS, it does not generate photographs. Community reporting is consistent that uploaded images are used as **reference**, and that image slots come out as placeholder blocks, or as Unsplash CDN URLs if you ask for them. Whether an uploaded JPEG is embedded into the exported HTML as a real asset is **unverified**. Plan on wiring our own photos in afterwards, in `site/`, with our own file names.

Figma: no Anthropic source lists a Figma import for Claude Design. Anthropic lists Canva, Adobe, Base44, Gamma, Lovable, Miro, Replit, Vercel and Wix as export or handoff destinations. A Figma import is **unverified and probably not a thing**. Not relevant to us anyway.

---

## 2. Project model

- **Organisation** holds one or more design systems. Anthropic's setup route: create or switch to your organization, upload brand and product assets (codebases, prototypes, slide decks, or individual assets such as logos and typography specimens), review the generated system (colours, typography, components, layout patterns), then **publish and share with your team by toggling the "Published" switch**.
- Anthropic: "You only need one source to get started, but providing multiple gives Claude more to work with."
- **Projects** inside the org inherit the published design system automatically.
- **Project type is fixed at creation.** The DesignSync description is explicit: pushing to a regular project never turns it into a design system, and you must check `type: PROJECT_TYPE_DESIGN_SYSTEM` first. So a prototype project can never be promoted. Confirmed by that source, not by an Anthropic help article.
- Sharing: shareable links with view only, comment, or edit access.
- Versioning is conversational, not a version list. Anthropic's own phrasing is to ask Claude to "Save what we have and try a completely different approach" to keep an iteration.

Community route to create a design system from a DESIGN.md (VoltAgent, so **unverified UI labels**): go to `claude.ai/design/#org`, click "Create new design system", upload the DESIGN.md under "Add assets". Or, inside a prototype project, attach the DESIGN.md in chat and say "Create a design system from this DESIGN.md".

Mike Kwal describes a `design-system-spec.json` manifest at the repo root and an "Import Design System" button. That conflicts with the `@dsCard` and `_ds_manifest.json` mechanism above and with the official article. Treat `design-system-spec.json` as **unverified, probably wrong or superseded**.

---

## 3. Prompting

**Length and attachments.** Claude Design runs in a normal claude.ai conversation, 200k token context on paid plans. A one page master brief is nowhere near a limit. Markdown attaches as a file (`.md` is an accepted type), and the DESIGN.md route proves attached markdown is read as instructions. So one attached brief file plus a short pasted prompt that points at it is a supported shape.

**Structure that people report working.** Two converging frameworks:
- Anthropic style: goal, layout, content, audience.
- roast.page, seven slots: who, problem, product in ten words, differentiator, ordered section list, single CTA, constraint (what to avoid). Reported to beat "build me a landing page" consistently.
- Pillitteri: give the model a specific professional role (his example is a senior UX architect with twelve years at a named studio). He claims that cuts output variance by 30 to 40 percent versus a neutral request. **Unverified number**, but role priming is cheap.
- Lead with **references, not adjectives**. The reported pattern is "visual direction: X meets Y meets Z" plus a named font pairing. Generic adjectives produce generic pages.

**One big brief or a sequence?** Both, in this order. One big brief for the first generation, so structure and copy land together. Then **never regenerate**. Refine with the three narrower tools: chat for structural change, **inline comments** pinned to a canvas element for component level change, and the adjustment sliders (Anthropic calls them "fine-grained controls", one source calls them "adjustment knobs") for spacing, colour and type size. Sliders and direct text editing do not consume a prompt turn.

**Giving copy it must not rewrite.** There is no copy lock feature. A reported failure mode is that Claude Design rewrites supplied copy unasked. Mitigations people use:
- Put the copy in an attached file, not in the prompt body.
- State the rule hard and early: the copy is final, use it character for character, do not translate, do not shorten, do not invent a headline.
- Ask it to output a copy checklist at the end so you can diff.
- Check every string after the first generation, before any visual work.

**Mobile first plus desktop.** No viewport switcher is documented for the Claude Design canvas. (The mobile and desktop toggle discussion in GitHub issues is the Claude Code preview panel, a different surface.) So it has to be said in words: build mobile first, name the breakpoints (for example 360 px phone, 768 px tablet, 1200 px desktop), name touch target minimums, and ask for a second artboard or a screenshot at the desktop width to verify.

**Real production HTML and CSS, not React.** Community consensus: for landing pages and slides, HTML is already the default, and asking explicitly gets it. Ask for one self contained `index.html`, plain CSS in a `<style>` block or a single `styles.css`, vanilla JavaScript only, no build step, no framework, no CDN scripts, Google Fonts by name or a system stack. Output lands on the canvas and comes out through Export.

**Known failure modes to defend against in the prompt:**
- Generic output when no design system and no references were given.
- Fake testimonials, invented review counts, invented years in business, unlicensed brand logos. roast.page names this explicitly. This is our number one risk against rule 5.1 of AGENTS.md.
- Headlines and CTAs that are grammatically perfect and strategically empty.
- Feature list ordering instead of a persuasion sequence.
- Rewriting supplied copy.
- Ignoring or under using uploaded images.
- Language drift on a bilingual page. No source discusses bilingual pages at all, so assume drift and pin it. **Unverified area, high risk.**
- Operational: chat "upstream error" needing a new tab, inline comments occasionally vanishing before they are processed, lag on large linked codebases, design system import failing on messy source codebases.

---

## 4. Output and handoff

- **Export menu** (Anthropic): ZIP, PDF, PPTX, standalone HTML, internal URL, save to folder, plus Canva, Adobe, Base44, Gamma, Lovable, Miro, Replit, Vercel, Wix.
- "Export as standalone HTML" gives a self contained file. The ZIP gives the raw folder of static site files (HTML, CSS, JS, assets). Which one is right depends on whether the page references separate assets.
- **Handoff to Claude Code**: Export, then "Hand off to Claude Code". It bundles design files, chat history and a README. Two destinations: "Send to local coding agent" or "Send to Claude Code Web".
- Claude Design is **read only** against a linked GitHub repo. It never pushes commits. Commits are Claude Code's job.
- Anthropic's own pre handoff advice: name components clearly, document design rationale in the chat, and flag edge cases (empty states, errors, loading states, data volume).
- **Deployable to Cloudflare Pages as is?** A self contained static export can be dropped on any static host, Cloudflare Pages included. But do not ship the export raw. Expected cleanup for us: real `<title>`, meta description, `lang` attributes and `hreflang` for FR and NL, Open Graph tags, favicon, our own optimised images with relative paths and real `alt` text, `tel:` links verified, font loading, no leftover placeholder or lorem text, no invented claims, JSON-LD LocalBusiness, and a check that no absolute local file paths survived. Also missing by default, per the post export critique: loading, error and empty states, and documented responsive behaviour.

---

## 5. Model

- Anthropic's launch post says Claude Design is powered by **Claude Opus 4.7** vision. Nothing in any Anthropic source describes a model picker, an effort selector, or an extended or deep thinking mode inside claude.ai/design. Treat "choose Fable 5 inside Claude Design" as **not available**, unverified at best.
- Where Fable 5 is genuinely selectable is **Claude Code**: `/model fable`, the `model` setting, or `claude --model claude-fable-5`. Needs Claude Code v2.1.170 or later. Effort defaults to high for every current model in Claude Code, and thinking cannot be turned off on Fable 5.
- Since **2026-08-17** Claude Code has a `/design` command (research preview, v2.1.234) that brings the Claude Design artboard canvas into a coding session: several editable UI variants side by side on one pan and zoom canvas, click to edit, PNG and PDF export, then "turn it into real code for my project". When run inside a repo it reads the existing design system, components and tokens. **This is the path that actually runs on Fable 5**, because it runs on the model of the Claude Code session.
- Availability and cost of `/design` are explicitly still changing during the research preview.

---

## 6. Recent changes, June to August 2026

- **June 2026**: design system import from git repos or files, real WYSIWYG canvas editing (drag and drop, not chat only), two way `/design-sync` between Claude Code and Claude Design, desktop app support.
- **`/design-sync` two way**: pull the repo's real design system into Claude Design so generated screens use real components, and push implemented code back onto the canvas. It uses the claude.ai login and finds the design system projects you have write permission on.
- **`@dsCard` and `_ds_manifest.json`** replaced explicit asset registration for synced projects.
- **2026-08-17**: `/design` inside Claude Code, research preview.
- Reported but not confirmed by Anthropic: Design checking generated code against imported design system rules (typography, spacing tokens, brand colours) and correcting deviations in the background.

---

## 7. Implications for our prompt pack

**The headline decision.** Two routes exist and they are not equal for us.

- **Route A, claude.ai/design in the browser.** Fady pastes, uploads, pushes sliders. Runs on Opus 4.7. Good visual iteration, weaker control, and we would still rebuild the export into `site/` by hand.
- **Route B, Claude Code `/design` in this folder, on Fable 5.** Gets the artboard canvas, reads `site/` directly, writes real files into the repo, runs on the model we want, and keeps the FR and NL copy in files we own. Cost: research preview, so it can change under us.
- **My recommendation, my own view not a file decision: B as the build route, A only if Fady wants to sit and push sliders himself.** If we go A, the export is a starting draft for `site/`, never the shipped page. Fady should be told plainly that "Fable 5 inside Claude Design" could not be verified and probably does not exist.

**Files to prepare before any prompt is pasted.** All small, all in this repo, all attachable:
1. `brief-landing-page.md`, the seven slot brief: who, problem, service in ten words, differentiator, ordered section list, the single action (the phone call), constraints. Carries the hard rules: no invented reviews, no invented years, no counters, no logos we do not own.
2. `copy-fr.md` and `copy-nl.md`, the final copy, one string per line, labelled by section id, sourced from `playbook/landing-page.md`. Rule at the top of each file: use character for character, do not translate, do not shorten.
3. `DESIGN.md`, nine sections in the VoltAgent format: visual theme and atmosphere, colour palette and roles with hex values and CSS variable names, typography rules with Google Font names, component stylings with states, layout principles and spacing scale, depth and elevation, do and do not list, responsive behaviour with our breakpoints, agent prompt guide.
4. An image list: the file names in `assets/prepared/` with a one line description and the intended alt text for each, so it places our real photos rather than placeholders.

**Order of operations for Fady, Route A if chosen:**
1. Open `claude.ai/design`. Create or switch to the organisation. Create the **design system first**, because the project type cannot be changed later.
2. Upload `DESIGN.md`, the logo and a font specimen under "Add assets". Review the generated colours, type and components. Toggle **"Published"**.
3. Create a new project. It inherits the published system.
4. Attach `brief-landing-page.md`, `copy-fr.md`, `copy-nl.md`, the image list and the photo files. Paste the master prompt, which stays short and points at the attachments.
5. Do not regenerate. Fix with inline comments and sliders. Ask for a desktop width screenshot to check the second breakpoint.
6. Export as ZIP. Hand the ZIP to Claude Code, which rebuilds it properly into `site/`.

**What the master prompt must contain, in this order:** role priming, the pointer to the seven slot brief, the pointer to the design system, the hard output contract (one self contained page, plain CSS, vanilla JS, no framework, no build step, no CDN, Google Fonts by name), the copy lock, the bilingual instruction with an explicit mechanism, mobile first with named breakpoints, the phone number as the single action repeated in named places, and a closing "do not invent" list. Finish with: "before you draw anything, list back the sections and the exact headline strings you will use". Catching a rewrite in a list is much cheaper than catching it on a canvas.

**Follow up prompts, in order:** (1) five second test audit, what does a stranger understand in five seconds; (2) cut 40 percent of the words without losing meaning; (3) check every string against the copy files and report any deviation; (4) desktop width review; (5) accessibility pass, contrast and touch targets; (6) states pass, what the page does with a slow image or a failed font.

**Open question for Fady, must be answered before the prompt is written:** one bilingual page with a FR and NL toggle, or two separate pages. It changes the whole structure, and Claude Design will not choose well on its own.
