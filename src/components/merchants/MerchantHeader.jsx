export function MerchantHeader({
  merchant,
  onDeleteMerchant,
}) {
  const isTavern = merchant.type === "tavern";

  return (
    <section className="merchant-header fantasy-card">
      <div className="header-overlay" />

      <div className="merchant-header-content">
        <div className="section-kicker">
          {isTavern ? "LOCANDA" : "COMMERCIANTE"}
        </div>

        <h1>{merchant.name}</h1>

        <div className="merchant-shop-name">
          {merchant.shopName || "Nome attività"}
        </div>

        <div className="merchant-badges">
          <span>⚜ {merchant.race}</span>

          <span>
            💰 {merchant.gold || 0} mo
          </span>

          <span>
            🛒 {merchant.shopTier || "Comune"}
          </span>

          <span>
            🎭 {merchant.discount || "Basso"}
          </span>

          {isTavern && (
            <span>
              🍺 {merchant.reputation}
            </span>
          )}
        </div>
      </div>

      <div className="header-watermark">
        ⚔
      </div>

      <button
        className="danger-button merchant-delete"
        onClick={onDeleteMerchant}
      >
        Elimina
      </button>
    </section>
  );
}