import { useState } from "react";
import { QUIZ_STEPS } from "@/data/mockData";
export default function QuizPanel({ products, onClose }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const current = QUIZ_STEPS[step];

  function selectOption(val) {
    setAnswers((a) => ({ ...a, [current.key]: val }));
  }

  function next() {
    if (step < QUIZ_STEPS.length - 1) {
      setStep((s) => s + 1);
    } else {
      const bundle = recommendBundle(answers);
      const bundleProducts = bundle.product_ids
        .map((id) => products.find((p) => p.id === id))
        .filter(Boolean);
      setResult({ ...bundle, products: bundleProducts });
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setResult(null);
  }

  const qty = result
    ? { "1-10": 5, "11-50": 25, "51-200": 100, "200+": 300 }[answers.rooms] || 5
    : 0;
  const total = result
    ? result.products.reduce((sum, p) => sum + getPriceForQty(p, qty) * qty, 0)
    : 0;
  function recommendBundle(answers) {
    const { property, rooms, stars } = answers;
    const qty =
      { "1-10": 5, "11-50": 25, "51-200": 100, "200+": 300 }[rooms] || 5;

    let tier = "midrange";
    if (stars === "budget") tier = "budget";
    else if (stars === "premium") tier = "premium";
    else if (property === "resort" && stars !== "budget") tier = "premium";

    return { ...BUNDLES[tier], qty };
  }
  function getPriceForQty(product, qty) {
    const tier =
      [...product.pricing_tiers].reverse().find((t) => qty >= t.min_qty) ||
      product.pricing_tiers[0];
    return tier.unit_price;
  }
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="quiz-panel" onClick={(e) => e.stopPropagation()}>
        {!result ? (
          <>
            <div className="quiz-header">
              <p className="quiz-eyebrow">Smart Recommender</p>
              <h2 className="quiz-title">Find your perfect room kit</h2>
              <div className="quiz-progress">
                <div
                  className="quiz-progress-fill"
                  style={{
                    width: `${((step + 1) / QUIZ_STEPS.length) * 100}%`,
                  }}
                />
              </div>
            </div>
            <div className="quiz-body">
              <p className="quiz-q">
                {step + 1}. {current.question}
              </p>
              <div className="quiz-options">
                {current.options.map((opt) => (
                  <button
                    key={opt.value}
                    className={`quiz-option ${answers[current.key] === opt.value ? "selected" : ""}`}
                    onClick={() => selectOption(opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <div className="quiz-nav">
                <button
                  className="quiz-back"
                  onClick={() => (step > 0 ? setStep((s) => s - 1) : onClose())}
                >
                  {step > 0 ? "← Back" : "Cancel"}
                </button>
                <button
                  className="quiz-next"
                  disabled={!answers[current.key]}
                  onClick={next}
                >
                  {step < QUIZ_STEPS.length - 1
                    ? "Next →"
                    : "See Recommendation"}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="quiz-body" style={{ padding: "36px" }}>
            <span className="result-badge">Recommended Bundle</span>
            <h2 className="result-title">{result.label}</h2>
            <p className="result-sub">
              {result.subtitle} · Based on {qty} rooms
            </p>
            <div className="result-items">
              {result.products.map((p) => (
                <div key={p.id} className="result-item">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="result-item-img"
                  />
                  <div>
                    <p className="result-item-name">{p.name}</p>
                    <p className="result-item-price">
                      ${getPriceForQty(p, qty).toFixed(2)} / unit × {qty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="result-total">
              <div>
                <p className="result-total-label">Indicative Total</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
                  For all {qty} rooms
                </p>
              </div>
              <div>
                <p className="result-total-price">
                  ${total.toLocaleString("en-AU", { minimumFractionDigits: 2 })}
                </p>
                <p className="result-total-sub">AUD incl. volume pricing</p>
              </div>
            </div>
            <div className="result-actions">
              <button
                className="result-btn result-btn-primary"
                onClick={() =>
                  alert(
                    "Enquiry submitted! Our team will be in touch within 24 hours.",
                  )
                }
              >
                Request Quote
              </button>
              <button
                className="result-btn result-btn-secondary"
                onClick={reset}
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
