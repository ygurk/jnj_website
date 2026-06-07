# J&J Studios — Design System

The brand and design system for **J&J Studios**, a two-person web design & development studio (Jakob & Jakob) that builds and improves websites for small businesses.

> **One-line promise:** In the first five seconds, a small-business owner should feel *"these two clearly know what they're doing, and they won't talk down to me or overcomplicate things."* Competent and trustworthy, but warm and approachable — never corporate or intimidating.

This project is the single source of truth for that brand: design tokens, the logo, foundation specimens, reusable React components, and a full marketing-website UI kit. An automated compiler reads it and ships a runtime bundle (`_ds_bundle.js`) + token index to consuming projects.

---

## The audience we design for
- **Primary clients:** local service businesses — contractors, salons, restaurants, clinics — and solo / early-stage founders who need a credible web presence on a limited budget.
- **They are often not technical** and may feel intimidated by "web stuff." They choose us on *vibes and trust signals* because they can't evaluate our code. Every design decision here is in service of looking **competent + trustworthy + approachable** at a glance.

## Sources & decisions
- Brand built from scratch (no prior assets). Direction chosen by the founders from `Brand Exploration.html` (Round 1 options doc, kept in the project root for reference):
  - **Name:** J&J Studios (Jakob & Jakob)
  - **Color:** "Confident Green" — deep pine + warm gold on cream
  - **Type:** Newsreader (serif headlines) + Figtree (sans body)
  - **Logo:** lettermark badge — "J&J" with a gold ampersand in a rounded pine badge
- **Fonts** are loaded from Google Fonts CDN (free, fast, render everywhere). To self-host, drop the woff2 files in `assets/fonts/` and swap the `@import` in `tokens/fonts.css` for local `@font-face` rules — nothing else changes.

---

## CONTENT FUNDAMENTALS — how we write

The voice is the other half of the brand. Get this wrong and the warmest palette still feels like a vendor.

**Tone:** warm and conversational — *like a knowledgeable friend, not a vendor.* Confident without ever being slick or salesy.

**Person:** "**you / we**." Always. "We build websites *you're* proud of." Never third-person ("the agency", "clients receive").

**Plain language, always.** No jargon. We actively name and dissolve the fear of jargon ("No jargon, no surprises"). If a sentence needs a web term, we explain it in the same breath.

**Casing:** Sentence case everywhere — headlines, buttons, nav. No Title Case, no ALL CAPS except the tiny tracked eyebrow labels (`.jj-eyebrow`).

**Sentence rhythm:** short, human sentences. Fragments are fine for warmth ("No pressure, ever."). Em dashes for the friendly aside.

**Reassurance is a content pattern.** We pre-empt the quiet fears in the copy itself: *"You don't need to know anything technical — that's our job," "Who owns the site? You do, completely," "We don't disappear after launch."*

**Specific, modest proof over hype.** "New-patient enquiries doubled in the first month" beats "We deliver world-class digital experiences." Numbers are concrete and believable, never inflated.

**No emoji.** The warmth comes from words, type, and color — not emoji. (Icons are outline line-icons, used sparingly.)

**Examples of the voice:**
- Hero: *"A website that quietly earns its keep."*
- Sub: *"We're Jakob & Jakob — two people who build fast, friendly websites for small businesses. The kind that turn a curious visitor into a phone call."*
- CTA: *"Book a free chat"* (not "Get Started", not "Request a Consultation")
- FAQ answer: *"Not even slightly — most of our clients aren't. We handle the technical side and explain everything in plain language."*
- Microcopy: *"We'll only use your details to reply. Never shared, never sold."*

---

## VISUAL FOUNDATIONS

**Overall feel:** calm, crafted, warm-premium. Editorial serif headlines over a cream page, with deep-pine structure and a single warm-gold accent that means "do this." Generous white space is itself a trust signal — when in doubt, give it more room.

