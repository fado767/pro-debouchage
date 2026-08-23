# Anti-slop design rules for the Pro Débouchage landing page

Date: 2026-08-23
Written by: research agent (Claude Opus 5), for a brief to Claude Design (Fable 5)
Scope: why AI-built pages look identical, the rules that stop it, and where "award-style" design hurts an emergency-service page.
Status: research only. Nothing here is a decision until it moves into `playbook/landing-page.md`.

Sources used (all read 2026-08-23):
- [925 Studios, AI slop fonts and gradients](https://www.925studios.co/blog/ai-slop-design-tells)
- [VibeCodeKit, AI slop design fix guide](https://vibecodekit.dev/ai-slop-design)
- [prg.sh, Why your AI keeps building the same purple gradient website](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website)
- [DEV, Blame Tailwind's indigo-500](https://dev.to/alanwest/why-every-ai-built-website-looks-the-same-blame-tailwinds-indigo-500-3h2p)
- [Claude Code HQ, Unslop UI playbook](https://www.claudecodehq.com/playbooks/unslop-ui)
- [The Adpharm, Claude Design without the AI slop look](https://www.theadpharm.com/insights/claude-design-without-the-ai-slop-look)
- [Superdesign, How to make AI UI look less generic](https://superdesign.dev/blog/how-to-make-ai-ui-look-less-generic)
- [AIToolPick, 30-point not-AI-generated checklist](https://aitoolpick.org/blog/ai-generated-website-checklist/)
- [Slop Detector, the CSS fingerprint](https://slop-detect.com/)
- [Braingrid, design system optimised for AI coding](https://www.braingrid.ai/blog/design-system-optimized-for-ai-coding)
- [Unbounce, attention ratio](https://unbounce.com/conversion-glossary/definition/attention-ratio/) and [conversion-centered design](https://unbounce.com/conversion-centered-design/)
- [CXL, how to build a high-converting landing page](https://cxl.com/blog/how-to-build-a-high-converting-landing-page/) and [how images boost conversion](https://cxl.com/blog/how-images-can-boost-your-conversion-rate/)
- [NN/g, 113 homepage usability guidelines](https://www.nngroup.com/articles/113-design-guidelines-homepage-usability/)
- [Hook Agency, why stock photos cost contractors jobs](https://hookagency.com/blog/why-stock-photos-are-costing-contractors-jobs-and-what-to-use-instead/)
- [Apexure, plumbing repair landing page CRO breakdown](https://www.apexure.com/landing-page-examples/plumbing-repair-landing-page)
- [DebugBear, opacity animations delay LCP](https://www.debugbear.com/blog/opacity-animation-poor-lcp)

Root cause in one line: a model with no constraints returns the statistical average of its training data, and that average is a 2019 Tailwind demo page. Adam Wathan (Tailwind) publicly apologised for `bg-indigo-500` being the default that every AI now repeats.

## 1. The tells

1. Inter (or Roboto, Open Sans, Geist, Poppins, Space Grotesk) as the only face. Reads as slop because nobody chose it, it is the model's default.
2. Purple or indigo to blue gradient in the hero. The loudest single tell of 2026, straight from Tailwind's demo palette.
3. Gradient text on the headline (`bg-clip-text text-transparent`). Decoration with no meaning, and it hurts contrast.
4. A pill "eyebrow" badge above the H1. Pure template furniture, it says nothing.
5. Centred hero, big headline, one-line subhead, two pill buttons side by side. The skeleton every generator produces.
6. Exactly three feature cards in a row, icon on top. The triptych reflex that appears whatever the content is.
7. The full-page skeleton: hero, three cards, logo strip, pricing, FAQ accordion, footer. Same order every time.
8. Thin line icons (Lucide) sitting above every heading. Decorative, carries zero information.
9. Emoji used as section icons or bullets. Reads as a chat reply, not a business.
10. Everything rounded the same way (`rounded-2xl` cards, pill buttons). No hierarchy, no intent.
11. Soft drop shadow on every card. Depth applied by habit, not to separate anything.
12. A flat 1px grey border on every card, or a coloured 3px left strip. Named as one of the most reliable tells.
13. Cards nested inside cards ("cardocalypse"). Structure replacing thinking.
14. Glassmorphism panels and blurred nav (`backdrop-blur-md`). The new purple gradient.
15. Floating gradient orbs or 3D blobs behind the hero. Movement with no subject.
16. Dark mode chosen by reflex, with neon glow borders. Nobody asked for it.
17. Pure `#fff` and `#000` with an evenly spread, timid palette. No dominant colour, so nothing leads the eye.
18. Alternating white and light-grey section backgrounds. The stripe that says "generated".
19. Bento grid used for content that is not a grid. Layout as fashion.
20. Uniform section padding, same rhythm top to bottom. Real pages breathe unevenly.
21. Everything centred, including body paragraphs. Long centred text is hard to read and looks like filler.
22. Fade-up on scroll applied to every block, identical timing. Slows the page and delays the message.
23. Hover states that only scale by 1.05, and focus states that do not exist. Motion added, usability not.
24. Numbered "1, 2, 3" step row with circled digits. A generated pattern, not a process anyone described.
25. A horizontal stat banner with big gradient numbers. Usually the numbers are invented.
26. "Trusted by 10,000+" with a grey logo strip. Unprovable, and for a local business it is a lie.
27. Testimonial cards with round avatars, five gold stars, first name plus generic title. The classic fabricated proof.
28. Marketing vocabulary: elevate, unlock, empower, seamless, effortless, supercharge, transform, streamline, robust, leverage. Words that describe nothing.
29. Weightless headline pairs ("Build faster. Ship smarter."). Could sit on any product on earth.
30. Generic CTA labels ("Learn more", "Get started", "Contact us"). No action, no reason.
31. Generic section titles ("Features", "Solutions", "Benefits", "Our Process"). Labels instead of statements.
32. Checkmark lists of vague benefits. Ticks make weak claims look verified.
33. Stock photography of smiling strangers. Recognised as fake, and it kills trust for a trade business.
34. AI illustrations with plastic skin, glossy 3D, or warped hands and text. Instantly clocked.
35. The same image reused across sections, or gradient placeholder boxes. Nothing real to show.
36. Copy in the LLM register: hedging, tricolons, and em dashes everywhere. The Slop Detector scores this separately as "copy slop".
37. The 2026 "tasteful default": cream background, Instrument Serif display, sage green accent. The anti-slop advice became its own tell.
38. Perfect but meaningless consistency: every gap, radius and shadow identical, no focal point. It looks finished and says nothing.

## 2. The counter-rules

1. Write the content first, then design around it. Never fill a template with words.
2. Name one reference direction in words before any CSS, for example "Belgian trade van livery meets Swiss signage". Never "clean and modern".
3. Pick a display face and a body face on purpose, and say why in one line. Ban Inter, Roboto, Arial, Open Sans, Geist, Poppins and Space Grotesk as the headline face.
4. Do not use Instrument Serif with cream and sage. That is a default now too.
5. Cap the palette at three hues: one dominant (about 60 percent), one neutral (30), one sharp accent (10). Extend with tints, never new hues.
6. Derive the dominant colour from something real about the business (the van, the equipment, the trade), not from a framework default.
7. Ban purple and indigo as the primary action colour unless the brand actually owns them.
8. Never tint text or numbers with a gradient. Gradients only where they carry meaning.
9. Tint black and white slightly warm or cool. Pure `#fff` and `#000` read as untouched defaults.
10. Use one accent colour for one job: the thing you want tapped. If it is on three elements, it is on two too many.
11. Build hierarchy with size, weight and space, not with boxes. Try whitespace first, then a 3 to 5 percent background shift, then soft elevation, and only then a border.
12. Default cards to borderless. No flat grey 1px outline, no coloured left strip unless it marks a real state.
13. Never nest a card inside a card.
14. Vary the layout of every section. If two consecutive sections are a three-column card grid, redesign one.
15. Break symmetry at least twice: an off-centre hero, a two-thirds and one-third split, an image that bleeds off the edge.
16. Left-align body text. Centre only short lines.
17. Vary vertical rhythm: sections that matter get more air, dense sections get less. Spacing on an 8 point grid, but not the same value everywhere.
18. Keep body text 16px or larger and lines to 60 to 80 characters.
19. Set heading line-height 1.1 to 1.3 and body 1.6 to 1.8. Add deliberate letter-spacing on the largest heading only.
20. Use one type scale with a real ratio (1.25 for interfaces, 1.333 for editorial), and make the jumps between levels obvious.
21. Delete every decorative icon. An icon stays only if it replaces a word.
22. No emoji anywhere in the page.
23. Use real photography of the real van, the real work and the real people, with an honest caption saying where and what.
24. Never use stock images of strangers, and never an AI illustration.
25. Show before and after of actual jobs rather than any illustration of a concept.
26. Write in specifics: town names, phone number, hours, equipment, price basis. Numbers you can prove beat adjectives.
27. Ban the vocabulary list: elevate, unlock, empower, seamless, effortless, supercharge, transform, streamline, robust, leverage, revolutionise.
28. Ban em dashes in all copy. Use commas or full stops.
29. Section headings must be statements a customer could repeat, not category labels.
30. One idea per section, and the section title says that idea.
31. No invented social proof. No star widgets, no counters, no logo strips, no "trusted by" line unless the number is real and sourced.
32. Every claim on the page must be traceable to something the owner confirmed.
33. Design mobile first at 375px wide, then let it grow. Touch targets 44px or more.
34. Design all interactive states: rest, hover, focus visible, active, disabled, loading, error, empty.
35. Check contrast on every text and background pair. WCAG AA at minimum, and no text on a gradient without a solid backing.
36. Keep motion to one purposeful moment. No fade-up on every block, no scroll-jacking, no auto-sliders.
37. Do the squint test: shrink the page to a thumbnail. If you cannot tell what to do next, the hierarchy failed.
38. Review rendered screenshots at 375px and 1440px, not the code.
39. Write the tokens down once (colour, type, radius, spacing, motion) and never invent an arbitrary value later.
40. Before shipping, run the tell list in section 1 against the page and fix every hit or justify it in one line.

## 3. Converting, not showcasing

1. This page is a tool for someone standing in water at 2am. Every choice serves speed of understanding and speed of calling.
2. Attention ratio 1:1 (Unbounce, Oli Gardner): one goal, one action, no navigation menu, no links out to a blog or a homepage.
3. The phone number is the design. Visible in the first viewport, tappable, repeated in a sticky bar on mobile.
4. Message match first (CXL, Peep Laja): the headline repeats the words of the ad and the search, including the town. Break the scent and the paid click is wasted.
5. Clarity beats persuasion. Say what the service is, where it is, and how fast, in the first eight words.
6. CTA copy is action plus urgency ("Call now, we answer 24/7"), never "Contact us". Generic CTA labels underperform.
7. Trust stack near the top: what we do, where we work, hours, company number, real photos, real reviews if they exist. Never invented badges.
8. Cut hero video, parallax, scroll-jacking and entrance animations. Opacity animations delay Largest Contentful Paint, and they delay the phone number.
9. Keep LCP under about 2 seconds on mobile 4G. Roughly one second of delay costs about 7 percent of conversions.
10. Awwwards-style motion optimises for the launch-day screenshot. This page is judged on calls in month three.
11. NN/g's point applies: graphic design is the last step that focuses attention, not the starting point of the layout.
12. A form is the secondary action, never the primary. If there is a form, three fields maximum, phone field first.
13. No pop-up, no cookie wall in front of the phone number, no chat bubble covering the sticky call button.
14. Anything that is not helping someone call is a candidate for deletion. Ship fewer sections, better.
15. French and Dutch ship together and must be equally fast and equally complete. No half-translated page.

## 4. Prompt phrases that work

1. "Choose fonts that are beautiful, unique and interesting. Avoid generic fonts like Arial and Inter." (aesthetics fragment quoted by The Adpharm and prg.sh)
2. "Do not use Inter, Roboto, Arial, Open Sans, Geist, Poppins or Space Grotesk." Explicit prohibition works, models do negate at inference. (prg.sh)
3. "Name one aesthetic direction and confirm it with me before writing any CSS." (Claude Code HQ, Unslop UI)
4. "Mix two named references, for example Linear's typography discipline plus a print magazine's colour." (The Adpharm)
5. "Before styling, answer four questions: purpose, tone, constraints, what makes this different." (Claude Code HQ)
6. "Give me three distinct directions, not one." Widens the output past the default. (prg.sh)
7. "Plan the design in text first, then implement the spec." Separating taste from code beats asking for both at once. (Superdesign)
8. "Explicit specs, never adjectives. Replace 'make it modern' with named values." (Superdesign, Braingrid)
9. "Write a DESIGN.md with the tokens, then read it before every screen." Prevents drift across sections. (VibeCodeKit, Braingrid, Superdesign)
10. "No arbitrary values. Every colour and space comes from the tokens." (Braingrid)
11. "You are a senior designer with 20 years in trade and industrial branding." Role assignment shifts the output distribution. (prg.sh)
12. "Show me a rendered screenshot at 375px and 1440px before you continue." (VibeCodeKit)
13. "Justify each design decision in one line, or remove it." (VibeCodeKit, squint-test discipline)
14. "A tell is an unspecified default, not a banned colour. Every choice must be deliberate and stated." (Claude Code HQ)
15. "Audit your own output against this tell list and report file and line for each hit." (Claude Code HQ, audit mode)
16. Warning from the sources: no adjective saves you. "Clean and modern" is exactly the phrase that produces slop. (VibeCodeKit)

## 5. Ready-to-paste block

DESIGN RULES. Follow all of them. Do not skip any.

Before you write a single line of CSS, answer these four in one short paragraph and wait for my go:
1 what this page is for, 2 the tone in three words, 3 the one named visual direction you will follow, 4 what will make it look unlike a generated page.
Do not say "clean and modern". Name a real direction and a real reference.

Typography
- Do not use Inter, Roboto, Arial, Helvetica, Open Sans, Geist, Poppins or Space Grotesk for headings.
- Pick one display face and one body face. Say in one line why each fits this trade.
- Do not use Instrument Serif on cream with a sage accent. That combination is a default too.
- Body text 16px or larger, line length 60 to 80 characters, heading line-height 1.1 to 1.3, body 1.6 to 1.8.
- One type scale with a clear ratio. Big jumps between levels. Use weight for hierarchy, not more families.

Colour
- Three hues only: one dominant, one neutral, one accent. Extend with tints and shades, never new hues.
- The dominant colour comes from the real business, not from a framework palette.
- No purple, indigo or violet as the primary action colour.
- No gradient in the hero, no gradient text, no gradient on numbers, no gradient buttons.
- No pure #ffffff or #000000. Tint them slightly.
- The accent colour appears on the main action and nowhere else.
- Check contrast on every text and background pair. WCAG AA minimum.

Layout
- Content first. Never fill a template.
- No centred hero with a badge, a big headline and two pill buttons.
- No three-card icon grid. If two sections in a row share a layout, redesign one.
- Break symmetry at least twice. Off-centre, uneven splits, one image that bleeds off the edge.
- Left-align body text. Centre only short lines.
- Vary the space between sections. Spacing on an 8 point grid, not the same number everywhere.
- One idea per section, and the heading states that idea.
- No bento grid, no logo strip, no pricing toggle, no stat banner.

Components
- Cards are borderless by default. Separate with space, then a small background shift, then soft elevation. A border is the last resort and is never a flat grey 1px line.
- Never nest a card in a card. No coloured left strips.
- No glassmorphism, no blurred nav, no floating orbs or blobs, no neon glow.
- Do not round everything the same. Radius is a decision, not a habit.
- Remove every decorative icon. An icon stays only if it replaces a word.
- No emoji anywhere.
- Dark mode only if I ask for it.

Images
- Use only the real photos I provide, of the real van, the real work and the real people, with an honest caption.
- No stock photos, no AI illustrations, no gradient placeholders, no image reused across sections.
- If there is no real photo for a section, use type and space instead.

Copy
- Never invent a fact, a number, a review, a rating, a logo or a counter. If it is not in my brief, it does not go on the page.
- Banned words: elevate, unlock, empower, seamless, effortless, supercharge, transform, streamline, robust, leverage, revolutionise.
- No em dashes anywhere. Commas or full stops.
- Headings are statements a customer could repeat, not labels like Features or Benefits.
- Be specific: town names, hours, phone number, what we actually do. Short sentences, simple words.
- Buttons say the action and the reason. Never "Learn more" or "Contact us".

Conversion, this page above all
- One goal only: get the phone to ring. One action, no navigation menu, no links off the page.
- The phone number is visible in the first viewport, tappable, and sticky on mobile.
- The headline repeats the words people search, including the town.
- Mobile first at 375px. Touch targets 44px or more.
- No hero video, no parallax, no scroll-jacking, no auto-slider, no pop-up, no chat bubble.
- Motion: one purposeful moment on the page, nothing more. Nothing fades in on scroll.
- Target Largest Contentful Paint under 2 seconds on a mobile connection.
- Design every state: rest, hover, focus visible, active, disabled, loading, error, empty.

Before you say you are done
- Show me rendered screenshots at 375px and at 1440px.
- Squint at the thumbnail. If the next action is not obvious, fix the hierarchy.
- Audit your own page against these rules and list every rule you broke, with the reason.
