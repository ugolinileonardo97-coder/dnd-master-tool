import { useEffect, useMemo, useState } from "react";
import {
  filterWeapons,
  getWeaponFilterOptions,
  loadWeaponCatalog,
  sortWeapons,
  toInventoryWeapon,
  weaponSortOptions,
} from "../../data/weapons/index.js";

const categories = [
  { key: "Armi", label: "Armi", icon: "⚔️" },
  { key: "Armature", label: "Armature", icon: "🛡️" },
  { key: "Pozioni", label: "Pozioni", icon: "🧪" },
  { key: "Oggetti", label: "Oggetti", icon: "📦" },
  { key: "Varie", label: "Varie", icon: "🎒" },
];

function getItemCategory(item) {
  return ["Armi", "Armature", "Pozioni", "Oggetti"].includes(item.category)
    ? item.category
    : "Varie";
}

function getCategoryMeta(categoryKey) {
  return (
    categories.find((category) => category.key === categoryKey) ||
    categories[categories.length - 1]
  );
}

function getRarityLabel(item) {
  return item.rarity || "Comune";
}

function getRarityClass(rarity) {
  const normalized = String(rarity || "Comune").toLowerCase();
  if (normalized.includes("leggendaria") || normalized.includes("leggendario")) return "legendary";
  if (normalized.includes("molto rara") || normalized.includes("molto raro")) return "very-rare";
  if (normalized.includes("rara") || normalized.includes("raro")) return "rare";
  if (normalized.includes("non comune")) return "uncommon";
  return "common";
}

function getItemDescription(item) {
  return item.description || item.notes || "Nessuna descrizione disponibile.";
}

function getItemEffect(item) {
  return item.effect || "Nessun effetto speciale.";
}

function getItemDamage(item) {
  if (item.damage) return item.damage;
  if (getItemCategory(item) === "Armi") return item.details || "Danno non specificato.";
  return "N/A";
}

function getItemQuantity(item) {
  return item.quantity || item.qty || 1;
}

function useSmartphoneLayout() {
  const [isSmartphone, setIsSmartphone] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const updateLayout = () => setIsSmartphone(mediaQuery.matches);

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);

    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);

  return isSmartphone;
}

