---
name: tanuv.info
description: A 1984 one-bit desktop portfolio for a systems-focused software engineer
colors:
  ink: "#000000"
  paper: "#ffffff"
typography:
  display:
    fontFamily: "Silkscreen, 'Courier New', monospace"
    fontSize: "clamp(2.1rem, 6vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "normal"
  headline:
    fontFamily: "Silkscreen, 'Courier New', monospace"
    fontSize: "clamp(0.85rem, 2vw, 1.05rem)"
    fontWeight: 400
    letterSpacing: "normal"
  title:
    fontFamily: "Silkscreen, 'Courier New', monospace"
    fontSize: "0.8rem"
    fontWeight: 700
    letterSpacing: "normal"
  body:
    fontFamily: "Geneva, Verdana, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Silkscreen, 'Courier New', monospace"
    fontSize: "0.68rem"
    fontWeight: 400
    letterSpacing: "normal"
spacing:
  sm: "14px"
  md: "26px"
  lg: "56px"
  gutter: "28px"
components:
  button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "0"
    padding: "9px 20px"
  button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-default:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "0"
    padding: "9px 20px"
  window:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "0"
    padding: "28px 30px"
  titlebar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    height: "30px"
    padding: "0 8px"
  menu-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "30px"
    padding: "0 10px"
  menu-item-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    padding: "7px 14px"
  file-row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "0"
    padding: "13px 12px"
  file-row-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  desk-icon-label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "1px 4px"
  selection-chip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "0"
    padding: "4px 8px"
  meta-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "0"
    padding: "2px 6px"
---

# Design System: tanuv.info

## Overview

**Creative North Star: "The One-Bit Desktop"**

The site is a 1984 Macintosh-class desktop rendered in pure one-bit graphics: black pixels and white pixels, nothing in between. It boots with a zoom-rect flourish into an already-open identity window, and every surface — menu bar, windows, dropdowns, desktop icons, file lists — speaks 1984 system-software grammar: black title bars with white close boxes, marching-ants selection, inverted press states, ordered dither instead of gray.

Density is information-forward but airy: one staggered column of windows on a checkerboard desktop, generous gaps, small Geneva-class body text doing the reading while a pixel face runs the chrome. Motion ticks in `steps()` rather than gliding; state changes are instant inversions. The world has a single finish — there is no dark mode, no theme toggle, no color.

**Key Characteristics:**
- Two values only: `#000000` ink and `#ffffff` paper; ordered dither is the only gray
- Silkscreen (self-hosted, OFL) for chrome and identity; Geneva-class sans for reading
- 1px black chrome everywhere; square corners with zero radius, no exceptions
- One shadow: a 4px hard black offset under windows — the era's native depth
- Inversion (ink↔paper swap) as the universal hover / press / selection state
- Marching ants as the focus and navigation-flash signal
- Stepped, 1-bit motion: boot zoom-rect, ticking ants, 1px press displacement

## Colors

A strict one-bit palette: full black, full white, and pattern-rendered dither standing in for gray. No hex between the poles, no alpha, no hue anywhere on the surface.

### Primary
- **Ink** (`{colors.ink}`): Every pixel of meaning — body text, 1px chrome lines, title bars, menu-bar border, icon glyphs, square bullets, the hard window shadow, and the inverted fill behind every hovered or selected element.

### Neutral
- **Paper** (`{colors.paper}`): The field. Window bodies, menu bar, dropdowns, icon label chips, and the light half of every inversion.

### Dither (patterns, not values)
- **Checker** (2px two-by-two checkerboard, `--checker`): The desktop wallpaper behind everything, and the divider line between file-list rows (applied as a `border-image`).
- **Stipple 25%** (4px ordered stipple, `--stipple-25`): The quiet "gray" fill inside metadata tags (`.entry-sub`). When a design asks for gray, this is the answer.

### Named Rules
**The Two Values Rule.** Black and white are the only values. There is no gray hex, no `rgba()` wash, no opacity blend, no accent color. If a surface needs a middle tone, use the checker or the 25% stipple — gray is a pattern here, never a value.

**The Inversion Rule.** The universal state change is a full ink↔paper swap. Hover, press, selection, focus, and open menus all invert; nothing lightens, darkens, fades, or tints.

## Typography

**Display Font:** Silkscreen 700 (self-hosted woff2, with 'Courier New', monospace fallback)
**Body Font:** Geneva (with Verdana, system-ui, sans-serif)
**Label/Pixel Font:** Silkscreen 400 (same self-hosted family)

