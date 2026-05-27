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
          <textarea
            className="large-reading-textarea"
            value={merchant.locationDescription || ""}
            onChange={(e) =>
              onUpdateMerchant("locationDescription", e.target.value)
            }
          />
        </article>

        <article className="reading-panel">
          <div className="reading-title">🧙 Descrizione Mercante</div>
          <textarea
            className="large-reading-textarea"
            value={merchant.story || ""}
            onChange={(e) => onUpdateMerchant("story", e.target.value)}
          />
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