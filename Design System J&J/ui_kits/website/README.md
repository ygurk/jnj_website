# J&J Studios — Marketing Website (UI Kit)

The studio's own marketing site, which doubles as the reference pattern for the small-business client sites J&J builds. An interactive, click-through recreation composed entirely from the design-system components.

## Run it
Open `index.html`. It loads the compiled `_ds_bundle.js`, then the page modules via Babel.

## Screens (top nav switches between them)
- **Home** — hero with a mock client-site browser frame + floating result stat, "trusted by" strip, three services, a dark-pine process section, featured + supporting testimonials, FAQ accordion, and a closing CTA band.
- **Our work** — a featured before/after case study and a grid of three case cards, each with an outcome stat.
- **Contact** — the lead form (name, business, email, phone, need, message, consent) with reassurance column and a success state on submit.

## Files
| File | Role |
|------|------|
| `index.html` | Shell — loads bundle + modules, responsive overrides |
| `App.jsx` | Page router (home / work / contact) + scroll reset |
| `Nav.jsx` | Sticky header, desktop + mobile menu |
| `Footer.jsx` | Dark-pine footer |
| `Home.jsx` | Home page + CTA band |
| `Work.jsx` | Case studies + before/after |
| `Contact.jsx` | Lead form + success state |
| `parts.jsx` | Shared: `Section`, `SectionHeading`, `PhotoSlot`, `BrowserFrame`, `Stars` |
| `icons.jsx` | Curated Lucide icon set (`window.JJIcon`) |

## Trust signals built in (per the brand checklist)
Testimonials with names + businesses · before/after case studies with outcomes · the same "Book a free chat" CTA repeated in header, hero, mid-page and footer · plain-language FAQ · clear, human contact with a "reply within a day" promise · real faces ("Jakob & Jakob").

## Components used
`Button`, `Card`, `Badge`, `Testimonial`, `Accordion`, `Input`, `Textarea`, `Select`, `Checkbox` — all from `window.DesignSystemJJ_a7a2a8`.

## Placeholders
Photography is represented by `PhotoSlot` tinted blocks (client storefronts, before/after shots). Swap these for real client photos before any production use.
