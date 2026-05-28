export function MerchantBehaviorForm({
  merchant,
  onUpdateMerchant,
  onRegenerateDescriptions,
}) {
  return (
    <section className="merchant-sheet-card fantasy-card">
      <div className="card-title-row">
        <div>
          <div className="card-icon">⚔</div>
          <h2>Scheda Commerciante</h2>
        </div>

        <button
          className="secondary-button compact"
          onClick={onRegenerateDescriptions}
        >
          Rigenera
        </button>
      </div>

      <div className="merchant-identity-inline">
        <div>
          <label>Nome commerciante</label>
          <input
            value={merchant.name || ""}
            onChange={(e) => onUpdateMerchant("name", e.target.value)}
          />
        </div>

        <div>
          <label>Razza</label>
          <input
            value={merchant.race || ""}
            onChange={(e) => onUpdateMerchant("race", e.target.value)}
          />
        </div>

        <div>
          <label>Nome bottega</label>
          <input
            value={merchant.shopName || ""}
            onChange={(e) => onUpdateMerchant("shopName", e.target.value)}
          />
        </div>

        <div>
          <label>Posizione</label>
          <input
            value={merchant.location || ""}
            onChange={(e) => onUpdateMerchant("location", e.target.value)}
          />
        </div>
      </div>

      <div className="large-description-grid">
        <article className="reading-panel">
          <div className="reading-title">🏬 Descrizione Shop</div>

          <div className="large-reading-textarea display-text">
            {merchant.locationDescription || ""}
          </div>
        </article>

        <article className="reading-panel">
          <div className="reading-title">🧙 Descrizione Mercante</div>

          <div className="large-reading-textarea display-text">
            {merchant.story || ""}
          </div>
        </article>
      </div>

      <div className="merchant-sheet-footer">
        <div>
          <label>Inclinazione agli sconti</label>
          <select
            value={merchant.discount || "Basso"}
            onChange={(e) => onUpdateMerchant("discount", e.target.value)}
          >
            <option>Basso</option>
            <option>Medio</option>
            <option>Alto</option>
          </select>
        </div>

        <div>
          <label>Note del Master</label>
          <textarea
            className="notes-textarea"
            value={merchant.notes || ""}
            onChange={(e) => onUpdateMerchant("notes", e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}