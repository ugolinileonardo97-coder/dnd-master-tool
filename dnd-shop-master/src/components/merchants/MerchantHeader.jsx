import { getMerchantRegionLabel } from "../../data/merchantRegions";
import { getAlignmentLabel } from "../../data/alignments";
import { getPrestigeLabel } from "../../data/prestige";

export function MerchantHeader({
  merchant,
  onDeleteMerchant,
  onToggleFavorite,
}) {
  const isTavern = merchant.type === "tavern";

  return (
    <section className="merchant-header fantasy-card">
      <div className="header-overlay" />

      <div className="merchant-header-content">
        <button
          className={
            merchant.favorite
              ? "favorite-toggle merchant-favorite-toggle active"
              : "favorite-toggle merchant-favorite-toggle"
          }
          type="button"
          onClick={onToggleFavorite}
          aria-label={
            merchant.favorite
              ? "Rimuovi dai preferiti"
              : "Aggiungi ai preferiti"
          }
          title={
            merchant.favorite
              ? "Rimuovi dai preferiti"
              : "Aggiungi ai preferiti"
          }
        >
          {merchant.favorite ? "★" : "☆"}
        </button>

        <div className="section-kicker">
          {isTavern ? "LOCANDA" : "COMMERCIANTE"}
        </div>

        <h1>{merchant.name}</h1>

        <div className="merchant-shop-name">
          {merchant.shopName || "Nome attività"}
        </div>

        <div className="merchant-badges">
          <span>⚜ {merchant.race || "Razza non definita"}</span>

          <span>
            ⚖️ Allineamento: {getAlignmentLabel(merchant.alignment)}
          </span>

          <span>
            💰 Budget: {merchant.gold || 0} mo
          </span>

          <span>
            🛒 Ricchezza: {merchant.shopTier || "Comune"}
          </span>

          <span>
            🎭 Sconti: {merchant.discount || "Basso"}
          </span>

          <span>
            Zona: {getMerchantRegionLabel(merchant.region)}
          </span>

          <span>
            Prestigio: {getPrestigeLabel(merchant.prestige)}
          </span>

          {merchant.reputation && (
            <span>
              Reputazione: {merchant.reputation}
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
