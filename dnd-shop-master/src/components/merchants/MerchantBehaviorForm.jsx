import { merchantRegions } from "../../data/merchantRegions";
import { alignmentOptions, getAlignmentById } from "../../data/alignments";
import { merchantReputations } from "../../data/merchantReputations";
import { normalizePrestige, prestigeOptions } from "../../data/prestige";

export function MerchantBehaviorForm({
  merchant,
  onUpdateMerchant,
}) {
  return (
    <section id="merchant-sheet" className="merchant-sheet-card fantasy-card panel-merchant-sheet">
      <div className="card-title-row">
        <div>
          <div className="card-icon">⚔</div>
          <h2>Scheda Commerciante</h2>
        </div>

      </div>

      <div className="merchant-identity-inline merchant-identity-inline-compact">
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
          <label>Zona geografica</label>
          <select
            value={merchant.region || "generic"}
            onChange={(e) => onUpdateMerchant("region", e.target.value)}
          >
            {merchantRegions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Posizione sulla mappa</label>
          <select
            value={
              merchant.mapRegion ||
              merchant.geographicRegion ||
              merchant.region ||
              merchant.area ||
              "generic"
            }
            onChange={(e) => onUpdateMerchant("mapRegion", e.target.value)}
          >
            {merchantRegions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Allineamento</label>
          <select
            value={merchant.alignment || "neutral"}
            onChange={(e) => onUpdateMerchant("alignment", e.target.value)}
          >
            {alignmentOptions.map((alignment) => (
              <option key={alignment.id} value={alignment.id}>
                {alignment.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Reputazione</label>
          <select
            value={merchant.reputation || "Sconosciuto"}
            onChange={(e) => onUpdateMerchant("reputation", e.target.value)}
          >
            {merchantReputations.map((reputation) => (
              <option key={reputation.id} value={reputation.id}>
                {reputation.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Prestigio</label>
          <select
            value={normalizePrestige(merchant.prestige)}
            onChange={(e) => onUpdateMerchant("prestige", e.target.value)}
          >
            {prestigeOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="merchant-region-hint">
        La zona geografica caratterizza merce e tono della bottega. L’allineamento guida roleplay, affidabilità, contrattazione e possibili sconti.
        <strong> {getAlignmentById(merchant.alignment || "neutral").roleplayHint}</strong>
      </div>

      <div className="large-description-grid">
        <article className="reading-panel reading-panel-shop">
          <div className="reading-title">🏬 Descrizione Shop</div>

          <div className="large-reading-textarea display-text">
            {merchant.locationDescription || ""}
          </div>
        </article>

        <article className="reading-panel reading-panel-merchant">
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
