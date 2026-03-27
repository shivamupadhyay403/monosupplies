import { useState, useEffect } from "react";
import { stylesGlobal } from "./styles/globals";
import Hero from "./components/ui/Hero";
import AllCategories from "./components/ui/AllCategories";
import { supabase } from "./lib/supabase";
import QuizPanel from "./modals/QuizPanel";
import ProductModal from "./modals/ProdutModal";
import Navbar from "./components/ui/Navbar";
/* ─────────────────────────────────────────────
   SUPABASE MOCK
   In production replace `supabase` calls below
   with: import { createClient } from '@supabase/supabase-js'
         const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
   ───────────────────────────────────────────── */

/* ── Supabase-shaped API shim (replace with real client) ── */

/* ─────────────── QUIZ LOGIC ─────────────── */

/* ─────────────── STYLES ─────────────── */

/* ─────────────── QUIZ QUESTIONS ─────────────── */

/* ─────────────── COMPONENTS ─────────────── */

/* ─────────────── MAIN APP ─────────────── */
export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    async function load() {
      const [catRes, prodRes] = await Promise.all([
        supabase.from("categories").select().order(),
        supabase.from("products").select().order(),
      ]);
      setCategories(catRes.data || []);
      setProducts(prodRes.data || []);
    }
    load();
  }, []);

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  function handleEnquire(product, qty) {
    setSelectedProduct(null);
    showToast(`Enquiry added: ${qty}× ${product.name}`);
  }

  return (
    <>
      <style>{stylesGlobal}</style>

      {/* NAV */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* BODY */}
      <AllCategories setSelectedProduct={setSelectedProduct} />

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          categories={categories}
          onClose={() => setSelectedProduct(null)}
          onEnquire={handleEnquire}
        />
      )}
      {/* QUIZ */}
      {showQuiz && (
        <QuizPanel products={products} onClose={() => setShowQuiz(false)} />
      )}

      {/* TOAST */}
      {toast && <div className="toast">✓ {toast}</div>}
    </>
  );
}
