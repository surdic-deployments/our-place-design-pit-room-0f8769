---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Home page surface brief

Scope: `/` (home page only). Visitor mode: Persuade. Audience: local diners and visitors in Fürth/Nürnberg. German-first copy. Fourth visual world on this project, on its own branch (`design/pit-room`), branched from `main` (Sign Painter's Board, kept intact).

## Why this branch exists

The user explicitly rejected the modern-luxury/cinematic direction (`design/modern-luxury`) as hollow: "you really didn't make the luxury one as expected so it killed my idea... its an american restaurant." The diagnosis: an abstract, minimal, single-accent dark palette with no real material or specificity behind it reads as empty rather than premium when there's no real photography to carry it. This build corrects that by leaning into authored specificity — real illustrated content — instead of restraint, and grounding the identity explicitly in American BBQ-joint material culture rather than European luxury minimalism.

The user handed direction fully to the builder ("Just cook something together... I have no idea what to choose"), so this brief records a builder-committed direction, not a user-selected one from a roll — no concept-seed tournament was run for this round; the choice was made directly in response to the explicit "it's an American restaurant" correction and the specific complaint about hollowness.

## Direction contract

THESIS: "The Pit Room" — a lived-in American barbecue-and-bar identity built from real smokehouse material culture (kraft paper, seasoned wood, torn butcher-paper edges) and carried by authored woodcut-style line illustrations of the actual food, not abstract gradients or restraint. Answers the "hollow/empty" complaint by putting real, specific, hand-drawn content in every section rather than negative space and motion alone.

OWN-WORLD: Full-palette strategy on a warm kraft-paper ground (`--kraft-50` background, `--kraft-200` card surfaces) — ember-red (`--ember-500`, fire/primary CTA), mustard (`--mustard-400`, secondary accent/condiment color), muted pine-green (`--pine-600`, sparing gingham/accent stripe), deep seasoned-wood ink (`--char-900`) for text and dark sections. Display face: Alfa Slab One (bold American roadhouse slab, distinct from the sign-painter world's Rye and the retired industrial world's stencil face). Body/UI: Libre Franklin. Torn-paper zigzag edges as a section-transition motif (a genuine butcher-paper tear, not a generic wave divider). Procedural kraft-paper grain texture (same feTurbulence technique used on every prior build, retuned warm/brown).

STORY: A visitor sees real, specific, hand-illustrated food (not an abstract mood) and immediately reads "real American smokehouse, run by people who care" — then books via one unmistakable, tactile ember-red button. The historic-Fürth-Fachwerkhaus fact stays true but is not the visual headline this round; the BBQ-joint material culture is.

FIRST VIEWPORT: Full-bleed kraft-paper hero. Bold slab H1. A hand-drawn smoke/ember illustration motif behind or beside the headline (authored SVG line art, not a photo-shaped placeholder). One solid ember-red CTA button with a thick offset "pressed board" shadow (tactile, diner-esque — not a ribbon banner, not a gold-outline pill; both of those devices belong to the other two shipped worlds).

FORM: Builder-committed direction (no concept-seed roll this round — the user explicitly delegated the choice and corrected the brief toward "American restaurant" away from the retired luxury-minimal register). Named "The Pit Room." Code-led build: no image generation tool is available in this environment (true for every build in this project's history, stated explicitly on each prior branch's surface brief) — `.impeccable/config.json` still records `buildPath: "comp"` as the project's standing preference, but per the skill's own rule that preference has no effect without an image-generation tool, so no comp round ran and no `.impeccable/build/` state exists. This is an environment condition, not a per-branch choice, and is the same condition every other branch in this project was built under.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and every shipping raster/illustration carrying its provenance (each authored SVG illustration is original line art created for this build, not sourced). DESIGN.md stays untouched on this branch — it documents `main`'s Sign Painter's Board system, and `design/modern-luxury` has its own unrelated system; this branch does not touch either.

## Signature illustrations (the core fix for "hollow")

Authored, single/two-tone woodcut-style line illustrations, hand-coded as inline SVG (no external assets, no AI-generated imagery):
- A rack of ribs (Baby Back Rib Platter)
- A burger, cross-section style (Smokehouse Burger)
- A tomahawk steak (Dry-Aged Tomahawk)
- A smoker/pit silhouette motif for the hero
- A simple location-pin/roadside-sign illustration for the Visit section (replacing both the retired compass dial and the sign-painter world's signpost arrow with a distinct device)

## Motion (moderate — avoid both extremes already tried)

Not the elaborate cinematic layer of `design/modern-luxury` (grain, letterbox, spotlight-isolate — that read as gimmicky over an empty page) and not fully static either. Real, restrained, tied to the illustrations specifically: each line illustration draws itself on with a stroke-dasharray reveal as it scrolls into view (a genuine, characterful technique for line art, not a generic fade). Sections otherwise settle with a simple fade-up. The primary CTA lifts on hover and presses down on `:active` via a real blurred drop-shadow that grows/shrinks with the interaction — not a flat, zero-blur offset block masquerading as material (an earlier pass used exactly that banned pattern; fixed after review to a soft, blurred depth treatment that still gives genuine tactile press feedback). Respects `prefers-reduced-motion` throughout; no booking/scroll action ever depends on animation completing.

## Open decisions / TODOs

- Real Resmio reservation (and takeaway) URL — placeholder href + visible pending state until supplied.
- Final approved German copy/tagline (using "Rauch. Ribs. Gute Abende." as working headline, flagged as proposed not final, consistent with every prior build).
- Real photography — authored line illustrations stand in deliberately, not a placeholder to be swapped later necessarily; if real photography arrives, that's a future decision, not an assumption baked into this build.
- Hours conflict across listings — shown with a "Stand: [date]" (last updated) label, not a live open/closed indicator.
