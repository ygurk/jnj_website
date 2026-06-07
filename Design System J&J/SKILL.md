---
name: jj-studios-design
description: Use this skill to generate well-branded interfaces and assets for J&J Studios (a two-person web studio for small businesses), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (tokens, components, ui_kits, assets, guidelines).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## The brand in one breath
J&J Studios — Jakob & Jakob. Warm, conversational, plain-language. Make a non-technical small-business owner feel *"these two know what they're doing and won't talk down to me."* Competent + trustworthy + approachable.

## Non-negotiables
- **Color:** deep pine green (#1F4D3D) anchors; interactive green (#2E6B52); **gold (#E7B24C) only for the single hero CTA + highlights**; cream paper (#F6F4EE), white cards. Warm green-tinted neutrals & shadows, never gray/black.
- **Type:** Newsreader serif for display/H1/H2 (weight 500, tight tracking); Figtree sans for H3/H4/body/UI. Sentence case everywhere; ALL CAPS only for tiny tracked eyebrows.
- **Copy:** you/we, no jargon, no emoji, short human sentences, modest concrete proof, reassurance baked in. CTA is "Book a free chat."
- **Layout:** generous white space, 1180px max, mobile-first, ≥44px targets. Alternating section surfaces (cream → white → dark pine) for rhythm — no gradients on text, no busy backgrounds.
- **Icons:** Lucide outline, ~1.9 stroke, used sparingly to support text.
- **Trust signals first:** testimonials w/ names+businesses, before/after case studies w/ outcomes, repeated CTA, plain FAQ, human contact ("reply within a day"), real faces.

## How to build
- Link `styles.css`; build against semantic tokens (`--text-body`, `--surface-card`, `--accent`).
- For React, load `_ds_bundle.js` and read components from `window.DesignSystemJJ_a7a2a8` (Button, Badge, Card, Avatar, Input, Textarea, Select, Checkbox, Testimonial, Accordion).
- Logos are in `assets/`. The golden rule: warm words + serif headlines + generous space + one gold CTA.
