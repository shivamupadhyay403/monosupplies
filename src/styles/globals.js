export const stylesGlobal = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #F7F5F2;
    --surface: #FFFFFF;
    --border: #E8E4DE;
    --text: #1A1714;
    --muted: #6B6460;
    --accent: #C8A96E;
    --accent-dark: #A8863E;
    --danger: #C0392B;
    --tag-bg: #F0EDE8;
    --overlay: rgba(26,23,20,0.55);
    --radius: 4px;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
    --shadow-md: 0 4px 20px rgba(0,0,0,0.10);
    --shadow-lg: 0 16px 48px rgba(0,0,0,0.16);
    --font-display: 'Cormorant Garamond', serif;
    --font-body: 'DM Sans', sans-serif;
  }

  body { background: var(--bg); color: var(--text); font-family: var(--font-body); font-size: 14px; }

  /* ── NAV ── */
  .nav { background: var(--text); padding: 0 40px; display: flex; align-items: center; justify-content: space-between; height: 60px; position: sticky; top: 0; z-index: 100; }
  .nav-logo { font-family: var(--font-display); font-size: 22px; font-weight: 600; color: var(--accent); letter-spacing: 0.05em; }
  .nav-logo span { color: #fff; font-weight: 300; }
  .nav-actions { display: flex; gap: 24px; align-items: center; }
  .nav-btn { background: none; border: 1px solid rgba(255,255,255,0.25); color: #fff; padding: 7px 18px; border-radius: var(--radius); font-family: var(--font-body); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; transition: all 0.2s; }
  .nav-btn:hover { background: var(--accent); border-color: var(--accent); }
  .nav-btn.active { background: var(--accent); border-color: var(--accent); color: var(--text); font-weight: 500; }

  /* ── HERO ── */
  .hero { background: var(--text); padding: 64px 40px 80px; position: relative; overflow: hidden; }
  .hero::before { content: ''; position: absolute; top: -60px; right: -80px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(200,169,110,0.12) 0%, transparent 70%); pointer-events: none; }
  .hero-eyebrow { font-family: var(--font-body); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 16px; }
  .hero-title { font-family: var(--font-display); font-size: clamp(40px, 5vw, 68px); font-weight: 300; line-height: 1.05; color: #fff; max-width: 640px; }
  .hero-title em { font-style: italic; color: var(--accent); }
  .hero-sub { font-size: 14px; color: rgba(255,255,255,0.55); margin-top: 20px; max-width: 460px; line-height: 1.7; font-weight: 300; }

  /* ── LAYOUT ── */
  .page-body { max-width: 1280px; margin: 0 auto; padding: 0 40px 80px; }

  /* ── TOOLBAR ── */
  .toolbar { display: flex; align-items: center; justify-content: space-between; padding: 28px 0 16px; gap: 16px; flex-wrap: wrap; border-bottom: 1px solid var(--border); margin-bottom: 28px; }
  .cat-filters { display: flex; gap: 8px; flex-wrap: wrap; }
  .cat-pill { background: none; border: 1px solid var(--border); color: var(--muted); padding: 6px 16px; border-radius: 99px; font-family: var(--font-body); font-size: 12px; letter-spacing: 0.04em; cursor: pointer; transition: all 0.18s; white-space: nowrap; }
  .cat-pill:hover { border-color: var(--accent); color: var(--text); }
  .cat-pill.active { background: var(--text); border-color: var(--text); color: var(--accent); }
  .view-toggle { display: flex; gap: 4px; }
  .view-btn { background: none; border: 1px solid var(--border); color: var(--muted); width: 34px; height: 34px; border-radius: var(--radius); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 15px; transition: all 0.18s; }
  .view-btn.active, .view-btn:hover { background: var(--text); border-color: var(--text); color: var(--accent); }

  /* ── PRODUCT GRID ── */
  .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; }
  .product-list { display: flex; flex-direction: column; gap: 16px; }

  /* ── PRODUCT CARD ── */
  .card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; cursor: pointer; transition: all 0.25s; position: relative; }
  .card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); border-color: var(--accent); }
  .card-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; background: var(--border); display: block; transition: transform 0.4s; }
  .card:hover .card-img { transform: scale(1.03); }
  .card-img-wrap { overflow: hidden; }
  .card-body { padding: 16px 18px 18px; }
  .card-cat { font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
  .card-name { font-family: var(--font-display); font-size: 17px; font-weight: 400; line-height: 1.3; margin-bottom: 8px; }
  .card-desc { font-size: 12px; color: var(--muted); line-height: 1.6; margin-bottom: 14px; }
  .card-footer { display: flex; align-items: center; justify-content: space-between; }
  .card-price { font-size: 15px; font-weight: 500; color: var(--text); }
  .card-price span { font-size: 11px; color: var(--muted); font-weight: 400; }
  .card-cta { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); font-weight: 500; }

  /* list variant */
  .card.list-card { display: flex; flex-direction: row; }
  .card.list-card .card-img-wrap { width: 180px; flex-shrink: 0; }
  .card.list-card .card-img { width: 100%; height: 100%; aspect-ratio: auto; }
  .card.list-card .card-body { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }

  /* ── MODAL ── */
  .modal-overlay { position: fixed; inset: 0; background: var(--overlay); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 24px; animation: fadeIn 0.2s; }
  @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
  .modal { background: var(--surface); border-radius: 6px; width: 100%; max-width: 960px; max-height: 90vh; overflow-y: auto; display: grid; grid-template-columns: 1fr 1fr; box-shadow: var(--shadow-lg); animation: slideUp 0.25s cubic-bezier(0.22,1,0.36,1); }
  @keyframes slideUp { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
  .modal-gallery { background: #F0EDE8; position: sticky; top: 0; height: 520px; display: flex; flex-direction: column; }
  .modal-main-img { flex: 1; object-fit: cover; width: 100%; display: block; }
  .modal-thumbs { display: flex; gap: 8px; padding: 12px; background: rgba(0,0,0,0.04); }
  .modal-thumb { width: 56px; height: 56px; object-fit: cover; border-radius: 2px; cursor: pointer; border: 2px solid transparent; transition: border-color 0.15s; }
  .modal-thumb.active { border-color: var(--accent); }
  .modal-info { padding: 36px 32px; overflow-y: auto; }
  .modal-eyebrow { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px; }
  .modal-name { font-family: var(--font-display); font-size: 30px; font-weight: 400; line-height: 1.2; margin-bottom: 16px; }
  .modal-desc { font-size: 13px; color: var(--muted); line-height: 1.75; margin-bottom: 28px; }
  .modal-close { position: absolute; top: 16px; right: 16px; background: rgba(0,0,0,0.5); border: none; color: #fff; width: 32px; height: 32px; border-radius: 50%; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10; }

  /* ── SPECS ── */
  .specs-title { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
  .specs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 16px; margin-bottom: 28px; }
  .spec-item { display: flex; flex-direction: column; }
  .spec-key { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); }
  .spec-val { font-size: 13px; font-weight: 500; margin-top: 1px; }

  /* ── PRICING TIER TABLE ── */
  .tier-title { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 10px; }
  .tier-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
  .tier-table th { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); text-align: left; padding: 0 0 8px; border-bottom: 1px solid var(--border); }
  .tier-table td { padding: 10px 0; border-bottom: 1px solid var(--border); font-size: 13px; }
  .tier-table tr.highlight td { color: var(--accent); font-weight: 500; }
  .tier-table tr.highlight td:first-child::after { content: ' ←'; font-size: 10px; }

  /* ── QTY + CTA ── */
  .qty-row { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
  .qty-control { display: flex; align-items: center; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
  .qty-btn { background: none; border: none; width: 34px; height: 38px; font-size: 18px; cursor: pointer; color: var(--text); transition: background 0.15s; }
  .qty-btn:hover { background: var(--tag-bg); }
  .qty-input { width: 52px; text-align: center; border: none; border-left: 1px solid var(--border); border-right: 1px solid var(--border); height: 38px; font-family: var(--font-body); font-size: 14px; outline: none; }
  .unit-price { font-family: var(--font-display); font-size: 28px; font-weight: 300; }
  .unit-sub { font-size: 11px; color: var(--muted); }
  .modal-enquire { width: 100%; background: var(--text); color: var(--accent); border: none; padding: 14px; font-family: var(--font-body); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 500; cursor: pointer; border-radius: var(--radius); transition: background 0.2s; }
  .modal-enquire:hover { background: var(--accent); color: var(--text); }

  /* ── QUIZ PANEL ── */
  .quiz-panel { background: var(--text); border-radius: 6px; overflow: hidden; box-shadow: var(--shadow-lg); width: 100%; max-width: 640px; animation: slideUp 0.3s cubic-bezier(0.22,1,0.36,1); }
  .quiz-header { padding: 32px 36px 24px; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .quiz-eyebrow { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px; }
  .quiz-title { font-family: var(--font-display); font-size: 28px; font-weight: 300; color: #fff; }
  .quiz-progress { height: 2px; background: rgba(255,255,255,0.1); margin-top: 20px; border-radius: 2px; }
  .quiz-progress-fill { height: 100%; background: var(--accent); border-radius: 2px; transition: width 0.4s cubic-bezier(0.22,1,0.36,1); }
  .quiz-body { padding: 32px 36px; }
  .quiz-q { font-size: 15px; color: rgba(255,255,255,0.85); margin-bottom: 20px; font-weight: 300; line-height: 1.5; }
  .quiz-options { display: flex; flex-direction: column; gap: 10px; }
  .quiz-option { background: none; border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.8); padding: 13px 18px; border-radius: var(--radius); text-align: left; font-family: var(--font-body); font-size: 13px; cursor: pointer; transition: all 0.2s; }
  .quiz-option:hover, .quiz-option.selected { background: rgba(200,169,110,0.12); border-color: var(--accent); color: #fff; }
  .quiz-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 28px; }
  .quiz-back { background: none; border: none; color: rgba(255,255,255,0.4); font-family: var(--font-body); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; padding: 0; }
  .quiz-back:hover { color: rgba(255,255,255,0.7); }
  .quiz-next { background: var(--accent); border: none; color: var(--text); padding: 11px 28px; border-radius: var(--radius); font-family: var(--font-body); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 500; cursor: pointer; transition: background 0.2s; }
  .quiz-next:disabled { opacity: 0.3; cursor: default; }
  .quiz-next:not(:disabled):hover { background: #e0c07a; }

  /* ── RESULT ── */
  .result-badge { display: inline-block; background: var(--accent); color: var(--text); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; padding: 4px 12px; border-radius: 99px; margin-bottom: 14px; font-weight: 500; }
  .result-title { font-family: var(--font-display); font-size: 32px; font-weight: 300; color: #fff; margin-bottom: 6px; }
  .result-sub { font-size: 12px; color: rgba(255,255,255,0.5); margin-bottom: 28px; }
  .result-items { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
  .result-item { display: flex; align-items: center; gap: 14px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius); padding: 12px 16px; }
  .result-item-img { width: 52px; height: 52px; object-fit: cover; border-radius: 2px; background: var(--border); flex-shrink: 0; }
  .result-item-name { font-size: 13px; color: #fff; font-weight: 400; }
  .result-item-price { font-size: 12px; color: var(--accent); margin-top: 3px; }
  .result-total { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 18px; margin-bottom: 24px; }
  .result-total-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.5); }
  .result-total-price { font-family: var(--font-display); font-size: 36px; font-weight: 300; color: var(--accent); }
  .result-total-sub { font-size: 11px; color: rgba(255,255,255,0.3); text-align: right; }
  .result-actions { display: flex; gap: 10px; }
  .result-btn { flex: 1; padding: 13px; border-radius: var(--radius); font-family: var(--font-body); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 500; cursor: pointer; border: none; transition: all 0.2s; }
  .result-btn-primary { background: var(--accent); color: var(--text); }
  .result-btn-primary:hover { background: #e0c07a; }
  .result-btn-secondary { background: none; border: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.7); }
  .result-btn-secondary:hover { border-color: var(--accent); color: var(--accent); }

  /* ── EMPTY ── */
  .empty { text-align: center; padding: 80px 20px; color: var(--muted); }
  .empty-icon { font-size: 48px; margin-bottom: 16px; }
  .empty-text { font-family: var(--font-display); font-size: 22px; color: var(--text); margin-bottom: 8px; }

  /* ── TOAST ── */
  .toast { position: fixed; bottom: 32px; right: 32px; background: var(--text); color: var(--accent); padding: 14px 22px; border-radius: var(--radius); font-size: 13px; font-weight: 500; box-shadow: var(--shadow-lg); z-index: 500; animation: slideUp 0.3s; }

  /* ── LOADING ── */
  .skeleton { background: linear-gradient(90deg, var(--border) 25%, #e8e4de99 50%, var(--border) 75%); background-size: 200% 100%; animation: shimmer 1.4s infinite; border-radius: var(--radius); }
  @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

  @media (max-width: 768px) {
    .nav { padding: 0 20px; }
    .hero { padding: 48px 20px 60px; }
    .page-body { padding: 0 20px 60px; }
    .modal { grid-template-columns: 1fr; max-height: 95vh; }
    .modal-gallery { height: 280px; position: static; }
  }
`;