**Color**
- **Deep pine green (`--green-800` #1F4D3D)** is the brand anchor — headings on light, and large dark surfaces (process section, footer, CTA band). Pine carries growth + stability without shouting.
- **Interactive green (`--green-600` #2E6B52)** for links and the default `primary` button.
- **Warm gold (`--accent` #E7B24C)** is *reserved for the single hero call-to-action and small highlights.* Never body text, never more than one accent button visible at once. This scarcity is what makes CTAs pop.
- **Cream paper (`--paper` #F6F4EE)** is the page; white (`--surface-card`) is for raised cards. Neutrals are warm and green-tinted, never cold gray.
- **Status hues** are tuned warm (clay-red danger ties back to the palette).
- All primaries pass WCAG AA for text on their light backgrounds; gold is for fills, paired with `--green-900` text.

**Type**
- **Newsreader** (serif), weight 500, tight tracking (−0.02em), line-height ~1.05 — display, H1, H2 and pull-quotes. This is the "established, knows-their-craft" signal. Italic is used for the warm emphasis word in a headline ("earns *its keep*").
- **Figtree** (sans) — H3/H4 (600), body (400, 17px/1.6), and all UI. Clean and modern, keeps it from feeling old-fashioned.
- Eyebrows: 12px, 700, uppercase, 0.12em tracking, in interactive green.

**Spacing & layout:** 4px base grid. Content max-width 1180px; prose/forms 720px. Section vertical rhythm `--section-y` (96px desktop). Mobile-first; everything collapses to a single column at ≤920px. Touch targets ≥44px.

**Backgrounds:** mostly flat cream and white. Depth comes from **alternating section surfaces** — cream → white → dark pine → cream — not from gradients on text. The only gradients are the subtle ones inside `PhotoSlot` image placeholders. No textures, no patterns, no busy hero backgrounds.

**Cards:** white surface, 14px radius (`--radius-lg`), 1px `--border-default` hairline, soft shadow (`--shadow-sm`). Interactive cards lift 3px with `--shadow-lg` on hover. A `brand` tone (dark pine) and `soft`/`cream` tones exist for variety.

**Corner radii:** rounded but not bubbly — 10px inputs/buttons, 14px cards, 20–28px hero panels & the logo badge, pill for badges/CTAs-in-pills.

**Shadows:** always **warm, green-tinted** (`rgba(20,53,42,…)`), low spread, never gray/black. Five steps xs→xl; cards use sm/md, popovers lg, modals xl.

**Borders:** 1px hairlines in warm neutrals. Focus state is a 3px green focus ring (`--ring`), never a browser-blue outline.

**Animation:** restrained and quick. 0.15s ease on hover color/background; 0.2s on card lift and accordion open; buttons translateY(1px) on press. No bounces, no parallax, no infinite/decorative loops. Motion should feel calm and intentional.

**Hover states:** buttons darken (accent→`--accent-hover`, primary→`--green-900`), secondary fills to `--surface-sunken`, ghost fills to `--green-50`. Links shift to `--green-800`. Cards lift.

**Press states:** subtle 1px downward nudge on buttons. No aggressive shrink.

**Imagery:** warm, natural, real — local storefronts, the two founders, before/after screenshots. No cold stock, no neon, no heavy filters. Represented in this system by `PhotoSlot` tinted placeholders until real photos are supplied.

**Transparency / blur:** used only on the sticky nav (cream at 88% opacity + backdrop blur) so content scrolls softly underneath. Sparingly elsewhere.

---

## ICONOGRAPHY

- **Set:** [Lucide](https://lucide.dev) — outline icons, 24px grid, rounded caps/joins. A curated subset is inlined in `ui_kits/website/icons.jsx` (so they inherit `currentColor`) and exposed as `window.JJIcon`. Lucide is ISC-licensed / free.
- **Style rules:** stroke weight ~1.9, never filled except the rating **star** (filled gold). Icons sit in soft `--green-50` rounded tiles (44–52px) when used as feature/marker bullets, or inline at 16–22px next to text.
- **Usage:** sparingly and functionally — service markers, reassurance bullets, CTA arrows, contact details, result stats. Icons support text; they never replace it.
- **No emoji.** No multicolor or 3D icon styles.
- **To add an icon:** copy its path data from lucide.dev into `JJ_ICON_PATHS` in `icons.jsx`. Don't hand-draw new glyphs.
- **Logo** lives in `assets/` as SVG (badge / horizontal / wordmark). The badge is the favicon and social avatar; pine fill, white initials, gold ampersand.

---

## INDEX — what's in this project

**Root**
- `styles.css` — global entry point (import this; it's `@import` lines only)
- `readme.md` — this guide
- `SKILL.md` — Agent-Skills-compatible entry for downloading & reusing
- `Brand Exploration.html` — the Round 1 options doc the direction was chosen from

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `base.css` (reset + helper classes)

**`assets/`** — `logo-badge.svg`, `logo-horizontal.svg`, `logo-wordmark.svg`

**`guidelines/`** — foundation specimen cards (Design System tab): colors (pine, gold, neutral, status), type (serif, sans, scale), spacing, radii, elevation, logo

**`components/`** — reusable React primitives (`window.DesignSystemJJ_a7a2a8`):
- `core/` — **Button**, **Badge**, **Card**, **Avatar**
- `forms/` — **Input**, **Textarea**, **Select**, **Checkbox**
- `content/` — **Testimonial**, **Accordion** (the trust-signal blocks)

Each has `<Name>.jsx`, `<Name>.d.ts` (props), `<Name>.prompt.md` (how/when), and a per-directory `@dsCard` HTML demo.

**`ui_kits/website/`** — the J&J Studios marketing site: interactive Home / Our work / Contact, composed from the components. See its `README.md`.

**Starting points** (for consuming projects): Button, Card, Input, Testimonial (components) — and the website screens are previewable from the Website group.

---

## Using the system
- **Consumers:** link `styles.css`, read components from `window.DesignSystemJJ_a7a2a8` after loading `_ds_bundle.js`.
- **Build against semantic tokens** (`--text-body`, `--surface-card`, `--accent`), not raw palette values, so a future re-theme is one edit.
- **The golden rule:** warm words + serif headlines + generous space + one gold CTA. That combination is the brand.
