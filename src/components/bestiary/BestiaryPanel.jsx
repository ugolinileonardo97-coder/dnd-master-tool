import { useMemo, useState } from "react";
import { biomes } from "../../data/biomes";
import { biomeMonsters } from "../../data/biomeMonsters";

function normalizeText(value) {
  return String(value || "").toLowerCase();
}

function getDifficultyClass(difficulty) {
  const normalized = normalizeText(difficulty);

  if (normalized.includes("boss")) return "boss";
  if (normalized.includes("estremo")) return "extreme";
  if (normalized.includes("difficile")) return "hard";
  if (normalized.includes("medio")) return "medium";
  if (normalized.includes("facile")) return "easy";

  return "simple";
}

function getDifficultyRank(difficulty) {
  const normalized = normalizeText(difficulty);

  if (normalized.includes("semplice")) return 1;
  if (normalized.includes("facile")) return 2;
  if (normalized.includes("medio")) return 3;
  if (normalized.includes("difficile")) return 4;
  if (normalized.includes("estremo")) return 5;
  if (normalized.includes("boss")) return 6;

  return 99;
}

export function BestiaryPanel() {
  const [selectedBiomeId, setSelectedBiomeId] = useState(biomes[0].id);
  const [selectedMonsterId, setSelectedMonsterId] = useState(null);
  const [search, setSearch] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const selectedBiome =
    biomes.find((biome) => biome.id === selectedBiomeId) || biomes[0];

  const biomeEncounters = useMemo(() => {
    return biomeMonsters
      .filter((monster) => monster.biomes.includes(selectedBiome.id))
      .sort(
        (a, b) =>
          getDifficultyRank(a.difficulty) - getDifficultyRank(b.difficulty)
      );
  }, [selectedBiome.id]);

  const creatureTypes = useMemo(() => {
    const allTypes = biomeMonsters.map((monster) => monster.type);
    return [...new Set(allTypes)].sort((a, b) => a.localeCompare(b));
  }, []);

  const filteredEncounters = useMemo(() => {
    const searchValue = normalizeText(search);

    return biomeEncounters.filter((monster) => {
      const matchesSearch =
        normalizeText(monster.name).includes(searchValue) ||
        normalizeText(monster.type).includes(searchValue) ||
        normalizeText(monster.role).includes(searchValue) ||
        normalizeText(monster.tags?.join(" ")).includes(searchValue);

      const matchesDifficulty =
        difficultyFilter === "all" ||
        normalizeText(monster.difficulty) === normalizeText(difficultyFilter);

      const matchesType =
        typeFilter === "all" || monster.type === typeFilter;

      return matchesSearch && matchesDifficulty && matchesType;
    });
  }, [biomeEncounters, difficultyFilter, search, typeFilter]);

  const selectedMonster =
    biomeMonsters.find((monster) => monster.id === selectedMonsterId) ||
    filteredEncounters[0] ||
    biomeEncounters[0];

  function selectBiome(biomeId) {
    setSelectedBiomeId(biomeId);
    setSelectedMonsterId(null);
    setSearch("");
    setDifficultyFilter("all");
    setTypeFilter("all");
  }

  return (
    <>
      <section className="bestiary-hero fantasy-card">
        <div className="bestiary-hero-content">
          <div>
            <div className="section-kicker">Archivio del Master</div>
            <h1>Bestiario dei Biomi</h1>
            <p>
              Scegli un bioma e trova incontri ordinati dal più semplice al più
              pericoloso. Pensato per preparare rapidamente sessioni, dungeon,
              viaggi e combattimenti coerenti con l’ambiente.
            </p>
          </div>

          <div className="bestiary-hero-mark">🗺️</div>
        </div>
      </section>

      <section className="biome-card fantasy-card">
        <div className="card-title-row">
          <div>
            <div className="card-icon">🌍</div>
            <h2>Biomi</h2>
          </div>
        </div>

        <div className="biome-grid">
          {biomes.map((biome) => (
            <button
              key={biome.id}
              className={
                selectedBiome.id === biome.id
                  ? "biome-tile active"
                  : "biome-tile"
              }
              onClick={() => selectBiome(biome.id)}
            >
              <span className="biome-icon">{biome.icon}</span>

              <div>
                <strong>{biome.name}</strong>
                <small>Pericolo: {biome.danger}</small>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="biome-encounters-card fantasy-card">
        <div className="biome-selected-header">
          <div>
            <div className="section-kicker">Incontri del bioma</div>
            <h2>
              {selectedBiome.icon} {selectedBiome.name}
            </h2>
            <p>{selectedBiome.description}</p>
          </div>

          <div className="biome-count-pill">
            {filteredEncounters.length} incontri
          </div>
        </div>

        <div className="biome-toolbar">
          <div className="bestiary-search">
            <span>⌕</span>
            <input
              value={search}
              placeholder="Cerca mostro, ruolo o tag..."
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <select
            value={difficultyFilter}
            onChange={(event) => setDifficultyFilter(event.target.value)}
          >
            <option value="all">Tutte le difficoltà</option>
            <option value="Semplice">Semplice</option>
            <option value="Facile">Facile</option>
            <option value="Medio">Medio</option>
            <option value="Difficile">Difficile</option>
            <option value="Estremo">Estremo</option>
            <option value="Boss">Boss</option>
          </select>

          <select
            value={typeFilter}
            onChange={(event) => setTypeFilter(event.target.value)}
          >
            <option value="all">Tutti i tipi</option>
            {creatureTypes.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="encounter-list">
          {filteredEncounters.map((monster) => {
            const difficultyClass = getDifficultyClass(monster.difficulty);

            return (
              <button
                key={monster.id}
                className={
                  selectedMonster?.id === monster.id
                    ? "encounter-row active"
                    : "encounter-row"
                }
                onClick={() => setSelectedMonsterId(monster.id)}
              >
                <div className="encounter-main">
                  <div className="encounter-icon-wrap">
                    {monster.image ? (
                      <img src={monster.image} alt="" />
                    ) : (
                      <span>{monster.icon}</span>
                    )}
                  </div>

                  <div className="encounter-text">
                    <strong>{monster.name}</strong>
                    <span>
                      {monster.type} · {monster.role} · CR {monster.cr}
                    </span>
                  </div>
                </div>

                <div className="encounter-meta">
                  <span className={`difficulty-badge ${difficultyClass}`}>
                    {monster.difficulty}
                  </span>
                  <span className="encounter-cr">CR {monster.cr}</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {selectedMonster && (
        <section className="bestiary-detail fantasy-card">
          <div className="bestiary-detail-main">
            <div className="monster-big-token-wrap">
              {selectedMonster.image ? (
                <img
                  src={selectedMonster.image}
                  alt=""
                  className="monster-big-token"
                />
              ) : (
                <div className="monster-big-fallback">
                  {selectedMonster.icon}
                </div>
              )}
            </div>

            <div className="monster-detail-header">
              <div className="section-kicker">
                {selectedBiome.name} · {selectedMonster.difficulty}
              </div>

              <h2>{selectedMonster.name}</h2>

              <p>
                {selectedMonster.type} · {selectedMonster.role}
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
            <h3>Tattica</h3>
            <p>{selectedMonster.tactics}</p>
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
      )}
    </>
  );
}