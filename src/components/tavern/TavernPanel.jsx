export function TavernPanel({
  tavern,
  onUpdateMerchant,
  onRegenerateDescriptions,
}) {
  return (
    <>
      <section className="description-card fantasy-card">
        <div className="card-title-row">
          <h2>🍺 Descrizione Locanda</h2>

          <button
            className="secondary-button compact"
            onClick={onRegenerateDescriptions}
          >
            🎲 Rigenera
          </button>
        </div>

        <div className="identity-strip">
          <div>
            <label>Nome Locandiere</label>

            <input
              value={tavern.name || ""}
              onChange={(e) =>
                onUpdateMerchant("name", e.target.value)
              }
            />
          </div>

          <div>
            <label>Razza</label>

            <input
              value={tavern.race || ""}
              onChange={(e) =>
                onUpdateMerchant("race", e.target.value)
              }
            />
          </div>

          <div>
            <label>Nome Locanda</label>

            <input
              value={tavern.shopName || ""}
              onChange={(e) =>
                onUpdateMerchant("shopName", e.target.value)
              }
            />
          </div>

          <div>
            <label>Reputazione</label>

            <select
              value={tavern.reputation || "Neutrale"}
              onChange={(e) =>
                onUpdateMerchant("reputation", e.target.value)
              }
            >
              <option>Ben frequentata</option>
              <option>Neutrale</option>
              <option>Malfamata</option>
            </select>
          </div>
        </div>

        <div className="description-columns">
          <div>
            <label>Descrizione del locandiere</label>

            <textarea
              className="lore-textarea"
              value={tavern.story || ""}
              onChange={(e) =>
                onUpdateMerchant("story", e.target.value)
              }
            />
          </div>

          <div>
            <label>Descrizione della locanda</label>

            <textarea
              className="lore-textarea"
              value={tavern.locationDescription || ""}
              onChange={(e) =>
                onUpdateMerchant(
                  "locationDescription",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      </section>

      <section className="lower-workspace">
        <div className="fantasy-card">
          <h2>🍖 Piatto Tipico</h2>

          <label>Piatto del giorno</label>

          <input
            value={tavern.dishName || ""}
            onChange={(e) =>
              onUpdateMerchant("dishName", e.target.value)
            }
          />

          <label>Descrizione</label>

          <textarea
            className="quest-textarea"
            value={tavern.dishDescription || ""}
            onChange={(e) =>
              onUpdateMerchant(
                "dishDescription",
                e.target.value
              )
            }
          />

          <label>Bonus</label>

          <textarea
            className="reward-textarea"
            value={tavern.dishBonus || ""}
            onChange={(e) =>
              onUpdateMerchant("dishBonus", e.target.value)
            }
          />

          <label>Malus</label>

          <textarea
            className="reward-textarea"
            value={tavern.dishMalus || ""}
            onChange={(e) =>
              onUpdateMerchant("dishMalus", e.target.value)
            }
          />
        </div>

        <div className="fantasy-card">
          <h2>🛏 Camere & Servizi</h2>

          <label>Camere disponibili</label>

          <input
            type="number"
            min="3"
            max="10"
            value={tavern.roomsAvailable || 3}
            onChange={(e) =>
              onUpdateMerchant(
                "roomsAvailable",
                e.target.value
              )
            }
          />

          <label>Prezzo camera</label>

          <input
            value={tavern.roomPrice || ""}
            onChange={(e) =>
              onUpdateMerchant("roomPrice", e.target.value)
            }
          />

          <label>Servizi disponibili</label>

          <textarea
            className="lore-textarea"
            value={
              tavern.services
                ?.map(
                  (service) =>
                    `${service.name} — ${service.price}\n${service.description}`
                )
                .join("\n\n") || ""
            }
            readOnly
          />
        </div>
      </section>

      <section className="lower-workspace">
        <div className="quest-card fantasy-card">
          <h2>📜 Side Quest</h2>

          <label>Quest</label>

          <textarea
            className="quest-textarea"
            value={tavern.sideQuest || ""}
            onChange={(e) =>
              onUpdateMerchant("sideQuest", e.target.value)
            }
          />
        </div>

        <div className="quest-card fantasy-card">
          <h2>🎁 Ricompensa</h2>

          <label>Ricompensa</label>

          <textarea
            className="reward-textarea"
            value={tavern.reward || ""}
            onChange={(e) =>
              onUpdateMerchant("reward", e.target.value)
            }
          />
        </div>
      </section>
    </>
  );
}