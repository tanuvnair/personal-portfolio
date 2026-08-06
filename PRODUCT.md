# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience is recruiters and hiring managers evaluating Tanuv for software engineering roles. Their job: decide whether to reach out or advance him to an interview. Secondary visitors (peers, collaborators) are not the design priority.

## Product Purpose

tanuv.info is Tanuv Nair's personal portfolio. It exists to turn visits into interview opportunities and to build a recognizable personal brand as a software engineer. Success means more credible outreach and interview interest, not vanity metrics alone.

## Positioning

A working software engineer in Mumbai — Associate SWE at Algorisys — focused on high-throughput distributed systems, ETL pipelines, HRMS platforms, and Linux infrastructure, with Go and TypeScript as the day-to-day stack. Neighboring generic "full-stack portfolio" templates cannot truthfully claim this combination of role, location, and systems focus.

## Operating Context

Static personal site deployed on GitHub Pages. Visitors scan identity and work on one page (about, projects, skills, contact), optionally download a résumé, follow notes at mimir.vunat.in, or jump to LinkedIn / GitHub / X. Projects are loaded live from the GitHub API (with a static fallback list). Light/dark theme preference is stored locally.

## Capabilities and Constraints

- Single-page portfolio: hero, about, projects, skills/spec sheet, contact, footer social links.
- Contact form is present in the UI but has no backend endpoint; submit only shows a local acknowledgment.
- Stack in code: HTML5, CSS3, vanilla JS; Tailwind CLI available as a dependency; no SPA framework.
- Open / undecided: whether contact should eventually post to a real endpoint; whether STATUS and dataplate fields stay editorial vs. auto-updated.

## Brand Commitments

- Name / domain: Tanuv Nair, tanuv.info
- Voice on-site: direct, technical, lightly dry ("Go-adjacent stubbornness"); path-style nav (`/about`, `/projects`, …)
- External brand surfaces: mimir.vunat.in (notes), LinkedIn, GitHub (`tanuvnair`), X (`@tanuvnair`)

## Evidence on Hand

- Live site: https://tanuv.info/
- Résumé: `TanuvNairResume.pdf`
- Avatar: `img/avatar.png` (referenced in markup)
- Favicon: `img/favicon-32x32.png`
- Project signal: public GitHub repos (e.g. tm1go); site copy also references Fluxroom and personal tools
- Do not fabricate: testimonials, employers beyond Algorisys, metrics, press, or client case studies

## Product Principles

1. Optimize for a hiring scan: identity, role, and proof of systems work should be obvious within seconds.
2. Keep claims factual and attributable — employment, stack, and projects must stay honest.
3. Personal brand is the product: distinctive voice and focus beat generic portfolio completeness.
4. Prefer live evidence (GitHub, résumé, notes) over invented social proof.
5. Contact is an invitation to interview outreach; don't imply a working inbox until one exists.
