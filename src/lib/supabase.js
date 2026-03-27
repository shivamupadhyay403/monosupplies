// ─────────────────────────────────────────────
// SUPABASE CLIENT
//
// To connect to real Supabase:
//   1. npm install @supabase/supabase-js
//   2. Replace the shim below with:
//        import { createClient } from '@supabase/supabase-js'
//        export const supabase = createClient(
//          import.meta.env.VITE_SUPABASE_URL,
//          import.meta.env.VITE_SUPABASE_ANON_KEY
//        )
//
// DB schema required:
//   categories  — id, name, slug, icon
//   products    — id, category_id, name, slug, short_description,
//                 description, images (jsonb), specs (jsonb),
//                 pricing_tiers (jsonb), base_price, tags (jsonb), star_min
// ─────────────────────────────────────────────

import { MOCK_CATEGORIES, MOCK_PRODUCTS } from "../data/mockData";

export const supabase = {
  from: (table) => ({
    select: () => ({
      order: () =>
        Promise.resolve(
          table === "categories"
            ? { data: MOCK_CATEGORIES, error: null }
            : { data: MOCK_PRODUCTS,   error: null }
        ),
    }),
  }),
};