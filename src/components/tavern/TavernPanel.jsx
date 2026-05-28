import dishIcon from "../../assets/dish_icon.png";

const fallbackRooms = [
  {
    name: "Stanza Singola",
    tier: "Modesta",
    description: "Minimalista e pulita, perfetta per chi vuole solo dormire in pace",
    status: "Disponibile",
    price: "4 mo",
  },
  {
    name: "Stanza Singola",
    tier: "Modesta",
    description: "Camera con scrivania, scaffale e un candeliere a tre braccia",
    status: "Disponibile",
    price: "4 mo",
  },
  {
    name: "Stanza Doppia",
    tier: "Modesta",
    description: "Camera accogliente con un piccolo camino, coperte calde e un tappeto di pelle",
    status: "Disponibile",
    price: "5 mo",
  },
  {
    name: "Stanza Singola",
    tier: "Modesta",
    description: "Letto cigolante, lenzuola pulite ma ruvide, una candela sul comodino",
    status: "Disponibile",
    price: "4 mo",
  },
  {
    name: "Stanza Doppia",
    tier: "Modesta",
    description: "Stanza spaziosa con letto a baldacchino e una vasca per lavarsi",
    status: "Occupata",
    price: "5 mo",
  },
  {
    name: "Stanza Singola",
    tier: "Modesta",
    description: "Camera accogliente con un piccolo camino, coperte calde e un tappeto di pelle",
    status: "Disponibile",
    price: "4 mo",
  },
];

export function TavernPanel({
  tavern,
  onUpdateMerchant,
  onRegenerateDescriptions,
}) {
  const rooms = tavern.rooms?.length ? tavern.rooms : fallbackRooms;

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

      <section className="tavern-rooms-card fantasy-card">
        <div className="rooms-title-row">
          <div className="card-icon">🛏️</div>
          <h2>Camere Disponibili</h2>
        </div>

        <div className="dish-divider">✦</div>

        <div className="rooms-list">
          {rooms.map((room, index) => {
            const isOccupied = room.status === "Occupata";

            return (
              <article
                className={`room-card ${isOccupied ? "occupied" : "available"}`}
                key={`${room.name}-${room.description}-${index}`}
              >
                <div className="room-left">
                  <span className="room-status-dot" />

                  <div className="room-text">
                    <div className="room-name-row">
                      <span className="room-name">{room.name}</span>
                      <span className="room-tier">({room.tier})</span>
                    </div>

                    <p>{room.description}</p>
                  </div>
                </div>

                <div className="room-right">
                  <span className="room-status">{room.status}</span>
                  <span className="room-price">{room.price}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="daily-dish-card fantasy-card">
        <div className="dish-header-row">
  <div className="dish-title-row">
    <img src={dishIcon} className="panel-icon" alt="" />
    <h2>Piatto del Giorno</h2>
  </div>

  <div className="dish-price-box">
    <span>Prezzo</span>
    <input
      value={tavern.dishPrice || "5 ma"}
      onChange={(e) => onUpdateMerchant("dishPrice", e.target.value)}
    />
  </div>
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