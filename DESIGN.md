---
name: tanuv.info
description: Dark craft-bar hireability portfolio. Left-led name hero, status plate, cream on near-black.
colors:
  near-black: "#0E100F"
  cream-ink: "#FFFFE3"
  olive-muted: "#9A9A8A"
  hairline: "rgba(255, 255, 227, 0.14)"
  signal-blue: "#18A0FB"
  signal-soft: "rgba(24, 160, 251, 0.14)"
  signal-hover: "#3bb0ff"
  surface: "#161916"
  busy-red: "#FF3B3B"
  grid-faint: "rgba(255, 255, 227, 0.04)"
  selection-ink: "#ffffff"
typography:
  display:
    fontFamily: "Hanken Grotesk, Segoe UI, sans-serif"
    fontSize: "clamp(2.8rem, 8vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Hanken Grotesk, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Hanken Grotesk, Segoe UI, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title-work:
    fontFamily: "Hanken Grotesk, Segoe UI, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title-email:
    fontFamily: "Hanken Grotesk, Segoe UI, sans-serif"
    fontSize: "clamp(1.35rem, 3vw, 1.85rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, Segoe UI, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body-ui:
    fontFamily: "Hanken Grotesk, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Hanken Grotesk, Segoe UI, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  label:
    fontFamily: "Hanken Grotesk, Segoe UI, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.04em"
  label-chip:
    fontFamily: "Hanken Grotesk, Segoe UI, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
  label-meta:
    fontFamily: "Hanken Grotesk, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.02em"
rounded:
  pill: "999px"
  surface: "12px"
spacing:
  margin: "clamp(16px, 4vw, 48px)"
  section-y: "clamp(4.5rem, 10vw, 7rem)"
  pill-h: "44px"
  header-h: "80px"
  max: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.near-black}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.35rem"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.signal-hover}"
    textColor: "{colors.near-black}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.35rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.signal-blue}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.35rem"
  button-ghost-hover:
    backgroundColor: "{colors.signal-soft}"
    textColor: "{colors.signal-blue}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.35rem"
  button-ghost-small:
    backgroundColor: "transparent"
    textColor: "{colors.signal-blue}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.9rem"
  nav-pill:
    backgroundColor: "transparent"
    textColor: "{colors.cream-ink}"
    rounded: "{rounded.pill}"
    height: "{spacing.pill-h}"
    padding: "0 1.1rem"
  logo-pill:
    backgroundColor: "transparent"
    textColor: "{colors.cream-ink}"
    rounded: "{rounded.pill}"
    height: "{spacing.pill-h}"
    padding: "0 1rem"
  status-plate:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.cream-ink}"
    rounded: "{rounded.surface}"
    padding: "0.35rem 1.15rem"
  stack-chip:
    backgroundColor: "transparent"
    textColor: "{colors.cream-ink}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.8rem"
  icon-link:
    backgroundColor: "transparent"
    textColor: "{colors.cream-ink}"
    rounded: "{rounded.pill}"
    size: "44px"
---

# Design System: tanuv.info

## Overview

**Creative North Star: "The Craft Bar Field"**

A hireability-first systems portfolio that borrows craft materials from thegr8binil.me (near-black field, faint grid, cream ink, signal blue, Hanken Grotesk, pill chrome) without cloning that site's stage lockup. The composition is left-led: the name is the display signal, the bio and CTAs sit under it, circular icon reach-outs finish the left column, and a right-hand status plate holds ROLE / STACK / BASE / STATUS for a recruiter scan.

The field is dark-only. Depth comes from hairline rules, dashed separators, a soft surface mix on the status plate, and restrained motion (hero fade-up, busy glow pulse, hover nudge). Contact is direct email plus copy. There is no footer, no theme toggle, no fake forms or metrics.

**Key Characteristics:**
- Near-black canvas with a masked 48px grid and cream ink
- Single family: Hanken Grotesk from display through labels
- Pill chrome at 44px for nav, CTAs, and icon links; 12px radius for plates and photo
- Left-led hero name + right status plate (Busy red glow pulse)
- Ruled project rows with a quieter dashed secondary block (Also on GitHub)

## Colors

Near-black field, cream ink, olive secondary text, and a single signal blue accent. Busy red is reserved for STATUS.

### Primary
- **Signal Blue** (`#18A0FB`): Primary CTAs, active nav, link accents, focus rings, contact email. Soft wash (`rgba(24, 160, 251, 0.14)`) for logo-dot halo and ghost-button hover. Hover fill lifts to **Signal Hover** (`#3bb0ff` / `--accent-hover`).

