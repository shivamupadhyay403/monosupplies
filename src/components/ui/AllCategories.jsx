import { useState,useEffect } from "react";
import { supabase } from "@/lib/supabase";
const AllCategories = ({setSelectedProduct}) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [activeCat, setActiveCat] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  useEffect(() => {
    load();
  }, []);

  async function load() {
    const [catRes, prodRes] = await Promise.all([
      supabase.from("categories").select().order(),
      supabase.from("products").select().order(),
    ]);
    setCategories(catRes.data || []);
    setProducts(prodRes.data || []);
    setLoading(false);
  }
  const filtered = activeCat
    ? products.filter((p) => p.category_id === activeCat)
    : products;
  return (
    <main className="page-body">
      <div className="toolbar">
        <div className="cat-filters">
          <button
            className={`cat-pill ${activeCat === null ? "active" : ""}`}
            onClick={() => setActiveCat(null)}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-pill ${activeCat === cat.id ? "active" : ""}`}
              onClick={() => setActiveCat(activeCat === cat.id ? null : cat.id)}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
        <div className="view-toggle">
          <button
            className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
            title="Grid"
          >
            ⊞
          </button>
          <button
            className={`view-btn ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
            title="List"
          >
            ☰
          </button>
        </div>
      </div>

      {loading ? (
        <div className="product-grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card" style={{ cursor: "default" }}>
              <div
                className="skeleton"
                style={{ width: "100%", aspectRatio: "4/3" }}
              />
              <div
                style={{
                  padding: "16px 18px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div
                  className="skeleton"
                  style={{ height: 12, width: "50%" }}
                />
                <div
                  className="skeleton"
                  style={{ height: 18, width: "85%" }}
                />
                <div
                  className="skeleton"
                  style={{ height: 12, width: "100%" }}
                />
                <div
                  className="skeleton"
                  style={{ height: 12, width: "70%" }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="empty">
          <div className="empty-icon">📦</div>
          <p className="empty-text">No products found</p>
          <p>Try a different category filter.</p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="product-grid">
          {filtered.map((p) => {
            const cat = categories.find((c) => c.id === p.category_id);
            return (
              <div
                key={p.id}
                className="card"
                onClick={() => setSelectedProduct(p)}
              >
                <div className="card-img-wrap">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="card-img"
                    loading="lazy"
                  />
                </div>
                <div className="card-body">
                  <p className="card-cat">
                    {cat?.icon} {cat?.name}
                  </p>
                  <h3 className="card-name">{p.name}</h3>
                  <p className="card-desc">{p.short_description}</p>
                  <div className="card-footer">
                    <div>
                      <p className="card-price">
                        from ${p.base_price.toFixed(2)} <span>/ unit</span>
                      </p>
                    </div>
                    <span className="card-cta">View →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="product-list">
          {filtered.map((p) => {
            const cat = categories.find((c) => c.id === p.category_id);
            return (
              <div
                key={p.id}
                className="card list-card"
                onClick={() => setSelectedProduct(p)}
              >
                <div className="card-img-wrap">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="card-img"
                    loading="lazy"
                  />
                </div>
                <div className="card-body">
                  <p className="card-cat">
                    {cat?.icon} {cat?.name}
                  </p>
                  <h3 className="card-name">{p.name}</h3>
                  <p className="card-desc">{p.short_description}</p>
                  <div className="card-footer">
                    <p className="card-price">
                      from ${p.base_price.toFixed(2)} <span>/ unit</span>
                    </p>
                    <span className="card-cta">View details →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default AllCategories;
