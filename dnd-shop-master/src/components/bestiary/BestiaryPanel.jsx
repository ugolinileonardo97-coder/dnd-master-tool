import { useEffect, useMemo, useState } from "react";
import { biomes } from "../../data/biomes";
import { biomeMonsters } from "../../data/biomeMonsters";
import { loadExtendedBestiary } from "../../data/bestiary";
import { getMonsterCombatProfile } from "../../data/monsterCombatProfiles";
import {
  buildPlayableMonsterActions,
  formatActionMeta,
} from "../../utils/monsterRules";
import { getMonsterXp } from "../../utils/monsterXpTable";

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

function parseChallengeRating(cr) {
  const value = String(cr || "0").trim();

  if (value.includes("/")) {
    const [numerator, denominator] = value.split("/").map(Number);
    return denominator ? numerator / denominator : 0;
  }

  return Number(value) || 0;
}

function matchesCrFilter(monster, filter) {
  if (filter === "all") return true;

  const cr = parseChallengeRating(monster.cr);

  if (filter === "tiny") return cr <= 0.5;
  if (filter === "oneTwo") return cr >= 1 && cr <= 2;
  if (filter === "threeFive") return cr >= 3 && cr <= 5;
  if (filter === "sixTen") return cr >= 6 && cr <= 10;
  if (filter === "elevenPlus") return cr >= 11;

  return true;
}

