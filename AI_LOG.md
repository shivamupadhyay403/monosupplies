# AI Usage Log — Mono Supplies Catalogue

This document records how Claude (via Anthropic's API and claude.ai) was used during development of this project, which parts of the codebase were AI-assisted, and where human judgement overrode or corrected AI output.

---

## Overview

| Area | AI involvement |
|---|---|
| Initial architecture design | High — scaffolded file structure and component split |
| Mock data (products, specs, pricing) | High — generated all 10 products with realistic specs |
| Business logic (`pricing.js`) | Medium — AI drafted, human reviewed bundle logic |
| Component UI code | High — AI generated, human refined |
| CSS / design tokens | Medium — AI generated structure, human tuned aesthetics |
| README and documentation | High — AI drafted, human personalised |
| Supabase SQL schema | High — AI generated from data shape |
| Loom walkthrough script | Low — human-written |

---

## Architecture — How Claude Shaped It

### Initial prompt that defined the structure

> *"Build a working product catalogue page for Mono Supplies with a smart product recommender quiz... Products and categories must be stored in and fetched from Supabase. Build a short interactive quiz that recommends a product bundle. Show a pricing tier table that adjusts unit price based on quantity."*

Claude's first response was a single 840-line `.jsx` file. It worked, but was not maintainable. The immediate follow-up prompt was:

> *"Can you break this into smaller parts so that code is clean."*

This produced the current 15-file structure. The key architectural decisions that came out of that refactor:

1. **`lib/supabase.js` as the single swap point** — Claude correctly identified that isolating the Supabase client meant no component needed to change when moving from mock to production data. This was kept exactly as generated.

2. **`lib/pricing.js` as pure functions** — Claude separated `getPriceForQty()` and `recommendBundle()` from React entirely, making them testable in isolation. This was a good call that was kept without changes.

3. **`data/mockData.js` as a standalone module** — Rather than co-locating seed data inside the Supabase shim, Claude suggested a separate data file. This was accepted — it makes the seed data independently readable and exportable to a seed script.

---

## Key Prompts and What They Produced

### Prompt 1 — Initial build
```
Build a working product catalogue page for Mono Supplies with a smart 
product recommender quiz. [full brief]
```
**Output:** Single-file working prototype. Correct logic, poor separation of concerns. Used as a functional baseline, then immediately refactored.

---

### Prompt 2 — Component split
```
Can you break this into smaller parts so that code is clean.
```
**Output:** 15-file structure across `data/`, `lib/`, `components/ui/`, `components/catalogue/`, `components/quiz/`. The split was correct first try — no restructuring was needed after.

---

### Prompt 3 — Live preview
```
Continue
```
**Output:** Self-contained interactive HTML/JS widget replicating the full app for in-chat preview. This was used purely for demonstration — the component files are the production artefact.

---

## What Was Hand-Written or Manually Corrected

### 1. Bundle recommendation logic — partially overridden

Claude's initial `recommendBundle()` used a scoring system that accumulated points from all three answers. This produced edge cases — a "resort" answering "budget" stars would score into `midrange` rather than resolving clearly.

**Override:** Replaced with explicit conditional priority — `stars === "budget"` wins first, then `stars === "premium" || property === "resort"`, then default to `midrange`. Simpler, auditable, no edge cases.

```js
// AI version (removed)
let score = 0;
if (answers.stars === "premium") score += 2;
if (answers.property === "resort") score += 1;
if (answers.rooms === "200+") score += 1;
return score >= 2 ? BUNDLES.premium : score === 1 ? BUNDLES.midrange : BUNDLES.budget;

// Hand-corrected version
export function recommendBundle(answers) {
  const { property, stars } = answers;
  if (stars === "budget") return BUNDLES.budget;
  if (stars === "premium" || property === "resort") return BUNDLES.premium;
  return BUNDLES.midrange;
}
```

### 2. `getPriceForQty()` — minor correction

Claude's first version iterated forward through tiers and returned on the first match, which broke when qty was above all tier minimums:

```js
// AI version (buggy for high qty)
const tier = product.pricing_tiers.find(t => qty <= t.max_qty);

// Corrected to iterate reversed and find last matching minimum
const tier = [...product.pricing_tiers].reverse().find(t => qty >= t.min_qty);
```

This was caught during manual testing with qty = 500 on a product whose highest tier started at 201.

### 3. CSS design tokens — colour palette adjusted

Claude's default colour palette used a purple/white scheme. This was fully replaced with the warm neutral palette (`#F7F5F2` background, `#1A1714` dark, `#C8A96E` gold accent) to match Mono Supplies' hospitality brand positioning. The token names were kept, values were replaced.

### 4. Modal on mobile — layout fix

Claude generated a two-column modal grid that did not collapse on small screens. Added manually:

```css
@media (max-width: 768px) {
  .modal               { grid-template-columns: 1fr; }
  .modal-gallery       { height: 280px; position: static; }
}
```

### 5. Product image data

Claude generated placeholder Unsplash URLs that were checked manually. Two URLs returned 404s at review time and were replaced with working alternatives.

---

## What Claude Got Right Without Correction

- File structure and separation of concerns after the refactor prompt
- Supabase schema SQL (tables, RLS policies, jsonb column types)
- `PricingTable` component logic — tier highlighting, savings calculation
- `QuizPanel` state machine — step navigation, back/forward, result transition
- Skeleton loading implementation
- Keyboard accessibility on the modal (`Escape` to close)
- README structure and Vercel deployment instructions

---

## Reflection on AI-Assisted Development

**Where it added the most value:** Generating boilerplate quickly — the 10 products with realistic specs, certifications, and pricing tiers would have taken significant time to write by hand. Claude produced credible, consistent data in one pass.

**Where it required the most oversight:** Conditional logic and edge cases. The recommendation scoring system and the pricing tier lookup both had subtle bugs that only surfaced through manual testing. AI-generated logic should always be tested against boundary values.

**What it cannot replace:** Product design decisions — which components to split, what the colour palette should feel like, what the right UX flow is for the quiz. These were directed by the developer; Claude executed them.

---

## Tools Used

| Tool | Usage |
|---|---|
| **Claude (claude.ai)** | Primary development — architecture, components, data, documentation |
| **Cursor** | In-editor completions and inline refactoring |
| **Vercel** | Deployment |
| **Supabase** | Database and auth layer |