### Secondary
- **Busy Red** (`#FF3B3B`): STATUS label and the busy-dot core. Glow pulse uses expanding `box-shadow` rings in the same hue. Not a general accent.

### Neutral
- **Near Black** (`#0E100F`): Page background and sticky header mix base.
- **Cream Ink** (`#FFFFE3`): Primary text and selection of chrome borders via hairline.
- **Olive Muted** (`#9A9A8A`): Lead copy, body secondary, status keys, quieter CTAs.
- **Hairline** (`rgba(255, 255, 227, 0.14)`): Pill borders, section rules, row dividers.
- **Surface** (`#161916`): Photo well and status-plate mix partner.
- **Grid Faint** (`rgba(255, 255, 227, 0.04)`): Fixed 48px field grid under content.

### Named Rules
**The One Signal Rule.** Signal blue is the only interactive accent for links, CTAs, and focus. Busy red is STATUS-only.

**The Dark Field Rule.** The system is dark-only. Do not introduce a light theme or invert the cream-on-near-black relationship.

## Typography

**Display Font:** Hanken Grotesk (with Segoe UI, sans-serif)
**Body Font:** Hanken Grotesk (with Segoe UI, sans-serif)
**Label/Mono Font:** same family (no mono stack)

**Character:** One grotesque voice from hero name to stack chips. Weight and tracking carry hierarchy, not a second face.

### Hierarchy
- **Display** (800, `clamp(2.8rem, 8vw, 4.75rem)`, 1.02): Hero name only (`Tanuv Nair`). Tight negative tracking.
- **Headline** (700, `clamp(2rem, 4vw, 2.75rem)`, 1.1): Section titles (About, Focus, Projects, Contact).
- **Title** (700, 1.25rem): Project block titles, focus lane names.
- **Title work** (700, 1.15rem): Featured work names.
- **Title email** (700, `clamp(1.35rem, 3vw, 1.85rem)`): Contact address.
- **Body** (400, 1.05rem, 1.65): Leads and paragraphs. Cap about copy near 58ch; leads near 40rem.
- **Body UI** (500-600, 0.95rem): Nav, pills, primary buttons, block leads, Also on GitHub repo names.
- **Body sm** (500-600, 0.9rem): Status values, work CTAs, copy status.
- **Label** (600, 0.78rem, 0.04em tracking): Status-plate keys (ROLE, STACK, BASE, STATUS). Uppercase in copy, not via CSS transform.
- **Label chip** (500, 0.85rem): Stack chips, small ghost buttons, recent CTAs.
- **Label meta** (500, 0.75rem): Language tags under recent repo names.

Self-hosted variable Hanken Grotesk (`fonts/hanken.css`, latin + latin-ext, weight 400-800, `font-display: swap`). Do not load from fonts.googleapis.com.

### Named Rules
**The Single Face Rule.** Do not add a display serif, mono, or second sans. Hierarchy is weight and size only.

**The Name Is Display Rule.** The hero brand signal is the person's name at display scale. Do not demote the name to an eyebrow or replace it with a slogan lockup.

## Layout

Main column maxes at 1120px with fluid side margin `clamp(16px, 4vw, 48px)`. Sticky header uses a wider 1400px inner grid: logo pill start, nav pill center (from 960px), resume pill end. Sections pad `clamp(4.5rem, 10vw, 7rem)` vertically and separate with a solid hairline top border.

Hero fills the first viewport under the header (`min-height: calc(100vh - 80px)`). From 900px, hero is a two-column grid (~1.35fr / 0.75fr): copy left, status plate right. About becomes photo + copy from 760px. Focus and projects are single-column ruled lists. Projects nest Selected work (solid rules) then Also on GitHub (dashed separator, quieter rows). Contact is email + copy only. No site footer.

Breakpoints in use: 700px (work row collapse), 760px (about), 900px (hero split), 960px (desktop nav / resume pill).

### Named Rules
**The Left-Led Hero Rule.** First viewport: name, one lead, one CTA pair, icon row, status plate. No centered stage lockup, floating meta comments, or absolute email pills on the hero.

**The Projects Hierarchy Rule.** `Projects` → Selected work (featured ruled rows) → Also on GitHub (dashed separator, quieter recent rows, same hover nudge).

## Elevation & Depth

