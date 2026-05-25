export function MerchantBehaviorForm({
  merchant,
  onUpdateMerchant,
  onRegenerateDescriptions,
}) {
  return (
    <section className="description-card fantasy-card">
      <div className="card-title-row">
        <h2>⚔ Descrizione Commerciante</h2>

        <button className="secondary-button compact" onClick={onRegenerateDescriptions}>
          🎲 Rigenera
        </button>
      </div>

      <div className="identity-strip">
        <div>
          <label>Nome</label>
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
          <label>Bottega</label>
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

      <div className="description-columns">
        <div>
          <label>Descrizione del venditore</label>
          <textarea
            className="lore-textarea"
            value={merchant.story || ""}
            onChange={(e) => onUpdateMerchant("story", e.target.value)}
          />
        </div>

        <div>
          <label>Descrizione dello shop / luogo</label>
          <textarea
            className="lore-textarea"
            value={merchant.locationDescription || ""}
            onChange={(e) =>
              onUpdateMerchant("locationDescription", e.target.value)
            }
          />
        </div>
      </div>

      <div className="description-footer">
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