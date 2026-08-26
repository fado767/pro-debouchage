# design/ , the Claude Design pack for the v2 landing page

*Made 2026-08-23 by Claude (Fable 5) with six Opus research agents (`research/08` to `13`). This folder is the handoff: everything an AI designer needs to build the finished v2 page, and nothing else. v1 stays untouched in `site/` and on https://drain-prodebouchage.pages.dev as the backup. Simple English for Fady.*

## What is in here

| File | What it is | Who reads it |
|---|---|---|
| `01-master-prompt.md` | the prompt to paste as the first message in Claude Design (or to run with `/design` in Claude Code) | Fady pastes, the AI reads |
| `02-copy-fr.md` | the final French copy, every string, section by section, with alt texts, meta, 404 and the WhatsApp link | the AI, character for character |
| `03-copy-nl.md` | the same in Belgian Dutch | same |
| `04-DESIGN.md` | the design system: direction, colours, type, components, spacing, do and do not | the AI, before any CSS |
| `05-tech-standard.md` | the output contract and the 25-line definition of done | the AI, and the tester |
| `06-assets-manifest.md` | the only pictures allowed, where each goes, and the consent flags | the AI |
| `07-follow-up-prompts.md` | the ten prompts to paste after the first output, in order | Fady |
| `ds-bundle/` | the design system as files (styles.css, fonts, previews, images), already pushed to Claude Design | the tool |

Pictures: `assets/prepared/web/img/` (ready sizes, AVIF, WebP, JPEG), `assets/prepared/web/video/` (two optional muted clips), masters in `assets/prepared/magnific/`.

## One fact to know first

The research (`research/08`) found no way to choose the Fable 5 model inside claude.ai/design: the product runs on Opus 4.7 and shows no model picker. The thing that runs on Fable 5 with the same canvas is the `/design` command inside Claude Code, in this folder. So:

- **Route A, claude.ai/design in the browser.** Good if you want to sit and push sliders yourself. Model: Opus 4.7 (not Fable 5). The export needs a Claude Code clean-up pass (`05-tech-standard.md` section D) before it ships.
- **Route B, `/design` in Claude Code on Fable 5, in this folder.** Same canvas, the model you asked for, the files land straight in the repo. This is the route I recommend and the one this session used to make the v2 canvas (link in `HANDOFF.md` and `LOG.md`).

Either way the pack is the same. The prompt works in both.

## Route A, step by step (claude.ai/design)

1. Open claude.ai/design. The design system is already there: project **"fady.be / Drain / Pro Debouchage"** (pushed from this folder with `/design-sync`, 31 files). Open it, look at the cards (Colours, Typography, Buttons, Hero, Price cards, Review cards, and so on), then switch **Published** on. Do not touch the old "Design System" project, that one is the taxi business.
2. Create a new project (a normal one, not a design system). It inherits the published system.
3. Attach to the first message: `02-copy-fr.md`, `03-copy-nl.md`, `04-DESIGN.md`, `05-tech-standard.md`, `06-assets-manifest.md`, and the images named at the top of `01-master-prompt.md` (from `assets/prepared/web/img/`). Twenty files per conversation is the limit, images included.
4. Paste everything between the two lines of equals signs in `01-master-prompt.md`. Send.
5. It must first answer four short questions and list back the headline, the trust items, the prices and the button labels. Check them against the copy files. Then say "go".
6. Do not regenerate. Use the ten prompts in `07-follow-up-prompts.md`, one at a time. If a string changed, paste the copy-lock line.
7. Export as ZIP. Give the ZIP to a Claude Code session in this folder: it cleans it into `site-v2/` per `05-tech-standard.md` section D, runs the definition of done, and deploys to the v2 preview link.

## Route B, step by step (Claude Code, Fable 5)

1. Open Claude Code in this folder, say `/pro-orch-mid`, then ask for the v2 canvas from `design/01-master-prompt.md` (or open the link already in `HANDOFF.md`).
2. React on the canvas or in chat; Claude edits `design/` and the canvas, then builds `site-v2/` and deploys to the separate preview.

## Rules that do not bend here

- No invented review, ever. The twelve placeholder cards (four per language) were deleted on 2026-08-24. The `reviews` array in every copy object is empty and the page shows the honest card instead. A card comes back only when a real Google review exists, copied word for word.
- No generated before and after pairs, no stock, no AI illustration. The generated imagery used is: a vector trace of the real logo, a cutout and a studio render of the real van from its real photo, and two faithful upscales of real photos. Two optional muted video clips were made from real photos (the van, the hose reel); neither goes above the fold.
- Three pages, `/fr/`, `/nl/` and `/en/`, same design, plus a privacy page per language. The copy is locked. If a string does not fit, the component changes, not the string.
