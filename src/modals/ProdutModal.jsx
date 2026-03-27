import { useState ,useEffect} from "react";
export default function ProductModal({
  product,
  categories,
  onClose,
  onEnquire,
}) {
  const [imgIdx, setImgIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const unitPrice = getPriceForQty(product, qty);
  const cat = categories.find((c) => c.id === product.category_id);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);
  function getPriceForQty(product, qty) {
    const tier =
      [...product.pricing_tiers].reverse().find((t) => qty >= t.min_qty) ||
      product.pricing_tiers[0];
    return tier.unit_price;
  }
  function PricingTable({ tiers, currentQty }) {
    const active =
      [...tiers].reverse().find((t) => currentQty >= t.min_qty) || tiers[0];
    return (
      <>
        <p className="tier-title">Volume Pricing (AUD)</p>
        <table className="tier-table">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>You Save</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((t, i) => {
              const isActive = t === active;
              const save = tiers[0].unit_price - t.unit_price;
              return (
                <tr key={i} className={isActive ? "highlight" : ""}>
                  <td>
                    {t.min_qty}
                    {t.max_qty ? `–${t.max_qty}` : "+"} units
                  </td>
                  <td>${t.unit_price.toFixed(2)}</td>
                  <td>{save > 0 ? `–$${save.toFixed(2)}` : "—"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* Gallery */}
        <div className="modal-gallery">
          <img
            src={product.images[imgIdx]}
            alt={product.name}
            className="modal-main-img"
          />
          {product.images.length > 1 && (
            <div className="modal-thumbs">
              {product.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className={`modal-thumb ${i === imgIdx ? "active" : ""}`}
                  onClick={() => setImgIdx(i)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="modal-info" style={{ position: "relative" }}>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
          <p className="modal-eyebrow">
            {cat?.icon} {cat?.name}
          </p>
          <h2 className="modal-name">{product.name}</h2>
          <p className="modal-desc">{product.description}</p>

          <p className="specs-title">Specifications</p>
          <div className="specs-grid">
            {Object.entries(product.specs).map(([k, v]) => (
              <div key={k} className="spec-item">
                <span className="spec-key">{k.replace(/_/g, " ")}</span>
                <span className="spec-val">{v}</span>
              </div>
            ))}
          </div>

          <PricingTable tiers={product.pricing_tiers} currentQty={qty} />

          <div className="qty-row">
            <div className="qty-control">
              <button
                className="qty-btn"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <input
                className="qty-input"
                type="number"
                min="1"
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, parseInt(e.target.value) || 1))
                }
              />
              <button className="qty-btn" onClick={() => setQty((q) => q + 1)}>
                +
              </button>
            </div>
            <div>
              <p className="unit-price">${unitPrice.toFixed(2)}</p>
              <p className="unit-sub">
                per unit · ${(unitPrice * qty).toFixed(2)} total
              </p>
            </div>
          </div>

          <button
            className="modal-enquire"
            onClick={() => onEnquire(product, qty)}
          >
            Enquire for {qty} unit{qty > 1 ? "s" : ""}
          </button>
        </div>
      </div>
    </div>
  );
}
