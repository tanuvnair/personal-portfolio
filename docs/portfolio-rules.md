# How to Build a Portfolio That Actually Scores Well

Derived from Anthony Sistilli's "Personal Site Reviews" spreadsheet (~98 dev portfolios, scored live on stream across three axes: **Hireability**, **Aesthetic**, **Creativity**, out of 10 each, 30 max) plus a direct audit of the top- and bottom-scoring sites.

## The scoring lens, restated

- **Hireability** — could a recruiter, in 10-20 seconds, understand what you do and your skill level, or find a resume that does? This is the highest-weighted "real world" axis.
- **Aesthetic** — does it look good, stay responsive, and keep a clear sense of direction, without being overwhelming?
- **Creativity** — is it distinctive *without* costing you the other two scores? A twist on the fundamentals beats a totally-out-there concept.

Top scorers (26.5–28.5/30) nail all three simultaneously. Bottom scorers (5–8/30) usually fail Hireability first, then drag Aesthetic down with it.

---

## Sites reviewed directly

| Site | Score | What's actually there |
|---|---|---|
| thegr8binil.me | 28/30 | Sharp title tag doing all the work: "Product Manager, Designer & Developer — Open to Work Worldwide." Role + availability + geography in one line. |
| tedawf.com | 28/30 | Clean nav (home/projects/blog/contact), a one-line identity ("29yo software engineer from Singapore, backend by profession, full-stack by passion"), real employer timeline with quantified impact, resume link, active blog. |
| natsha.me | 27/30 | Fully custom/canvas-driven experience — nothing in a plain HTML fetch, meaning the whole site is a designed interactive piece. Highest possible Aesthetic + Creativity (10/10 each). |
| bryanleezh.dev | 27/30 | A literal top-down game you navigate with arrow keys (Pokémon-style). Extreme creativity that still resolves into a portfolio, not a gimmick. |
| wallenart.dev | 26.5/30 | Vim-motion/arrow-key navigable site; job titles reframed as playful RPG-style names ("Digital Alchemist," "TypeScript Wizard") while the underlying content (stack, real employers) stays fully legible. |
| sahilverma.dev | 25/30 | Strong structure (about → skills → projects → blogs) but an enormous, unfiltered skills list (dozens of libraries) — likely why Hireability (8) trails Aesthetic/Creativity. |
| cleverdeveloper.in (harxit.com) | 24.5/30 | Almost no chrome at all — a few sentences of bio, then a tight list of shipped products with one-line hooks ("I added IntelliSense to LeetCode 😏") and technical blog posts. Proof-of-work over decoration. |
| prasoon-mahawar.dev | 25.5/30 | Minimal, precise meta description ("Software engineer working across web development and machine learning") — nothing to fetch beyond that because the real content is rendered client-side, but framing is exact. |
| christos-kakoulakis.gr | 5/30 | Generic Bootstrap-template layout, a wall of every job ever held, typos ("motnhs," "fundimentals," "Cerifications"), and a literal unedited **"Lorem ipsum, dolor sit"** placeholder project still live on the site. |
| mikemayer.wtf | 7.5/30 | The entire page is one meme image. No name, no role, no links, no way to evaluate skill. |

(Two more top sites, sugith.in and joshuaonyeuche.com, blocked automated fetches via robots.txt — but their scores of 28.5 and 6 respectively track the same pattern as above once you view them manually.)

---

## The rules

### 1. Answer "who are you and what do you do" in one glance
Every high scorer states role + focus + (often) status in the first sentence or title tag: *"29yo software engineer from Singapore, backend by profession"*; *"Fullstack developer from India"*; *"AI-native Product Manager... open to full-time roles."* If a recruiter has to scroll or infer, you've already lost the 10-20 second window.