export function BestiaryPanel({
  favoriteMonsterIds = [],
  onToggleFavoriteMonster,
  onAddMonsterToCombat,
}) {
  const [selectedBiomeId, setSelectedBiomeId] = useState(biomes[0].id);
  const [selectedMonsterId, setSelectedMonsterId] = useState(null);
  const [search, setSearch] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [crFilter, setCrFilter] = useState("all");
  const [monsterViewFilter, setMonsterViewFilter] = useState("all");
  const [combatFeedback, setCombatFeedback] = useState("");
  const [mobileDetailView, setMobileDetailView] = useState(null);
  const [isEncounterListCollapsed, setIsEncounterListCollapsed] =
    useState(false);
  const [extendedMonsters, setExtendedMonsters] = useState([]);
  const [isExtendedBestiaryLoading, setIsExtendedBestiaryLoading] =
    useState(false);
  const [extendedBestiaryError, setExtendedBestiaryError] = useState("");

  useEffect(() => {
    let isMounted = true;
    const timeoutId = setTimeout(() => {
      if (isMounted) {
        setIsExtendedBestiaryLoading(false);
        setExtendedBestiaryError("Caricamento bestiario esteso interrotto: timeout.");
      }
    }, 10000);

    setIsExtendedBestiaryLoading(true);
    setExtendedBestiaryError("");

    loadExtendedBestiary()
      .then((monsters) => {
        if (isMounted) setExtendedMonsters(monsters);
      })
      .catch((error) => {
        if (isMounted) {
          setExtendedBestiaryError(
            error?.message || "Archivio mostri esteso non disponibile."
          );
        }
      })
      .finally(() => {
        clearTimeout(timeoutId);
        if (isMounted) setIsExtendedBestiaryLoading(false);
      });

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  const favoriteMonsterSet = useMemo(
    () => new Set(Array.isArray(favoriteMonsterIds) ? favoriteMonsterIds : []),
    [favoriteMonsterIds]
  );

  const selectedBiome =
    biomes.find((biome) => biome.id === selectedBiomeId) || biomes[0];

  const bestiaryMonsters = useMemo(
    () => [...biomeMonsters, ...extendedMonsters],
    [extendedMonsters]
  );

  const biomeEncounters = useMemo(() => {
    return bestiaryMonsters
      .filter((monster) => monster.biomes.includes(selectedBiome.id))
      .sort(
        (a, b) =>
          getDifficultyRank(a.difficulty) - getDifficultyRank(b.difficulty)
      );
  }, [bestiaryMonsters, selectedBiome.id]);

  const creatureTypes = useMemo(() => {
    const allTypes = bestiaryMonsters.map((monster) => monster.type);
    return [...new Set(allTypes)].sort((a, b) => a.localeCompare(b));
  }, [bestiaryMonsters]);

  const filteredEncounters = useMemo(() => {
    const searchValue = normalizeText(search);

    return biomeEncounters.filter((monster) => {
      const combat = getMonsterCombatProfile(monster);

      const matchesSearch =
        normalizeText(monster.name).includes(searchValue) ||
        normalizeText(monster.type).includes(searchValue) ||
        normalizeText(monster.role).includes(searchValue) ||
        normalizeText(monster.tags?.join(" ")).includes(searchValue) ||
        normalizeText(combat.damage).includes(searchValue) ||
        normalizeText(combat.damageType).includes(searchValue);

      const matchesDifficulty =
        difficultyFilter === "all" ||
        normalizeText(monster.difficulty) === normalizeText(difficultyFilter);

      const matchesType =
        typeFilter === "all" || monster.type === typeFilter;

      const matchesCr = matchesCrFilter(monster, crFilter);
      const matchesFavorite =
        monsterViewFilter !== "favorites" || favoriteMonsterSet.has(monster.id);

      return (
        matchesSearch &&
        matchesDifficulty &&
        matchesType &&
        matchesCr &&
        matchesFavorite
      );
    });
  }, [
    biomeEncounters,
    crFilter,
    difficultyFilter,
    favoriteMonsterSet,
    monsterViewFilter,
    search,
    typeFilter,
  ]);

  const selectedMonsterCandidate = bestiaryMonsters.find(
    (monster) => monster.id === selectedMonsterId
  );

  const selectedMonster =
    (selectedMonsterCandidate &&
    (monsterViewFilter !== "favorites" ||
      favoriteMonsterSet.has(selectedMonsterCandidate.id))
      ? selectedMonsterCandidate
      : null) ||
    filteredEncounters[0] ||
    (monsterViewFilter === "favorites" ? null : biomeEncounters[0]);

  const visibleEncounters = useMemo(
    () => filteredEncounters.slice(0, 160),
    [filteredEncounters]
  );

  const selectedCombat = selectedMonster
    ? getMonsterCombatProfile(selectedMonster)
    : null;

  const selectedTechnicalActions = selectedMonster
    ? buildPlayableMonsterActions(selectedMonster)
    : [];

  function selectBiome(biomeId) {
    setSelectedBiomeId(biomeId);
    setSelectedMonsterId(null);
    setSearch("");
    setDifficultyFilter("all");
    setTypeFilter("all");
    setCrFilter("all");
    setCombatFeedback("");
    setMobileDetailView(null);
    setIsEncounterListCollapsed(false);
  }

  function selectMonster(monsterId) {
    setSelectedMonsterId(monsterId);
    setCombatFeedback("");
    setMobileDetailView("monsterDetail");
    setIsEncounterListCollapsed(true);
  }

  function toggleFavorite(monsterId) {
    if (onToggleFavoriteMonster) {
      onToggleFavoriteMonster(monsterId);
    }
  }

  function addSelectedMonsterToCombat() {
    if (!selectedMonster || !onAddMonsterToCombat) return;

    const addedMonster = onAddMonsterToCombat(selectedMonster);

    if (addedMonster) {
      setCombatFeedback(`${selectedMonster.name} aggiunto al combattimento.`);
    }
  }

  return (
    <div
      className={
        mobileDetailView === "monsterDetail"
          ? "bestiary-mobile-detail-open"
          : "bestiary-mobile-list-open"
      }
    >
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

        <div className="bestiary-database-status">
          {extendedBestiaryError
            ? `Archivio esteso non caricato: ${extendedBestiaryError}`
            : isExtendedBestiaryLoading
            ? "Caricamento archivio esteso..."
            : `Archivio esteso attivo: ${extendedMonsters.length} creature originali`}
        </div>

        <button
          className="bestiary-collapse-toggle"
          type="button"
          onClick={() =>
            setIsEncounterListCollapsed((isCollapsed) => !isCollapsed)
          }
        >
          {isEncounterListCollapsed
            ? "▼ Mostra creature"
            : "▲ Nascondi creature"}
        </button>

        <div className="bestiary-view-tabs" aria-label="Vista mostri">
          <button
            type="button"
            className={monsterViewFilter === "all" ? "active" : ""}
            onClick={() => setMonsterViewFilter("all")}
          >
            Tutti
          </button>

          <button
            type="button"
            className={monsterViewFilter === "favorites" ? "active" : ""}
            onClick={() => {
              setMonsterViewFilter("favorites");
              setSelectedMonsterId(null);
              setIsEncounterListCollapsed(false);
            }}
          >
            ★ Preferiti
          </button>
        </div>

        {isEncounterListCollapsed && selectedMonster && selectedCombat && (
          <div className="bestiary-selected-compact">
            <div>
              <span>Creatura selezionata</span>
              <strong>{selectedMonster.name}</strong>
            </div>

            <div>
              <span>Bioma</span>
              <strong>{selectedBiome.name}</strong>
            </div>

            <div>
              <span>GS</span>
              <strong>{selectedMonster.cr}</strong>
            </div>

            <div>
              <span>Allineamento</span>
              <strong>{selectedMonster.alignment || "Neutrale"}</strong>
            </div>

            <div>
              <span>Danno</span>
              <strong>
                {selectedCombat.damage} {selectedCombat.damageType}
              </strong>
            </div>

            <div>
              <span>Difficoltà</span>
              <strong>{selectedMonster.difficulty}</strong>
            </div>
          </div>
        )}

        <div
          className={
            isEncounterListCollapsed
              ? "biome-toolbar collapsed"
              : "biome-toolbar"
          }
        >
          <div className="bestiary-search">
            <span>⌕</span>
            <input
              value={search}
              placeholder="Cerca mostro, danno, ruolo o tag..."
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
            value={crFilter}
            onChange={(event) => setCrFilter(event.target.value)}
            aria-label="Filtro GS"
          >
            <option value="all">Tutti i GS</option>
            <option value="tiny">GS 0 - 1/2</option>
            <option value="oneTwo">GS 1 - 2</option>
            <option value="threeFive">GS 3 - 5</option>
            <option value="sixTen">GS 6 - 10</option>
            <option value="elevenPlus">GS 11+</option>
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

        <div
          className={
            isEncounterListCollapsed
              ? "encounter-list collapsed"
              : "encounter-list"
          }
        >
          {!isEncounterListCollapsed && visibleEncounters.map((monster) => {
            const difficultyClass = getDifficultyClass(monster.difficulty);
            const combat = getMonsterCombatProfile(monster);
            const isFavorite = favoriteMonsterSet.has(monster.id);

            return (
              <button
                key={monster.id}
                className={
                  selectedMonster?.id === monster.id
                    ? "encounter-row active"
                    : "encounter-row"
                }
                onClick={() => selectMonster(monster.id)}
              >
                <span
                  className={
                    isFavorite
                      ? "encounter-favorite-button active"
                      : "encounter-favorite-button"
                  }
                  role="button"
                  tabIndex={0}
                  aria-label={
                    isFavorite
                      ? "Rimuovi mostro dai preferiti"
                      : "Aggiungi mostro ai preferiti"
                  }
                  title={
                    isFavorite
                      ? "Rimuovi dai preferiti"
                      : "Aggiungi ai preferiti"
                  }
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleFavorite(monster.id);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      event.stopPropagation();
                      toggleFavorite(monster.id);
                    }
                  }}
                >
                  {isFavorite ? "★" : "☆"}
                </span>

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
                      {monster.type} · {monster.role} · GS {monster.cr}
                    </span>
                    <span className="encounter-damage-line">
                      Danno: {combat.damage} {combat.damageType}
                    </span>
                  </div>
                </div>

                <div className="encounter-meta">
                  <span className={`difficulty-badge ${difficultyClass}`}>
                    {monster.difficulty}
                  </span>
                  <span className="damage-pill">
                    DMG {combat.averageDamage}
                  </span>
                  <span className="encounter-cr">GS {monster.cr}</span>
                </div>
              </button>
            );
          })}

          {!isEncounterListCollapsed && filteredEncounters.length > visibleEncounters.length && (
            <div className="bestiary-empty-state">
              Mostro i primi {visibleEncounters.length} risultati. Usa ricerca o filtri
              per restringere la lista.
            </div>
          )}

          {!isEncounterListCollapsed && filteredEncounters.length === 0 && (
            <div className="bestiary-empty-state">
              {monsterViewFilter === "favorites"
                ? "Nessun mostro preferito in questo bioma."
                : "Nessun mostro corrisponde ai filtri attivi."}
            </div>
          )}
        </div>
      </section>

      {selectedMonster && selectedCombat && (
        <section className="bestiary-detail fantasy-card">
          <button
            className="mobile-back-button bestiary-mobile-back"
            type="button"
            onClick={() => {
              setMobileDetailView(null);
              setIsEncounterListCollapsed(false);
            }}
          >
            ← Indietro
          </button>

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

              <div className="monster-detail-actions">
                <button
                  className={
                    favoriteMonsterSet.has(selectedMonster.id)
                      ? "favorite-toggle active"
                      : "favorite-toggle"
                  }
                  type="button"
                  onClick={() => toggleFavorite(selectedMonster.id)}
                  aria-label={
                    favoriteMonsterSet.has(selectedMonster.id)
                      ? "Rimuovi mostro dai preferiti"
                      : "Aggiungi mostro ai preferiti"
                  }
                >
                  {favoriteMonsterSet.has(selectedMonster.id) ? "★" : "☆"}
                </button>

                <button
                  className="bestiary-add-combat-button"
                  type="button"
                  onClick={addSelectedMonsterToCombat}
                >
                  Aggiungi al combattimento
                </button>
              </div>

              {combatFeedback && (
                <div className="bestiary-feedback" role="status">
                  {combatFeedback}
                </div>
              )}

              <p>
                {selectedMonster.type} · {selectedMonster.role}
              </p>

              <div className="monster-stat-pills">
                <span>CA {selectedMonster.armorClass}</span>
                <span>PF {selectedMonster.hitPoints}</span>
                <span>VEL {selectedMonster.speed}</span>
                <span>GS {selectedMonster.cr}</span>
                <span>ALL {selectedMonster.alignment || "Neutrale"}</span>
                <span className="xp-pill">XP {getMonsterXp(selectedMonster)}</span>
              </div>

              <div className="monster-tags">
                {selectedMonster.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="monster-damage-panel">
            <div className="monster-damage-title">Profilo offensivo</div>

            <div className="monster-damage-grid">
              <div>
                <span>Bonus al colpire</span>
                <strong>{selectedCombat.attackBonus}</strong>
              </div>

              <div>
                <span>Danno base</span>
                <strong>{selectedCombat.damage}</strong>
              </div>

              <div>
                <span>Danno medio</span>
                <strong>{selectedCombat.averageDamage}</strong>
              </div>

              <div>
                <span>Tipo</span>
                <strong>{selectedCombat.damageType}</strong>
              </div>
            </div>

            <p>{selectedCombat.damageNote}</p>
          </div>

          <div className="monster-section">
            <h3>Descrizione</h3>
            <p>{selectedMonster.description}</p>
            <p>{selectedMonster.story}</p>
          </div>

          <div className="monster-section playable-actions-section">
            <h3>Azioni giocabili</h3>

            <p className="monster-actions-intro">
              Una creatura normalmente usa una di queste opzioni come azione nel
              suo turno. Le formule sono promemoria: il Master o i giocatori
              tirano i dadi reali e applicano il risultato.
            </p>

            <div className="playable-actions-list">
              {selectedTechnicalActions.map((action, index) => (
                <article className="playable-action-card" key={`${action.name}-${index}`}>
                  <div className="playable-action-header">
                    <div>
                      <span>{action.actionCost || "Azione"}</span>
                      <strong>{action.name}</strong>
                    </div>

                    <em>{action.type}</em>
                  </div>

                  <div className="playable-action-meta">
                    {formatActionMeta(action)}
                  </div>

                  {action.attackBonus !== null && action.attackBonus !== undefined && (
                    <p>
                      <strong>Tiro per colpire:</strong> il mostro tira d20 +
                      {action.attackBonus}. Colpisce se raggiunge la CA del
                      bersaglio.
                    </p>
                  )}

                  {action.savingThrow && (
                    <div className="playable-save-box">
                      <strong>
                        TS {String(action.savingThrow.ability).toUpperCase()} CD{" "}
                        {action.savingThrow.dc}
                      </strong>
                      <span>Successo: {action.savingThrow.success}</span>
                      <span>Fallimento: {action.savingThrow.failure}</span>
                    </div>
                  )}

                  {action.hit && (
                    <p>
                      <strong>Colpito:</strong> {action.hit}
                    </p>
                  )}

                  {action.damage && !action.hit && (
                    <p>
                      <strong>Danno:</strong> {action.damage}{" "}
                      {action.damageType || ""}
                    </p>
                  )}

                  {action.description && <p>{action.description}</p>}

                  <div className="playable-action-flags">
                    {action.target && <span>Bersaglio: {action.target}</span>}
                    {action.concentration && <span>Concentrazione</span>}
                    {action.duration && <span>Durata: {action.duration}</span>}
                    {action.uses && <span>Usi: {action.uses}</span>}
                  </div>
                </article>
              ))}
            </div>

            {selectedMonster.actions && (
              <details className="legacy-actions-note">
                <summary>Note narrative originali</summary>
                <p>{selectedMonster.actions}</p>
              </details>
            )}
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
    </div>
  );
}
