import { useMemo, useState } from "react";
import { monsters } from "../../data/monsters";

function abilityModifier(score) {
  const modifier = Math.floor((score - 10) / 2);
  return modifier >= 0 ? `+${modifier}` : `${modifier}`;
}

function normalizeText(value) {
  return String(value || "").toLowerCase();
}

export function BestiaryPanel() {
  const [selectedMonsterId, setSelectedMonsterId] = useState(monsters[0].id);
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [tagFilter, setTagFilter] = useState("all");

  const selectedMonster =
    monsters.find((monster) => monster.id === selectedMonsterId) || monsters[0];

  const tags = useMemo(() => {
    const allTags = monsters.flatMap((monster) => monster.tags || []);
    return [...new Set(allTags)].sort((a, b) => a.localeCompare(b));
  }, []);

  const filteredMonsters = useMemo(() => {
    return monsters.filter((monster) => {
      const searchValue = normalizeText(search);

      const matchesSearch =
        normalizeText(monster.name).includes(searchValue) ||
        normalizeText(monster.archetype).includes(searchValue) ||
        normalizeText(monster.description).includes(searchValue);

      const matchesLevel =
        levelFilter === "all" || monster.level === Number(levelFilter);

      const matchesTag =
        tagFilter === "all" || (monster.tags || []).includes(tagFilter);

      return matchesSearch && matchesLevel && matchesTag;
    });
  }, [search, levelFilter, tagFilter]);

  function selectPreviousMonster() {
    const currentIndex = monsters.findIndex(
      (monster) => monster.id === selectedMonster.id
    );

    const previousIndex =
      currentIndex <= 0 ? monsters.length - 1 : currentIndex - 1;

    setSelectedMonsterId(monsters[previousIndex].id);
  }

  function selectNextMonster() {
    const currentIndex = monsters.findIndex(
      (monster) => monster.id === selectedMonster.id
    );

    const nextIndex =
      currentIndex >= monsters.length - 1 ? 0 : currentIndex + 1;

    setSelectedMonsterId(monsters[nextIndex].id);
  }

  return (
    <>
      <section className="bestiary-hero fantasy-card">
        <div className="bestiary-hero-content">
          <div>
            <div className="section-kicker">Archivio del Master</div>
            <h1>Bestiario</h1>
            <p>
              Una raccolta di creature, boss e minacce leggendarie da usare
              nelle tue campagne. Seleziona un mostro per leggere statistiche,
              storia, azioni, resistenze e vulnerabilità.
            </p>
          </div>

          <div className="bestiary-hero-mark">🐉</div>
        </div>
      </section>

      <section className="bestiary-list-card fantasy-card">
        <div className="card-title-row">
          <div>
            <div className="card-icon">⚔</div>
            <h2>Creature</h2>
          </div>
        </div>

        <div className="bestiary-toolbar">
          <div className="bestiary-search">
            <span>⌕</span>
            <input
              value={search}
              placeholder="Cerca mostro..."
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <select
            value={levelFilter}
            onChange={(event) => setLevelFilter(event.target.value)}
          >
            <option value="all">Tutti i livelli</option>
            {monsters.map((monster) => (
              <option key={monster.id} value={monster.level}>
                Livello {monster.level}
              </option>
            ))}
          </select>

          <select
            value={tagFilter}
            onChange={(event) => setTagFilter(event.target.value)}
          >
            <option value="all">Tutte le tag</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        <div className="monster-grid">
          {filteredMonsters.map((monster) => (
            <button
              key={monster.id}
              className={
                selectedMonster.id === monster.id
                  ? "monster-card active"
                  : "monster-card"
              }
              onClick={() => setSelectedMonsterId(monster.id)}
            >
              <div className="monster-token-wrap">
                <img src={monster.image} alt="" className="monster-token" />
              </div>

              <div className="monster-card-text">
                <span className="monster-card-level">{monster.id}</span>
                <span className="monster-card-name">{monster.name}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="bestiary-detail fantasy-card">
        <div className="bestiary-detail-actions">
          <button onClick={selectPreviousMonster}>‹ Precedente</button>
          <button onClick={selectNextMonster}>Successivo ›</button>
        </div>

        <div className="bestiary-detail-main">
          <div className="monster-big-token-wrap">
            <img
              src={selectedMonster.image}
              alt=""
              className="monster-big-token"
            />
          </div>

          <div className="monster-detail-header">
            <div className="section-kicker">Mostro livello {selectedMonster.level}</div>

            <h2>
              {selectedMonster.id}. {selectedMonster.name}
            </h2>

            <p>
              {selectedMonster.size}, {selectedMonster.alignment}
            </p>

            <div className="monster-stat-pills">
              <span>CA {selectedMonster.armorClass}</span>
              <span>PF {selectedMonster.hitPoints}</span>
              <span>VEL {selectedMonster.speed}</span>
              <span>CR {selectedMonster.cr}</span>
            </div>

            <div className="monster-tags">
              {selectedMonster.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="monster-section">
          <h3>Descrizione</h3>
          <p>{selectedMonster.description}</p>
          <p>{selectedMonster.story}</p>
        </div>

        <div className="monster-section">
          <h3>Azioni</h3>
          <p>{selectedMonster.actions}</p>
        </div>

        <div className="monster-section">
          <h3>Abilità</h3>

          <div className="monster-abilities">
            {Object.entries(selectedMonster.abilities).map(([key, value]) => (
              <div className="monster-ability" key={key}>
                <span>{key.toUpperCase()}</span>
                <strong>
                  {value} ({abilityModifier(value)})
                </strong>
              </div>
            ))}
          </div>
        </div>

        <div className="monster-bottom-grid">
          <div className="monster-section">
            <h3>Resistenze</h3>
            <p>{selectedMonster.resistances}</p>
          </div>

          <div className="monster-section">
            <h3>Vulnerabilità</h3>
            <p>{selectedMonster.vulnerabilities}</p>
          </div>
        </div>
      </section>
    </>
  );
}