### 2. Ship real, verifiable proof — not a skills inventory
The best sites lead with **things they built**, ideally with outcomes attached (*"handling 80Cr+ quarterly billing," "reduced setup from 1-2 hours to under 5 minutes"*). The weakest sites lead with a **list of everything they've ever touched** (Christos: 25+ tech-stack badges; even Sahil Verma's otherwise-strong site loses points here). A shorter list of shipped, linked, explained projects beats an exhaustive tag cloud every time.

### 3. Never publish a placeholder
Christos Kakoulakis's site — the lowest score in the sheet — still has a project card literally titled "Branding 3" with "Lorem ipsum, dolor sit" as its description. One unfinished placeholder signals the whole site wasn't proofread, and that reads as care level, not just content gap.

### 4. Proofread like it's a resume, because it is one
Typos ("motnhs," "fundimentals," "Cerifications") on an otherwise content-rich site actively undercut Hireability. Recruiters treat spelling on your own site as a proxy for attention to detail in your code.

### 5. Make the resume/contact path one click away
Every top scorer has a visible, un-buried Resume link, contact page, or booking link (`tedawf.com/resume.pdf`, `cal.com/sahilverma.dev`, explicit "Contact Me" sections). If the reviewer's job is to "obtain or view a resume" and can't find it fast, Hireability drops regardless of design quality.

### 6. One strong creative idea, fully executed, beats several small ones
The 27-28+ scorers each commit to a single distinctive concept and execute it completely:
 - a fully custom animated/canvas site (natsha.me)
 - a literal playable game as the portfolio shell (bryanleezh.dev)
 - vim/arrow-key navigation with a consistent world-building theme (wallenart.dev)

Compare this to mid-tier sites (17-20 range) that are competent but visually generic — solid layout, nothing that differentiates them from thousands of similar template-based portfolios.

### 7. Creativity must not break clarity
The rubric explicitly penalizes creativity that "compromises" the other values. The gamified sites above still surface a normal reading of your name, stack, and experience if you don't want to play along — they layer a twist on top of legible fundamentals rather than hiding the fundamentals inside the twist. A concept so unusual the visitor can't find your actual qualifications will cap your Hireability even if Creativity is a 10.

### 8. A joke is not a portfolio
mikemayer.wtf is a single meme image and nothing else. Humor and personality help (see wallenart.dev's self-aware job titles, tedawf.com's "escalations go to my cat" line) — but only as seasoning on real content, never as the entire meal.

### 9. Keep it fast, responsive, and free of unnecessary friction
The Aesthetic axis explicitly asks "is it overwhelming" and "does it stay responsive." Dense, template-heavy sites with dozens of sections (Christos again) read as cluttered even when individually well-built. Favor a small number of clearly-separated sections users can skim in seconds.

### 10. Write your own copy — don't ship generic template language
Sites that read like a personal voice ("Jai hind dosto 🫡," "if you like cringe-inducing experiences, feel free to connect") score better on both Aesthetic and Creativity than sites that read like they were filled into a Bootstrap portfolio theme with boilerplate section headers.

### 11. A live blog or writing section is a quiet Hireability booster
Several of the top scorers (tedawf.com, cleverdeveloper.in, sahilverma.dev) include a blog with genuine technical write-ups. This does double duty: it's more proof of real understanding than a skills badge, and it signals the site — and the person — are actively maintained.

---

## Quick self-audit checklist

- [ ] Can a stranger state your role and specialty after 10 seconds on the page?
- [ ] Is there a resume/contact link visible without scrolling or hunting?
- [ ] Does every project link to something real (live site, repo, or writeup) — not just a tag list?
- [ ] Have you removed every placeholder, lorem ipsum, and "coming soon"?
- [ ] Has the copy been spell-checked by something other than you?
- [ ] Is there one clear creative "idea" to the site, executed fully, rather than five small decorative flourishes?
- [ ] Could someone who ignores your creative gimmick entirely still find your name, role, and work in a few clicks?
- [ ] Does the site work and look intentional on mobile?
- [ ] Is your skills section curated (top ~10-15 tools) rather than an exhaustive inventory?
