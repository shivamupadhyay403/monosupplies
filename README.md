# Mono Supplies — Hotel Room Equipment Catalogue

A responsive product catalogue and smart recommender platform built for Mono Supplies. Displays hotel room equipment with category filtering, volume pricing tiers, and an AI-guided product bundle quiz.

---

## Live Demo

**[→ View on Vercel](https://monosupplies.vercel.app/)**

---

## Features

| Area                 | What's built                                                           |
| -------------------- | ---------------------------------------------------------------------- |
| **Catalogue**        | Responsive grid/list view, category filters, skeleton loading states   |
| **Product Detail**   | Modal with multi-image gallery, full specs, quantity selector          |
| **Volume Pricing**   | Tier table that highlights the active tier live as quantity changes    |
| **Recommender Quiz** | 3-step quiz outputting a tailored product bundle with indicative total |
| **Supabase-ready**   | All data fetching abstracted behind a single swappable client file     |

---

## Tech Stack

- **React 18** (Vite)
- **Supabase** (data layer — mock shim included for local dev)
- **DM Sans + Cormorant Garamond** (Google Fonts)
- No component library — all UI is custom

---

## Project Structure

```
src/
├── App.jsx                              # Root: data fetching + layout only
├── styles/
│   └── global.js                       # CSS tokens, reset, shared animations
├── data/
│   └── mockData.js                      # Seed data (categories + products)
├── lib/
│   ├── supabase.js                      # Supabase client (swap mock → real here)
│
└── components/
    ├── ui/
    │   ├── Hero.jsx                     # Page header banner
    │   ├── Navbar.jsx                      # Sticky top navigation bar
    │   ├── Navbar.css                     # Sticky top navigation bar css
    │   ├── AllCategories.jsx             # All Categories
    │
    └── modals/
        ├── ProductModal.jsx                # Product Modal + styles
        ├── QuizStep.jsx                 # Single question screen
        └── QuizPanel.jsx              # Bundle recommendation output
```

---

## Local Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mono-supplies.git
cd mono-supplies
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Copy the example env file:

```bash
cp .env.example .env.local
```

The app runs with **mock data by default** — no Supabase credentials needed for local development. If you want to connect a real Supabase project, fill in:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Connecting to Supabase

All data fetching is isolated in `src/lib/supabase.js`. To switch from mock data to a real Supabase project:

**1. Install the client**

```bash
npm install @supabase/supabase-js
```

**2. Replace the shim in `src/lib/supabase.js`**

```js
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);
```

**3. Create the database tables**

Run the following SQL in your Supabase SQL editor:

```sql
-- Categories
create table categories (
  id bigint primary key generated always as identity,
  name text not null,
  slug text not null unique,
  icon text
);

-- Products
create table products (
  id bigint primary key generated always as identity,
  category_id bigint references categories(id),
  name text not null,
  slug text not null unique,
  short_description text,
  description text,
  images jsonb default '[]',
  specs jsonb default '{}',
  pricing_tiers jsonb default '[]',
  base_price numeric not null,
  tags jsonb default '[]',
  star_min int default 3,
  created_at timestamptz default now()
);

-- Enable RLS and add a public read policy
alter table categories enable row level security;
alter table products enable row level security;

create policy "Public read" on categories for select using (true);
create policy "Public read" on products for select using (true);
```

**4. Seed data**

Seed values are in `src/data/mockData.js` — copy the product/category objects into your Supabase table rows, or write a seed script using the Supabase client.

---

## Deploying to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Add your environment variables when asked.

### Option B — Vercel Dashboard

1. Push the repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Add environment variables under **Settings → Environment Variables**
4. Deploy

**Build settings** (Vercel auto-detects these for Vite):

| Setting          | Value           |
| ---------------- | --------------- |
| Framework        | Vite            |
| Build command    | `npm run build` |
| Output directory | `dist`          |

---

## Scripts

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # ESLint
```

---

## Key Architecture Decisions

**Single Supabase swap point** — `src/lib/supabase.js` is the only file that needs to change when going from mock to production data. No components import from `mockData.js` directly.

**Business logic in `lib/`** — `getPriceForQty()` and `recommendBundle()` are pure functions with no React dependency. They can be unit tested or reused in a backend context without modification.

**Component-scoped styles** — Each component owns its CSS as a template literal injected via `<style>`. This keeps styles co-located with the component they belong to and avoids build tooling dependencies (no CSS modules or Tailwind required).

**`App.jsx` as thin orchestrator** — The root component handles data fetching and top-level state only. It does not contain any UI logic or markup beyond layout composition.

---

## What I'd Add Given More Time

- **Search** — full-text product search with debounce
- **Enquiry cart** — accumulate items, submit as a single quote request
- **Supabase Auth** — trade/wholesale login with saved quotes
- **Admin panel** — CRUD for products and pricing tiers via Supabase dashboard
- **Unit tests** — Jest tests for `getPriceForQty()` and `recommendBundle()`
- **Image optimisation** — Supabase Storage with responsive srcsets

---

## Contact

Built by [Your Name]. Questions? [your@email.com](mailto:your@email.com)
