---
name: tanuv.info
description: Blueprint spec-sheet portfolio for a systems-focused software engineer
colors:
  paper-bg: "#FAFAF8"
  ink: "#14171A"
  graphite: "#5B6168"
  hairline: "#E3E3DF"
  cobalt-signal: "#2F5DE0"
  cobalt-wash: "#EAF0FF"
  surface: "#FFFFFF"
  blueprint-bg: "#0A2452"
  blueprint-ink: "#EAF2FF"
  blueprint-muted: "#93AEDD"
  blueprint-line: "rgba(234, 242, 255, 0.16)"
  cyan-trace: "#7FB2FF"
  cyan-wash: "rgba(127, 178, 255, 0.12)"
  blueprint-surface: "#0E2C63"
  blueprint-btn-ink: "#08163A"
  status-live: "#FF0000"
typography:
  display:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(2.6rem, 7vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(1.6rem, 3vw, 2.2rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.98rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  sm: "3px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "20px"
  lg: "48px"
  xl: "110px"
  margin: "clamp(20px, 5vw, 96px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-bg}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "13px 26px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-bg}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "13px 26px"
  button-ghost-hover:
    backgroundColor: "transparent"
    textColor: "{colors.cobalt-signal}"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.cobalt-signal}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "6px 13px"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
  project-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "22px"
  dataplate:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "18px 20px"
---

# Design System: tanuv.info

## Overview

**Creative North Star: "The Blueprint Spec Sheet"**

Light mode reads as a paper engineering print — cool off-white stock, graphite ink, hairline rules. Dark mode is the blueprint itself: deep navy field, cyan traces, dashed instrument rows. The interface behaves like a fabricated plate for a working systems engineer, not a marketing landing page.

Density is deliberate and technical. Mono type carries identity, navigation, and labels; sans carries long-form reading. Corners stay nearly square. Depth comes from borders and tonal surfaces, not shadow stacks. Motion is sparse: a caret blink, a soft scroll reveal, a 1–2px hover lift.

**Key Characteristics:**
- Dual-theme world: paper spec (light) / blueprint (dark)
- JetBrains Mono as the brand voice; Inter for body prose
- Hairline + dashed dividers as structure
- ~3px radius everywhere interactive surfaces appear
- Print registration crosses as a quiet desktop signature
- Path-style mono navigation (`/about`, `/projects`, …)

## Colors

One accent family (cobalt → cyan) on a neutral paper/blueprint field. Accent is scarce by design.

### Primary
- **Cobalt Signal** (`{colors.cobalt-signal}` light / `{colors.cyan-trace}` dark): CTAs in nav, links, focus rings, selection, status accents, photo tick marks. Use sparingly so it reads as instrumentation, not decoration.
- **Cobalt Wash** (`{colors.cobalt-wash}` / `{colors.cyan-wash}`): Soft fill behind hovered accent borders and related quiet highlights.

### Neutral
- **Paper BG** (`{colors.paper-bg}`): Page field in light mode.
- **Ink** (`{colors.ink}`): Primary text and primary button fill (light).
- **Graphite** (`{colors.graphite}`): Secondary copy, nav defaults, meta.
- **Hairline** (`{colors.hairline}`): Borders, section rules, dashed dataplate rows.
- **Surface** (`{colors.surface}`): Raised panels (cards, form fields, dataplate) on the page field.
- **Blueprint BG / Ink / Muted / Line / Surface** (dark tokens): Same roles remapped onto the blueprint field.

### Named Rules
**The One Trace Rule.** Cobalt/cyan is a signal line, not a theme wash. Keep filled accent surfaces rare (nav CTA border, primary dark button, focus). Prefer ink-on-paper for primary actions in light mode.

**The Theme Swap Rule.** Never invent a third palette. Light and dark share the same roles; only the token values change under `html.dark`.

## Typography

**Display Font:** JetBrains Mono (with ui-monospace, monospace)
**Body Font:** Inter (with -apple-system, sans-serif)
**Label/Mono Font:** JetBrains Mono

**Character:** Mono owns the brand — name, hero, section titles, nav, labels, metadata. Sans is the quiet reader for paragraphs. The pairing feels like a terminal bolted to a clean document.

