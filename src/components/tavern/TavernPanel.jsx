import dishIcon from "../../assets/dish_icon.png";

export function TavernPanel({
  tavern,
  onUpdateMerchant,
  onRegenerateDescriptions,
}) {
  return (
    <>
      <section className="merchant-sheet-card fantasy-card">
        <div className="card-title-row">
          <div>
            <div className="card-icon">🍺</div>
            <h2>Scheda Locanda</h2>
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
            <label>Nome Locandiere</label>
            <input
              value={tavern.name || ""}
              onChange={(e) => onUpdateMerchant("name", e.target.value)}
            />
          </div>

          <div>
            <label>Razza</label>
            <input
              value={tavern.race || ""}
              onChange={(e) => onUpdateMerchant("race", e.target.value)}
            />
          </div>

          <div>
            <label>Nome Locanda</label>
            <input
              value={tavern.shopName || ""}
              onChange={(e) => onUpdateMerchant("shopName", e.target.value)}
            />
          </div>

          <div>
            <label>Reputazione</label>
            <select
              value={tavern.reputation || "Neutrale"}
              onChange={(e) => onUpdateMerchant("reputation", e.target.value)}
            >
              <option>Ben frequentata</option>
              <option>Neutrale</option>
              <option>Malfamata</option>
            </select>
          </div>
        </div>

        <div className="large-description-grid">
          <article className="reading-panel">
            <div className="reading-title">🍺 Descrizione Locanda</div>
            <div className="large-reading-textarea display-text">
              {tavern.locationDescription || ""}
            </div>
          </article>

          <article className="reading-panel">
            <div className="reading-title">🧙 Descrizione Locandiere</div>
            <div className="large-reading-textarea display-text">
              {tavern.story || ""}
            </div>
          </article>
        </div>
      </section>

      <section className="daily-dish-card fantasy-card">
        <div className="dish-title-row">
          <img src={dishIcon} className="panel-icon" alt="" />
          <h2>Piatto del Giorno</h2>
        </div>

        <div className="dish-divider">✦</div>

        <input
          className="dish-name-input"
          value={tavern.dishName || ""}
          onChange={(e) => onUpdateMerchant("dishName", e.target.value)}
        />

        <textarea
          className="dish-description-input"
          value={tavern.dishDescription || ""}
          onChange={(e) =>
            onUpdateMerchant("dishDescription", e.target.value)
          }
        />

        <div className="dish-effects-grid">
          <div className="dish-effect-card bonus">
            <span>✦ Bonus</span>
            <textarea
              value={tavern.dishBonus || ""}
              onChange={(e) => onUpdateMerchant("dishBonus", e.target.value)}
            />
          </div>

          <div className="dish-effect-card malus">
            <span>✦ Malus</span>
            <textarea
              value={tavern.dishMalus || ""}
              onChange={(e) => onUpdateMerchant("dishMalus", e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="tavern-services-card fantasy-card">
        <div className="services-title-row">
          <div className="card-icon">🏷️</div>
          <h2>Servizi</h2>
        </div>

        <div className="dish-divider">✦</div>

        <div className="services-grid">
          {(tavern.services || []).map((service, index) => (
            <div className="service-card" key={`${service.name}-${index}`}>
              <div className="service-left">
                <span className="service-icon">{service.icon || "📜"}</span>
                <span className="service-name">{service.name}</span>
              </div>

              <span className="service-price">{service.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sidequest-card fantasy-card">
        <div className="services-title-row">
          <div className="card-icon">📋</div>
          <h2>Side Quest</h2>
        </div>

        <div className="dish-divider">✦</div>

        <textarea
          className="sidequest-main-text"
          value={tavern.sideQuest || ""}
          onChange={(e) => onUpdateMerchant("sideQuest", e.target.value)}
        />

        <div className="sidequest-reward-box">
          <span className="sidequest-reward-title">🏆 Ricompensa</span>

          <textarea
            className="sidequest-reward-text"
            value={tavern.reward || ""}
            onChange={(e) => onUpdateMerchant("reward", e.target.value)}
          />
        </div>
      </section>
    </>
  );
}