export function InventoryTable({
  inventory = [],
  onAddInventoryItem,
  onDeleteInventoryItem,
}) {
  const [activeCategory, setActiveCategory] = useState("Armi");
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showWeaponCatalog, setShowWeaponCatalog] = useState(false);
  const [weaponCatalog, setWeaponCatalog] = useState([]);
  const [weaponCatalogLoading, setWeaponCatalogLoading] = useState(false);
  const [weaponCatalogError, setWeaponCatalogError] = useState(null);
  const [weaponCatalogRetryKey, setWeaponCatalogRetryKey] = useState(0);
  const [visibleWeaponLimit, setVisibleWeaponLimit] = useState(60);
  const [weaponFilters, setWeaponFilters] = useState({
    search: "",
    category: "",
    rarity: "",
    biome: "",
    damageType: "",
    minLevel: 1,
    maxLevel: 20,
    sortBy: "rarity",
  });
  const isSmartphone = useSmartphoneLayout();
  const isWeaponCatalogOpen = activeCategory === "Armi" && showWeaponCatalog;

  const filteredInventory = useMemo(
    () => inventory.filter((item) => getItemCategory(item) === activeCategory),
    [activeCategory, inventory]
  );

  const selectedItem = useMemo(
    () => inventory.find((item) => item.id === selectedItemId) || null,
    [inventory, selectedItemId]
  );

  const safeWeaponCatalog = useMemo(
    () => (Array.isArray(weaponCatalog) ? weaponCatalog : []),
    [weaponCatalog]
  );

  const weaponFilterOptions = useMemo(
    () => getWeaponFilterOptions(safeWeaponCatalog),
    [safeWeaponCatalog]
  );

  const filteredWeaponResults = useMemo(() => {
    const filtered = filterWeapons(safeWeaponCatalog, weaponFilters);
    return sortWeapons(filtered, weaponFilters.sortBy);
  }, [safeWeaponCatalog, weaponFilters]);

  const visibleWeapons = useMemo(
    () => filteredWeaponResults.slice(0, visibleWeaponLimit),
    [filteredWeaponResults, visibleWeaponLimit]
  );

  useEffect(() => {
    setVisibleWeaponLimit(isSmartphone ? 20 : 60);
  }, [isSmartphone]);

  useEffect(() => {
    if (!showWeaponCatalog) return;
    if (weaponCatalog.length > 0) return;

    let isMounted = true;
    const controller = new AbortController();

    async function loadCatalog() {
      setWeaponCatalogLoading(true);
      setWeaponCatalogError(null);

      try {
        const catalog = await loadWeaponCatalog({
          signal: controller.signal,
          timeoutMs: 8000,
        });

        if (!isMounted) return;

        setWeaponCatalog(Array.isArray(catalog) ? catalog : []);
      } catch (error) {
        if (!isMounted || controller.signal.aborted) return;

        console.error("Weapon catalog load failed", error);
        setWeaponCatalogError(
          error?.message || "Non riesco a caricare il catalogo armi su questo dispositivo."
        );
      } finally {
        if (isMounted) {
          setWeaponCatalogLoading(false);
        }
      }
    }

    loadCatalog();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [showWeaponCatalog, weaponCatalog.length, weaponCatalogRetryKey]);

  function retryWeaponCatalogLoad() {
    setWeaponCatalog([]);
    setWeaponCatalogError(null);
    setWeaponCatalogRetryKey((current) => current + 1);
  }

  function updateWeaponFilter(field, value) {
    setWeaponFilters((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function countByCategory(categoryKey) {
    return inventory.filter((item) => getItemCategory(item) === categoryKey).length;
  }

  function renderMechanicalBadges(item) {
    const category = getItemCategory(item);
    const badges = [];

    // Armature (non scudi)
    if (category === "Armature" && item.armorClass && !item.shieldBonus) {
      badges.push(`CA ${item.armorClass}`);
      if (item.armorType) badges.push(item.armorType);
      if (item.penalty) badges.push(item.penalty);
    }

    // Scudi
    if (item.shieldBonus) {
      badges.push(`+${item.shieldBonus} CA`);
    }

    // Pozioni: bonus
    if (category === "Pozioni") {
      if (item.duration) badges.push(`Durata: ${item.duration}`);
      if (item.resistances && item.resistances.length) {
        badges.push(`Resiste: ${item.resistances.join(", ")}`);
      }
    }

    return badges.length ? (
      <div className="inventory-detail-badges">
        {badges.map((badge, index) => (
          <span key={index} className="badge">{badge}</span>
        ))}
      </div>
    ) : null;
  }

  function renderMechanicalLists(item) {
    const category = getItemCategory(item);
    const sections = [];

    // Armature: special effect
    if (category === "Armature" && item.specialEffect && !item.shieldBonus) {
      sections.push({ label: "Effetto speciale", content: item.specialEffect });
    }

    // Scudi: special effect
    if (item.shieldBonus && item.specialEffect) {
      sections.push({ label: "Effetto speciale", content: item.specialEffect });
    }

    // Pozioni
    if (category === "Pozioni") {
      if (item.mechanicalEffect) {
        sections.push({ label: "Effetto meccanico", content: item.mechanicalEffect });
      }
      if (item.bonuses && item.bonuses.length) {
        sections.push({ label: "Bonus", content: item.bonuses.map((b) => `+ ${b}`).join(" / ") });
      }
      if (item.penalties && item.penalties.length) {
        sections.push({ label: "Malus", content: item.penalties.map((p) => `− ${p}`).join(" / ") });
      }
    }

    return sections.map((section, index) => (
      <section key={index} className="inventory-detail-section">
        <h4>{section.label}</h4>
        <p>{section.content}</p>
      </section>
    ));
  }

  function renderItemDetail(item, mobile = false) {
    const category = getItemCategory(item);
    const categoryMeta = getCategoryMeta(category);
    const rarity = getRarityLabel(item);
    const rarityClass = getRarityClass(rarity);

    const isArmor = category === "Armature";
    const isPotion = category === "Pozioni";

    return (
      <section className={mobile ? "mobile-item-detail inventory-detail-panel" : "inventory-detail-panel"}>
        {mobile && (
          <button
            className="mobile-back-button"
            type="button"
            onClick={() => setSelectedItemId(null)}
          >
            ← Indietro
          </button>
        )}

        <div className="inventory-detail-header compact">
          <div>
            <p className="inventory-detail-kicker">{categoryMeta.icon} {categoryMeta.label}</p>
            <h3 className="inventory-detail-title">{item.name || "Oggetto senza nome"}</h3>
            <div className="inventory-detail-meta">
              <span className={`inventory-rarity-pill ${rarityClass}`}>{rarity}</span>
              <span className="inventory-quantity-pill">x{getItemQuantity(item)}</span>
            </div>
          </div>

          <button
            className="icon-button inventory-delete-button"
            type="button"
            onClick={() => {
              onDeleteInventoryItem(item.id);
              setSelectedItemId(null);
            }}
            aria-label="Rimuovi oggetto"
          >
            ✕
          </button>
        </div>

        {renderMechanicalBadges(item)}

        <section className="inventory-detail-section">
          <h4>Descrizione</h4>
          <p>{getItemDescription(item)}</p>
        </section>

        {renderMechanicalLists(item)}

        {(isArmor || isPotion) ? null : (
          <section className="inventory-detail-section">
            <h4>Effetto</h4>
            <p>{getItemEffect(item)}</p>
          </section>
        )}

        <section className="inventory-detail-section">
          <h4>Danno</h4>
          <p>{getItemDamage(item)}</p>
        </section>
      </section>
    );
  }

  if (isSmartphone && selectedItem && !isWeaponCatalogOpen) {
    return (
      <section id="merchant-inventory" className="inventory-card fantasy-card panel-inventory">
        {renderItemDetail(selectedItem, true)}
      </section>
    );
  }

  return (
    <section id="merchant-inventory" className="inventory-card fantasy-card panel-inventory">
      <div className="card-title-row inventory-title-row">
        <div>
          <div className="card-icon">📜</div>
          <h2>Inventario</h2>
        </div>

        {!isWeaponCatalogOpen && (
          <button className="primary-button compact" type="button" onClick={onAddInventoryItem}>
            + Aggiungi Oggetto
          </button>
        )}
      </div>

      {!isWeaponCatalogOpen && (
      <div className="inventory-tabs">
        {categories.map((category) => (
          <button
            key={category.key}
            className={activeCategory === category.key ? "inventory-tab active" : "inventory-tab"}
            type="button"
            onClick={() => {
              setActiveCategory(category.key);
              setSelectedItemId(null);
              setShowWeaponCatalog(false);
            }}
          >
            <span className="inventory-tab-label">
              <span aria-hidden="true">{category.icon}</span>
              {category.label}
            </span>
            <span>{countByCategory(category.key)}</span>
          </button>
        ))}
      </div>
      )}

      {activeCategory === "Armi" && !isWeaponCatalogOpen && (
        <div className="weapon-catalog-toggle-row">
          <button
            className="secondary-button compact"
            type="button"
            onClick={() => setShowWeaponCatalog(true)}
          >
            Sfoglia catalogo armi
          </button>
          <span>Database armi originale: ricerca e aggiunta rapida.</span>
        </div>
      )}

      {isWeaponCatalogOpen ? (
        <>
        <div className="weapon-catalog-toggle-row catalog-open">
          <button
            className="secondary-button compact"
            type="button"
            onClick={() => setShowWeaponCatalog(false)}
          >
            Chiudi catalogo armi
          </button>
          <span>Database armi originale: ricerca e aggiunta rapida.</span>
        </div>

        <section className="weapon-catalog-panel catalog-only">
          <div className="weapon-catalog-filters">
            <label>
              Cerca
              <input
                value={weaponFilters.search}
                onChange={(event) => updateWeaponFilter("search", event.target.value)}
                placeholder="Nome, effetto, proprieta..."
              />
            </label>

            <label>
              Categoria
              <select
                value={weaponFilters.category}
                onChange={(event) => updateWeaponFilter("category", event.target.value)}
              >
                <option value="">Tutte</option>
                {weaponFilterOptions.categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </label>

            <label>
              Rarita
              <select
                value={weaponFilters.rarity}
                onChange={(event) => updateWeaponFilter("rarity", event.target.value)}
              >
                <option value="">Tutte</option>
                {weaponFilterOptions.rarities.map((rarity) => (
                  <option key={rarity} value={rarity}>{rarity}</option>
                ))}
              </select>
            </label>

            <label>
              Bioma
              <select
                value={weaponFilters.biome}
                onChange={(event) => updateWeaponFilter("biome", event.target.value)}
              >
                <option value="">Tutti</option>
                {weaponFilterOptions.biomes.map((biome) => (
                  <option key={biome} value={biome}>{biome}</option>
                ))}
              </select>
            </label>

            <label>
              Danno
              <select
                value={weaponFilters.damageType}
                onChange={(event) => updateWeaponFilter("damageType", event.target.value)}
              >
                <option value="">Tutti</option>
                {weaponFilterOptions.damageTypes.map((damageType) => (
                  <option key={damageType} value={damageType}>{damageType}</option>
                ))}
              </select>
            </label>

            <label>
              Liv. min
              <input
                type="number"
                min="1"
                max="20"
                value={weaponFilters.minLevel}
                onChange={(event) => updateWeaponFilter("minLevel", event.target.value)}
              />
            </label>

            <label>
              Liv. max
              <input
                type="number"
                min="1"
                max="20"
                value={weaponFilters.maxLevel}
                onChange={(event) => updateWeaponFilter("maxLevel", event.target.value)}
              />
            </label>

            <label>
              Ordina
              <select
                value={weaponFilters.sortBy}
                onChange={(event) => updateWeaponFilter("sortBy", event.target.value)}
              >
                {weaponSortOptions.map((option) => (
                  <option key={option.id} value={option.id}>{option.label}</option>
                ))}
              </select>
            </label>
          </div>

          {weaponCatalogLoading ? (
            <div className="inventory-empty">Caricamento catalogo armi...</div>
          ) : weaponCatalogError ? (
            <div className="inventory-empty weapon-catalog-error">
              <p>Non riesco a caricare il catalogo armi su questo dispositivo.</p>
              <small>{weaponCatalogError}</small>
              <button className="secondary-button compact" type="button" onClick={retryWeaponCatalogLoad}>
                Riprova
              </button>
            </div>
          ) : (
            <>
              <div className="weapon-catalog-summary">
                Mostro {visibleWeapons.length} risultati su {safeWeaponCatalog.length} armi.
              </div>
              <div className="weapon-catalog-grid">
                {visibleWeapons.map((weapon) => (
                  <article className="weapon-catalog-card" key={weapon.id}>
                    <div className="weapon-catalog-card-header">
                      <div>
                        <strong>{weapon.name}</strong>
                        <span>{weapon.weaponCategory} · {weapon.rarity}</span>
                      </div>
                      <em>{weapon.price}</em>
                    </div>
                    <div className="weapon-catalog-meta">
                      <span>{weapon.damage} {weapon.damageType}</span>
                      <span>Liv. {weapon.minLevel}</span>
                      <span>{weapon.biome}</span>
                    </div>
                    <p>{weapon.description}</p>
                    <small>{weapon.effect || "Nessun effetto speciale."}</small>
                    <button
                      className="primary-button compact"
                      type="button"
                      onClick={() => onAddInventoryItem(toInventoryWeapon(weapon))}
                    >
                      + Aggiungi
                    </button>
                  </article>
                ))}
              </div>
              {visibleWeapons.length < filteredWeaponResults.length && (
                <button className="secondary-button compact" type="button" onClick={() => setVisibleWeaponLimit((current) => current + (isSmartphone ? 20 : 60))}>
                  Mostra altri
                </button>
              )}
            </>
          )}
        </section>
        </>
      ) : (

      <div className="inventory-browser">
        <div className="inventory-compact-list">
          {filteredInventory.length === 0 ? (
            <div className="inventory-empty">Nessun oggetto in questa categoria.</div>
          ) : (
            filteredInventory.map((item) => {
              const categoryMeta = getCategoryMeta(getItemCategory(item));
              const rarity = getRarityLabel(item);
              return (
                <button
                  className={selectedItem?.id === item.id ? "inventory-compact-row active" : "inventory-compact-row"}
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedItemId(item.id)}
                >
                  <div>
                    <strong>{item.name || "Oggetto senza nome"}</strong>
                    <span><span aria-hidden="true">{categoryMeta.icon}</span> {rarity} · x{getItemQuantity(item)}</span>
                  </div>
                  <em>{item.price || "—"}</em>
                </button>
              );
            })
          )}
        </div>

        {!isSmartphone && (
          selectedItem ? (
            renderItemDetail(selectedItem)
          ) : (
            <aside className="inventory-detail-panel empty">
              <h3>Seleziona un oggetto</h3>
              <p>Clicca un oggetto nella lista per vedere descrizione, effetto e danno.</p>
            </aside>
          )
        )}
      </div>
      )}
    </section>
  );
}