**Character:** Silkscreen is the Chicago-class pixel voice of the machine — title bars, buttons, menus, icon labels, the name itself. Geneva-class sans is the small, plain reader for sentences, menu items, and the clock. The divide is identity vs. reading, not chrome vs. content: menu *titles* are pixel, menu *items* are Geneva. Chrome copy trends lowercase or filename-cased (`work`, `stack.sys`, `about.txt`, `Resume.pdf`); nothing is set in all caps.

### Hierarchy
- **Display** (Silkscreen 700, `clamp(2.1rem, 6vw, 3.4rem)`, lh 1.05): The hero name in the identity window. Used once per surface.
- **Headline** (Silkscreen 400, `clamp(0.85rem, 2vw, 1.05rem)`): The role line directly under the name.
- **Title** (Silkscreen 700, 0.72–0.85rem): Window title-bar text, file names, entry heads, stack heads, buttons.
- **Body** (Geneva 400, 15px, lh 1.55): Paragraphs, file descriptions, menu items. Measures stay narrow: hero copy 58ch, entry bullets 68ch, notes copy 52ch.
- **Label** (Silkscreen 400, 0.62–0.72rem): Menu-bar chrome, desktop-icon labels, status line, footer.

### Named Rules
**The Two Voices Rule.** Identity and labels are Silkscreen; sentences are Geneva. Never set body paragraphs in the pixel face (it is illegible at length), and never set a title bar, button, or icon label in the body face (it stops sounding like the machine).

## Layout

A single centered column (`max-width: 980px`, 28px gutters) under a fixed 30px menu bar; content begins `menubar + 42px` down. Windows stack with a 56px gap and **stagger**: they alternate `flex-start` / `flex-end` alignment at varying widths (560–760px, each capped at 100%), so the column reads as windows scattered on a desktop, not a centered document. The identity window (~700px) sits first, nudged right by `clamp(0px, 3vw, 40px)` — center-left, dominant on load.

A fixed desktop-icon rail hangs at the right edge (`top: 84px; right: 14px; gap: 26px`). Breakpoints: at **1099px** the rail disappears and the icons re-flow into a wrapped row inside the hero window (border-top separated); at **719px** the two menus collapse into a single "Menu" dropdown, gutters drop to 16px, window gaps to 40px, and all windows stretch full-width; at **640px** the stack section splits into two columns. Window bodies pad 28px/30px (22px/18px on mobile).

### Named Rules
**The Staggered Desktop Rule.** Windows never form a flush full-width stack on desktop. Alternate the alignment, vary the width within the 560–760px band, and keep the 56px air between them — the scatter is the desktop metaphor.

## Elevation & Depth

The system is flat with exactly one shadow, and it is the era's native depth: a hard, blur-free offset. No ambient shadows, no layered stacks, no alpha softness anywhere. Everything else separates by 1px black chrome or by inversion.

### Shadow Vocabulary
- **Window shadow** (`box-shadow: 4px 4px 0 #000000`): Under every window. The only depth a surface gets.
- **Menu popup shadow** (`box-shadow: 3px 3px 0 #000000`): Under dropdown menus — the same hard offset, one pixel closer.

### Named Rules
**The Hard Offset Rule.** Shadows are solid black, offset down-right, zero blur, zero spread, zero alpha — 4px for windows, 3px for popups. Do not "finish" anything with a soft shadow; if it needs separation, use a 1px border or inversion.

## Shapes

Square geometry, absolutely: every window, button, chip, close box, menu, and tag has zero border-radius. Line weight is 1px black for chrome, 2px for focus outlines and the default-button ring. Recurring hard-edged motifs: the 13px white-bordered close box at the left of every black title bar; 6×6px solid-ink squares as list bullets; the 12px diamond logo mark. Icons are authored 1-bit SVGs on a 16×16 grid, two-color `currentColor` fills, `shape-rendering="crispEdges"`, rendered at 32px (desktop icons), 28px (file rows), and 14px (external-link arrows).

### Named Rules
**The Square Pixel Rule.** Radius is 0 on every surface, and all artwork snaps to the pixel grid. Do not round corners, soften edges, or drop in antialiased/glyph icons — crispEdges or nothing.

## Components

### Buttons
Chunky pixel-labeled controls that invert on contact.
- **Shape:** Square (0 radius), 1px ink border.
- **Standard:** Paper fill, ink Silkscreen 700 label (0.78rem), padding 9px 20px.
- **Default (primary action):** Same button plus the classic double ring — a 2px ink outline offset 2px outside the 1px border. Exactly one per view ("View work").
- **Hover / Focus:** Full inversion (ink fill, paper label). Focused buttons also carry a 2px solid outline, 2px offset.
- **Active:** Instant `translate(1px, 1px)` press displacement; no transition.

