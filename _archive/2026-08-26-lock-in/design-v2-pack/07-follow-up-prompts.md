# Follow-up prompts, in order (paste one at a time, after the first output)

*Never regenerate the whole page. Refine. Each prompt below is one message. If a step shows a copy change, reply with the copy-lock line first (see the end).*

1. **Five-second test.** "Show me the 375 px screenshot of /fr/ again. Pretend you are a tenant at 23:00 with water on the bathroom floor. In five seconds, what do you understand, and what is the next thing you tap? If the answer is not 'call 0480 649 649', tell me what is in the way and fix it."
2. **Copy diff.** "Compare every string on both pages with 02-copy-fr.md and 03-copy-nl.md. List every deviation, even one character or one space, then restore the copy files' version. Do not change anything else."
3. **Belgian register.** "Run these checks and report yes or no for each: FR uses vous everywhere and NL uses u everywhere; FR body says Vilvorde and NL says Vilvoorde; the postal address is Dutch on both pages; FR has a narrow no-break space before ? ! : ; and before €; NL has no space before punctuation; prices read 129 € on FR and € 129 on NL; no em dash anywhere; no word from the banned lists in 11-copy research (toute la Belgique, à Bruxelles as served, voorrijkosten, putje, appje, je/jij)."
4. **Desktop review.** "Show /fr/ at 1440 px. The hero photo must bleed off the right edge, the call button must be in the header, the sticky bar must be gone, the four price cards must sit in one row, the reviews three across. Fix what is not so."
5. **Hierarchy and slop audit.** "Audit the page against DESIGN.md section 7 and list every rule you broke, with the reason. Then tell me the three things on the page that look most like a generated template, and fix them."
6. **Accessibility and states.** "Tab through the page from the top. Report: skip link visible on focus, every focus ring visible on light and on dark sections, FAQ items open with Enter and Space, touch targets 48 px, contrast of every text and background pair at AA. Fix what fails. Then show me the hover, focus and active states of the call button, on paper and on the ink band."
7. **Weight and speed.** "List every request the page makes before any click, with its size. Remove anything that is not our own HTML, CSS, two fonts and images. Confirm no external host is contacted. Report the hero image weight at 1540 wide in AVIF and WebP."
8. **NL parity.** "Open /nl/ at 375 and 1440. Section by section, confirm it has the same structure, the same images and the same number of elements as /fr/. Any difference is a bug."
9. **Definition of done.** "Run section C of 05-tech-standard.md line by line and answer yes or no for each. For every no, fix it or tell me why it cannot be fixed in this tool."
10. **Export.** "Export the full static site as a ZIP: index.html, fr/index.html, nl/index.html, 404.html, assets/css/style.css, assets/fonts, assets/img, _headers, robots.txt, sitemap.xml, site.webmanifest. No framework files, no node_modules, no CDN references."

**Copy-lock line (use whenever a string changed):** "Copy lock. Revert every string to the copy files character for character and list the strings you changed."

**If it adds an invented element (a rating, a count, a logo, a testimonial):** "Rule 1. Nothing on this page may be invented. Remove it and list every other invented element you can find."
