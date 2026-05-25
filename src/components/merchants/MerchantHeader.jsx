export function MerchantHeader({ merchant, onDeleteMerchant }) {
  return (
    <section className="merchant-header fantasy-card">
      <div className="merchant-header-content">
        <p className="section-kicker">Scheda Commerciante</p>

        <h1>{merchant.name || "Mercante"}</h1>

        <p className="merchant-shop-name">
          {merchant.shopName || "Bottega senza nome"}
        </p>

        <div className="merchant-badges">
          <span>🧝 Razza: {merchant.race || "-"}</span>
          <span>💰 Oro disponibile: {merchant.gold || 0} mo</span>
          <span>🏪 Tier: {merchant.shopTier || "-"}</span>
          <span>🤝 Sconti: {merchant.discount || "-"}</span>
        </div>
      </div>

      <div className="header-watermark">◈</div>

      <button className="danger-button merchant-delete" onClick={onDeleteMerchant}>
        🗑 Elimina
      </button>
    </section>
  );
}