Mostly flat tonal craft. Depth comes from the faint grid field, hairline borders, dashed status/secondary separators, a translucent sticky header (`color-mix` + 14px blur), and the status plate's surface mix. Ambient drop shadows are not part of the resting UI.

### Shadow Vocabulary
- **Logo / accent halo** (`box-shadow: 0 0 0 3px rgba(24, 160, 251, 0.14)`): Soft ring under the logo signal dot.
- **Busy glow pulse** (`box-shadow` expanding from `0 0 0 0 rgba(255, 59, 59, 0.55)` to `0 0 0 8px` transparent over 1.8s): STATUS busy-dot only. Reduced motion freezes a static soft red ring.

### Named Rules
**The Hairline Depth Rule.** Prefer 1px cream hairlines and dashed dividers over card shadows. Lift is hover motion (1px up or 3px nudge), not layered umbras.

## Shapes

Two radii only: full pill (`999px`) for chrome (logo, nav, resume, buttons, icon links, stack chips, mobile toggle), and surface (`12px`) for the status plate and about photo well. Circles appear for the logo dot, busy-dot, and 44px icon-link hits. Borders are 1px hairline unless a ghost button uses signal blue.

### Named Rules
**The Pill Chrome Rule.** Interactive chrome shares `--pill-h: 44px` and pill radius. Do not invent a third radius family for buttons or nav.

## Components

### Buttons
Pill CTAs with inline SVG icons, 600 weight, 0.95rem.
- **Shape:** Full pill (`999px`)
- **Primary:** Signal blue fill, near-black label (≥4.5:1). Hover to signal-hover, lift 1px.
- **Ghost:** Transparent, signal blue border and text. Hover fills `signal-soft`.
- **Small ghost:** Tighter padding for Copy on contact.
- **Focus:** 2px signal outline, 3px offset (global `:focus-visible`).

### Chips
Stack chips in Focus: pill outline hairline, cream text, 0.85rem / 500. Not filter controls; static labels.

### Cards / Containers
No marketing cards. Containers that exist:
- **Status plate:** 12px radius, hairline border, mixed near-black/surface fill, dashed row dividers, muted uppercase keys.
- **About photo:** 12px radius, hairline, surface well, square crop.
- **Contact plate:** Unboxed max-width wrapper; email is typography, not a card.

### Inputs / Fields
No text inputs. Contact is `mailto:` plus a ghost Copy button and a live status line.

### Navigation
Three pill clusters: logo (`tanuv.info` + accent dot), primary nav with icons (Home, About, Focus, Projects, Contact), resume pill. Desktop from 960px; below that, hamburger + mobile menu with hairline rows. Active/hover links go full opacity signal blue. Sticky header blurs the field.

### Icon link row
44px circular pill hits under hero CTAs (GitHub, LinkedIn, X, Notes, resume). Hairline border; hover signal border/color and 1px lift.

### Work rows
Featured and recent rows share a three-column grid (name / desc / CTA) collapsing under 700px. Featured uses stronger name weight and signal CTA; recent is quieter with muted CTA until hover. Both nudge `translateX(3px)` on hover. Secondary block separated by a dashed hairline.

### Busy status
STATUS shows Busy in busy red with an 8px solid busy-dot. Animation `busy-glow` expands a red glow ring (not a green live blinker). JS pauses the animation when the dot is offscreen. Reduced motion: static soft ring.

### Named Rules
**The Busy Glow Rule.** STATUS uses busy red + expanding glow pulse. Do not reuse live green as an availability blinker on this plate.

## Do's and Don'ts

### Do:
- **Do** keep the name as the hero display signal and the status plate as the right-hand scan summary.
- **Do** reuse pill chrome at 44px height and surface radius 12px for plates/photo.
- **Do** keep projects as Selected work then Also on GitHub, with the dashed separator marking secondary rank.
- **Do** route contact through real email (`tanuvnair@gmail.com`) with copy-to-clipboard.
- **Do** honor `prefers-reduced-motion` by dropping hero entrance and freezing the busy glow.

### Don't:
- **Don't** restore a centered SOFTWARE / ENGINEER / SYSTEMS stage lockup or Binil layout clone.
- **Don't** add light mode, theme toggle, footer, contact forms, or fake metrics.
- **Don't** put floating `//` comment meta, absolute email pills on the hero, or numbered Focus 01-04 chrome.
- **Don't** use Connect-style live green blinkers for STATUS; Busy is red glow only.
- **Don't** introduce a second typeface or card-heavy dashboard density on the first viewport.