### Hierarchy
- **Display** (700, `clamp(2.6rem, 7vw, 5rem)`, 1.02): Hero name lockup only.
- **Headline** (700, `clamp(1.6rem, 3vw, 2.2rem)`): Section titles.
- **Title** (600, ~0.98rem): Project names, logo weight.
- **Body** (400, 16px / 1.1rem for hero lead, lh 1.6): About and supporting copy; keep ~46–62ch.
- **Label** (400–600, 0.72–0.85rem, often tracked): Nav, form labels, dataplate, footer, buttons.

### Named Rules
**The Mono Authority Rule.** If it identifies the person, the route, or a machine-readable field, it is mono. Body sans is for sentences, not chrome.

## Layout

Centered column, max width **1280px**, horizontal margin **`clamp(20px, 5vw, 96px)`**, fixed header **60px**. Sections stack with **~110px** vertical padding and a full-width hairline separator. Hero is a one-column stack that becomes **1.4fr / 0.6fr** at 900px (copy + dataplate). Projects: 1 → 2 (700px) → 3 (1024px). Spec sheet: label column **200px** beside items from 700px. Contact form max **640px**.

Rhythm favors generous section air and tight instrument clusters (dataplate rows, spec items) rather than card-grid marketing density.

### Named Rules
**The Plate Margin Rule.** Content never goes edge-to-edge; registration marks and margin breathing room are part of the artifact.

## Elevation & Depth

Flat by default. Surfaces separate via background contrast (`--bg` vs `--surface`) and **1px** solid or dashed borders. No ambient shadow vocabulary. Soft presence: header uses translucent bg + **10px** blur. Hover may lift **1–2px** (`translateY`) without casting a shadow.

### Named Rules
**The Flat Plate Rule.** Do not introduce drop shadows to “finish” a card. If it needs separation, use a hairline or a surface token.

## Shapes

Nearly square geometry: **3px** radius on buttons, cards, inputs, dataplate, photo. Theme toggle is the exception — full circle. Registration marks and photo corner ticks are hard right angles. Status and language dots are true circles (6–7px).

### Named Rules
**The Near-Square Rule.** Radius stays at 3px. Do not drift toward soft 12–16px product UI corners.

## Components

### Buttons
Precise mono controls with a 1px hover lift.
- **Shape:** Near-square (3px)
- **Primary:** Ink fill / paper text (light); cyan fill / deep navy text (dark). Padding `13px 26px`.
- **Ghost:** Transparent, hairline border; hover shifts border and text to accent.
- **Focus:** 2px accent outline, 2px offset (global `:focus-visible`).

### Cards / Containers
Project cards and the hero dataplate share the same plate language.
- **Corner Style:** 3px
- **Background:** Surface on page field
- **Border:** 1px hairline; project cards accent on hover
- **Internal Padding:** ~18–22px
- **Dataplate rows:** Dashed hairline dividers; key muted / value ink

### Inputs / Fields
- **Style:** Surface fill, hairline border, 3px radius, mono uppercase labels
- **Focus:** Accent border (outline still via global focus-visible)
- **Status line:** Mono, accent-colored acknowledgment text

### Navigation
Fixed frosted header; mono path links; muted default, ink on hover. Accent-bordered `/contact` CTA. Mobile: full-width stacked links under a hairline. Logo: mono `tanuv.info` with diamond accent mark.

### Spec sheet & skills
Bordered rows, accent mono labels, wrap-flow items with small ink dots — reads as a bill of materials, not a chip cloud.

### Signature: registration marks
Fixed 18×18 crosshairs at the four viewport corners (desktop only). Part of the print metaphor; keep quiet (≈0.55 opacity).

## Do's and Don'ts

### Do:
- **Do** treat light and dark as two finishes of the same plate (paper vs blueprint).
- **Do** lead identity with JetBrains Mono and path-style chrome.
- **Do** structure with hairline / dashed rules and surface panels.
- **Do** keep radius at 3px and accent usage scarce.
- **Do** honor `prefers-reduced-motion` (already wired globally).

### Don't:
- **Don't** add soft multi-layer shadows or floating glass cards.
- **Don't** introduce a second accent hue (purple, teal, terracotta) alongside cobalt/cyan.
- **Don't** round corners into modern SaaS softness.
- **Don't** replace mono brand chrome with a display serif or Inter-led nav.
- **Don't** invent testimonials, metrics strips, or decorative illustration as system patterns.