### Windows (signature container)
The portfolio's unit of content. White body, 1px ink border, hard 4px offset shadow. Title bar is black, 30px tall: white 13px close box at the left, centered Silkscreen 700 title (0.72rem) in white. The close box inverts (paper fill) on hover, and clicking it — or double-clicking the title bar — rolls the window up WindowShade-style (body hides, bar remains). Body padding 28px 30px (22px 18px mobile).

### Menu bar & dropdowns
Fixed 30px white bar, 1px ink bottom border, Silkscreen labels (0.68rem). Left: diamond mark + bold `tanuv.info`, then File / Go menus (a single "Menu" on mobile). Right: a Geneva minute-ticking clock (`Fri 2:30 AM`). Menu titles invert on hover and while open. Dropdowns are white, 1px border, 3px hard offset shadow, Geneva items (0.85rem, 7px 14px) that invert on hover/focus. Click to open, hover to switch, Esc closes and refocuses the title, arrows cycle items, click-outside dismisses.

### File lists
The system's link table. Each row: 28px pixel icon, Silkscreen 700 file name (0.8rem, min-width 96px), Geneva description (0.85rem, flexes), 14px external-arrow at the right edge; padding 13px 12px. Rows are separated by a 1px **checkerboard dither divider** (`border-image`). Hover/focus inverts the entire row — glyph, name, description, arrow all flip to paper-on-ink. On mobile the description wraps to its own line, indented under the name.

### Desktop icons
76px-wide column cells: 32px two-color glyph above a Silkscreen label (0.62rem) sitting on a small paper chip. Hover/selected inverts both — the glyph field goes ink with a paper drawing, and the label chip goes ink with paper text. Icons route to sections or external surfaces (notes).

### Chips & tags
- **Selection chip:** Static inverted span (Silkscreen, 4px 8px) used for the availability status — a permanently "selected" line, as if the user already highlighted it.
- **Meta tag:** Stipple-25 fill + 1px ink border, Geneva 0.82rem, 2px 6px — the dithered "gray" tag for dates and org lines.

### Lists
Square-bullet lists: 6×6px solid-ink markers, 18px indent, 7–9px item spacing. Used for experience bullets and the two-column stack inventory (stack heads are Silkscreen 700 over a 1px rule).

### Focus & selection
- **Marching ants** (8px dashes, 2px wide, `0.8s steps(8)`): the global `:focus-visible` treatment and the navigation flash — jumping to a section rings its window in ants for 1.6s.
- Elements that invert on focus (buttons, file rows, menu items, desktop icons) instead carry a **2px solid outline, 2px offset** (their inversion hides the ants).
- Text selection is inverted: `::selection` is ink on paper, always.

### Boot sequence (signature moment)
On load, three outlined zoom-rects (46/60/74vmin) expand from 25% to full size in stepped frames over ~0.45s, staggered 80ms, then vanish; the identity window is readable by ~0.4s and the overlay is removed from the DOM. Plays once, never again. Under `prefers-reduced-motion` the boot is skipped entirely, ants freeze, and smooth scroll disables.

## Do's and Don'ts

### Do:
- **Do** express every hover, press, selection, and open state as a full ink↔paper inversion — never a tint, fade, or opacity change.
- **Do** keep all chrome at 1px black; the only depth is the 4px (windows) / 3px (popups) hard black offset.
- **Do** reach for the checker or 25% stipple whenever a design wants gray — dither is the middle tone.
- **Do** give the single primary action the double-ring default treatment (1px border + 2px outline, 2px offset).
- **Do** author icons as 1-bit SVGs on a 16×16 grid, `currentColor`, `crispEdges` — and set text, never rasterize it.
- **Do** run all animation in `steps()` and honor `prefers-reduced-motion` (boot off, ants frozen, instant scroll).

### Don't:
- **Don't** introduce a third value: no gray hexes, no `rgba()` blends, no hue, no opacity tricks.
- **Don't** round any corner — radius is 0 on windows, buttons, chips, menus, and tags alike.
- **Don't** add soft, blurred, or layered shadows; the hard offset is the only shadow the desktop knows.
- **Don't** add a dark mode or theme toggle; the one-bit finish is the whole point, and inversion already means selection here.
- **Don't** use eased tween transitions on UI chrome — state changes snap instantly, animation ticks in steps.
- **Don't** substitute emoji, icon fonts, or antialiased SVGs for the authored pixel icon set.
