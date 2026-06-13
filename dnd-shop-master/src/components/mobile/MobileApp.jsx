import { useMemo, useState } from "react";
import {
  getMerchantRegionLabel,
  merchantRegions,
} from "../../data/merchantRegions";
import { biomes } from "../../data/biomes";
import { biomeMonsters } from "../../data/biomeMonsters";
import { getMonsterCombatProfile } from "../../data/monsterCombatProfiles";
import {
  buildPlayableMonsterActions,
  formatActionMeta,
} from "../../utils/monsterRules";
import {
  formatAbilityModifier,
  getAbilityLabel,
} from "../../utils/monsterStats";
import { SettingsPanel } from "../settings/SettingsPanel";
import { MobileBottomNav } from "./MobileBottomNav";
import { MobileCombat } from "./MobileCombat";

function getItemText(item) {
  return item?.notes || item?.description || item?.effect || item?.damage || "";
}

function getItemShortEffect(item) {
  // Brief one-liner for list view. Per TASK 4: NO long descriptions in list.
  const raw = item?.effect || item?.damage || "";
  if (!raw) return "";
  const text = String(raw).replace(/\s+/g, " ").trim();
  return text.length > 60 ? text.slice(0, 57) + "..." : text;
}

function getMapRegion(item, fallback = "generic") {
  return (
    item?.mapRegion ||
    item?.geographicRegion ||
    item?.region ||
    item?.area ||
    fallback
  );
}

function parseCr(cr) {
  const value = String(cr || "0");

  if (value.includes("/")) {
    const [top, bottom] = value.split("/").map(Number);
    return bottom ? top / bottom : 0;
  }

  return Number(value) || 0;
}

function MobileBack({ onClick, label = "Indietro" }) {
  return (
    <button
      className="mobile-native-back"
      type="button"
      onClick={onClick}
      data-testid="mobile-back-button"
    >
      <span aria-hidden="true" className="mobile-back-arrow">
        ‹
      </span>
      {label}
    </button>
  );
}

function MobileScreen({ children, title, kicker, onBack, action, testId }) {
  return (
    <main className="mobile-native-screen" data-testid={testId}>
      {onBack && <MobileBack onClick={onBack} />}
      {(title || kicker || action) && (
        <header className="mobile-native-header fantasy-card">
          <div>
            {kicker && <span>{kicker}</span>}
            {title && <h1>{title}</h1>}
          </div>
          {action}
        </header>
      )}
      {children}
    </main>
  );
}

function MobileTabs({ tabs, activeTab, onChange }) {
  return (
    <nav className="mobile-native-tabs" aria-label="Sezioni">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={activeTab === tab.id ? "active" : ""}
          onClick={() => onChange(tab.id)}
          data-testid={`mobile-tab-${tab.id}`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

function BadgeRow({ children }) {
  return <div className="mobile-native-badges">{children}</div>;
}

function FavoriteStar({ active, onClick, label = "Preferito" }) {
  return (
    <button
      className={`mobile-favorite-icon ${active ? "is-on" : ""}`}
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active ? "true" : "false"}
      data-testid="mobile-favorite-toggle"
    >
      <span aria-hidden="true">{active ? "★" : "☆"}</span>
    </button>
  );
}

export function MobileApp(props) {
  const [mobileScreen, setMobileScreen] = useState("home");
  const [mobileDetailId, setMobileDetailId] = useState(null);
  const [mobileItemId, setMobileItemId] = useState(null);
  const [mobileItemSource, setMobileItemSource] = useState("merchantDetail");
  const [activeMobileTab, setActiveMobileTab] = useState("overview");
  const [selectedBiomeId, setSelectedBiomeId] = useState(biomes[0]?.id || "");
  const [bestiarySearch, setBestiarySearch] = useState("");
  const [bestiaryCrFilter, setBestiaryCrFilter] = useState("all");
  const [showFavoriteMonstersOnly, setShowFavoriteMonstersOnly] =
    useState(false);
  const [mobileCombatTab, setMobileCombatTab] = useState("prep");

  const shops = props.merchants.filter((item) => item.type !== "tavern");
  const taverns = props.merchants.filter((item) => item.type === "tavern");
  const selectedEntity =
    props.merchants.find((item) => item.id === mobileDetailId) || null;
  const selectedInventoryItem = selectedEntity?.inventory?.find(
    (item) => item.id === mobileItemId
  );
  const favoriteMonsterSet = useMemo(
    () => new Set(props.favoriteMonsterIds || []),
    [props.favoriteMonsterIds]
  );
  const selectedBiome =
    biomes.find((biome) => biome.id === selectedBiomeId) || biomes[0];
  const biomeMonstersList = useMemo(() => {
    const search = bestiarySearch.trim().toLowerCase();

    return biomeMonsters.filter((monster) => {
      const combat = getMonsterCombatProfile(monster);
      const cr = parseCr(monster.cr);
      const matchesBiome = monster.biomes.includes(selectedBiome?.id);
      const matchesSearch =
        !search ||
        [
          monster.name,
          monster.type,
          monster.role,
          monster.cr,
          combat.damage,
          combat.damageType,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(search);
      const matchesCr =
        bestiaryCrFilter === "all" ||
        (bestiaryCrFilter === "low" && cr <= 0.5) ||
        (bestiaryCrFilter === "mid" && cr >= 1 && cr <= 3) ||
        (bestiaryCrFilter === "high" && cr >= 4);
      const matchesFavorite =
        !showFavoriteMonstersOnly || favoriteMonsterSet.has(monster.id);

      return matchesBiome && matchesSearch && matchesCr && matchesFavorite;
    });
  }, [
    bestiaryCrFilter,
    bestiarySearch,
    favoriteMonsterSet,
    selectedBiome?.id,
    showFavoriteMonstersOnly,
  ]);
  const selectedMonster = biomeMonsters.find(
    (monster) => monster.id === mobileDetailId
  );
  const selectedMonsterCombat = selectedMonster
    ? getMonsterCombatProfile(selectedMonster)
    : null;
  const selectedMonsterActions = selectedMonster
    ? buildPlayableMonsterActions(selectedMonster)
    : [];

  const mapRegions = merchantRegions.map((region) => {
    const items = props.merchants.filter((item) => getMapRegion(item) === region.id);

    return {
      ...region,
      shops: items.filter((item) => item.type !== "tavern"),
      taverns: items.filter((item) => item.type === "tavern"),
    };
  });
  const selectedMapRegion = mapRegions.find(
    (region) => region.id === mobileDetailId
  );

  function goHome() {
    setMobileScreen("home");
    setMobileDetailId(null);
    setMobileItemId(null);
    setActiveMobileTab("overview");
  }

  function openGeneratedEntity(type, regionId = null) {
    const generated = props.onAddGeneratedMerchant(
      type === "tavern" ? "tavern" : "shop",
      regionId
    );

    if (!generated) return;

    props.onSelectMerchant(generated.id);
    setMobileDetailId(generated.id);
    setMobileItemId(null);
    setActiveMobileTab("overview");
    setMobileScreen(type === "tavern" ? "tavernDetail" : "merchantDetail");
  }

  function navigatePrimary(screen) {
    if (screen === "combat") {
      setMobileCombatTab("prep");
    }

    setMobileDetailId(null);
    setMobileItemId(null);
    setActiveMobileTab("overview");
    setMobileScreen(screen);
  }

  function openMerchant(item) {
    props.onSelectMerchant(item.id);
    setMobileDetailId(item.id);
    setMobileItemId(null);
    setActiveMobileTab("overview");
    setMobileScreen(item.type === "tavern" ? "tavernDetail" : "merchantDetail");
  }

  function updateEntity(field, value) {
    if (!selectedEntity) return;
    props.onSelectMerchant(selectedEntity.id);
    props.onUpdateMerchant(field, value);
  }

  function renderHome() {
    const navItems = [
      ["merchantsList", "Mercanti", `${shops.length} schede`],
      ["tavernsList", "Locande", `${taverns.length} luoghi`],
      ["bestiaryList", "Bestiario", "Mostri per bioma"],
      ["combat", "Combattimento", "Tracker turni"],
      ["mapList", "Mappa", "Zone campagna"],
      ["settings", "Impostazioni", "Partite salvate"],
    ];

    return (
      <MobileScreen
        title="D&D Shop"
        kicker="Assistente Master"
        testId="mobile-home"
      >
        <section className="mobile-session-strip fantasy-card">
          <div>
            <span>Partita attiva</span>
            <strong data-testid="mobile-active-session">
              {props.activeSessionName || "Partita non salvata"}
            </strong>
          </div>
          <small>{getMerchantRegionLabel(props.sessionRegion)}</small>
          {props.partyLevel && <small>Livello party {props.partyLevel}</small>}
        </section>

        <section className="mobile-nav-list fantasy-card">
          <span className="mobile-block-label">Navigazione</span>
          {navItems.map(([screen, title, subtitle]) => (
            <button
              key={screen}
              type="button"
              data-testid={`mobile-nav-${screen}`}
              onClick={() => navigatePrimary(screen)}
            >
              <div>
                <strong>{title}</strong>
                <small>{subtitle}</small>
              </div>
              <span aria-hidden="true">›</span>
            </button>
          ))}
        </section>
      </MobileScreen>
    );
  }

  function renderMerchantList(items, title, emptyText, type) {
    const generateLabel = type === "tavern" ? "+ Genera locanda" : "+ Genera mercante";
    return (
      <MobileScreen
        title={title}
        kicker="Lista"
        onBack={goHome}
        testId={`mobile-${type === "tavern" ? "taverns" : "merchants"}-list`}
      >
        <button
          type="button"
          className="mobile-primary-wide"
          data-testid={`mobile-generate-${type}`}
          onClick={() => openGeneratedEntity(type)}
        >
          {generateLabel}
        </button>
        <div className="mobile-native-list compact">
          {items.length === 0 ? (
            <div className="mobile-native-empty fantasy-card">{emptyText}</div>
          ) : (
            items.map((item) => (
              <button
                className="mobile-native-row compact"
                key={item.id}
                type="button"
                onClick={() => openMerchant(item)}
                data-testid={`mobile-list-row-${item.id}`}
              >
                <div>
                  <strong>
                    {item.type === "tavern" ? item.shopName : item.name}
                    {item.favorite ? (
                      <span className="mobile-row-star" aria-hidden="true">
                        {" "}★
                      </span>
                    ) : null}
                  </strong>
                  <span>{item.type === "tavern" ? item.name : item.shopName}</span>
                </div>
                <BadgeRow>
                  <span>{getMerchantRegionLabel(item.region)}</span>
                  <span>{item.reputation || "N.d."}</span>
                </BadgeRow>
              </button>
            ))
          )}
        </div>
      </MobileScreen>
    );
  }

  function renderMerchantDetail() {
    if (!selectedEntity) {
      return renderMerchantList(shops, "Mercanti", "Nessun mercante.", "shop");
    }

    const tabs = [
      ["overview", "Panoramica"],
      ["inventory", "Inventario"],
      ["quest", "Quest"],
      ["edit", "Modifica"],
      ["map", "Mappa"],
    ].map(([id, label]) => ({ id, label }));

    return (
      <MobileScreen
        title={selectedEntity.name}
        kicker={selectedEntity.shopName}
        onBack={() => setMobileScreen("merchantsList")}
        testId="mobile-merchant-detail"
        action={
          <FavoriteStar
            active={!!selectedEntity.favorite}
            onClick={() => props.onToggleMerchantFavorite(selectedEntity.id)}
            label="Preferito mercante"
          />
        }
      >
        <BadgeRow>
          <span>{getMerchantRegionLabel(selectedEntity.region)}</span>
          <span>{selectedEntity.reputation || "Sconosciuto"}</span>
          <span>{selectedEntity.alignment || "Neutrale"}</span>
          <span>{selectedEntity.shopTier || "Comune"}</span>
          <span>Sconti {selectedEntity.discount || "Basso"}</span>
        </BadgeRow>

        <MobileTabs
          tabs={tabs}
          activeTab={activeMobileTab}
          onChange={setActiveMobileTab}
        />

        {activeMobileTab === "overview" && (
          <section className="mobile-native-detail fantasy-card">
            <p>{selectedEntity.story || "Descrizione mercante non definita."}</p>
            <p>
              {selectedEntity.locationDescription ||
                "Descrizione bottega non definita."}
            </p>
          </section>
        )}

        {activeMobileTab === "inventory" && renderInventoryContent("merchantDetail")}
        {activeMobileTab === "quest" && renderQuestContent("merchant")}
        {activeMobileTab === "edit" && renderEditContent()}
        {activeMobileTab === "map" && renderMapPositionContent()}
      </MobileScreen>
    );
  }

  function renderInventoryContent(source = "merchantDetail") {
    if (!selectedEntity) return null;

    return (
      <section
        className="mobile-native-list compact"
        data-testid="mobile-inventory-list"
      >
        {(selectedEntity.inventory || []).length === 0 ? (
          <div className="mobile-native-empty fantasy-card">Inventario vuoto.</div>
        ) : (
          selectedEntity.inventory.map((item) => {
            const shortEffect = getItemShortEffect(item);
            return (
              <button
                className="mobile-native-row compact"
                key={item.id}
                type="button"
                onClick={() => {
                  setMobileItemId(item.id);
                  setMobileItemSource(source);
                  setMobileScreen("itemDetail");
                }}
                data-testid={`mobile-inventory-row-${item.id}`}
              >
                <div>
                  <strong>{item.name || "Oggetto senza nome"}</strong>
                  <span>
                    {item.rarity || "Comune"}
                    {shortEffect ? ` · ${shortEffect}` : ""}
                  </span>
                </div>
                <BadgeRow>
                  <span>{item.price || "—"}</span>
                  <span>×{item.qty || 1}</span>
                </BadgeRow>
              </button>
            );
          })
        )}
      </section>
    );
  }

  function renderItemDetail() {
    if (!selectedEntity || !selectedInventoryItem) {
      return renderMerchantDetail();
    }

    const fullText = getItemText(selectedInventoryItem);
    const effectText = selectedInventoryItem.effect || selectedInventoryItem.damage || "";

    return (
      <MobileScreen
        title={selectedInventoryItem.name || "Oggetto"}
        kicker={selectedInventoryItem.category || "Inventario"}
        testId="mobile-item-detail"
        onBack={() => {
          setMobileScreen(mobileItemSource || "merchantDetail");
          setActiveMobileTab("inventory");
          setMobileItemId(null);
        }}
      >
        <section className="mobile-native-detail fantasy-card">
          <BadgeRow>
            <span>{selectedInventoryItem.rarity || "Comune"}</span>
            <span>{selectedInventoryItem.price || "Prezzo n.d."}</span>
            <span>Qt. {selectedInventoryItem.qty || 1}</span>
            {selectedInventoryItem.category && (
              <span>{selectedInventoryItem.category}</span>
            )}
          </BadgeRow>
          {fullText ? (
            <p>{fullText}</p>
          ) : (
            <p>Nessuna descrizione disponibile.</p>
          )}
          {effectText && fullText !== effectText && (
            <>
              <h2>Effetto</h2>
              <p>{effectText}</p>
            </>
          )}
          <button
            className="mobile-danger-link"
            type="button"
            data-testid="mobile-item-delete"
            onClick={() => {
              props.onSelectMerchant(selectedEntity.id);
              props.onDeleteInventoryItem(selectedInventoryItem.id);
              setMobileItemId(null);
              setMobileScreen(mobileItemSource || "merchantDetail");
              setActiveMobileTab("inventory");
            }}
          >
            Rimuovi oggetto
          </button>
        </section>
      </MobileScreen>
    );
  }

  function renderQuestContent() {
    return (
      <section className="mobile-native-detail fantasy-card">
        <p>{selectedEntity?.sideQuest || "Nessuna side quest."}</p>
        <h2>Ricompensa</h2>
        <p>{selectedEntity?.reward || "Nessuna ricompensa indicata."}</p>
      </section>
    );
  }

  function renderEditContent() {
    if (!selectedEntity) return null;

    return (
      <section className="mobile-native-form fantasy-card">
        <label>
          Nome
          <input
            value={selectedEntity.name || ""}
            onChange={(event) => updateEntity("name", event.target.value)}
          />
        </label>
        <label>
          Nome attivita
          <input
            value={selectedEntity.shopName || ""}
            onChange={(event) => updateEntity("shopName", event.target.value)}
          />
        </label>
        <label>
          Zona
          <select
            value={selectedEntity.region || "generic"}
            onChange={(event) => updateEntity("region", event.target.value)}
          >
            {merchantRegions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Posizione mappa
          <select
            value={getMapRegion(selectedEntity)}
            onChange={(event) => updateEntity("mapRegion", event.target.value)}
          >
            {merchantRegions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.label}
              </option>
            ))}
          </select>
        </label>
      </section>
    );
  }

  function renderMapPositionContent() {
    if (!selectedEntity) return null;

    return (
      <section className="mobile-native-form fantasy-card">
        <label>
          Posizione sulla mappa
          <select
            value={getMapRegion(selectedEntity)}
            onChange={(event) => updateEntity("mapRegion", event.target.value)}
          >
            {merchantRegions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.label}
              </option>
            ))}
          </select>
        </label>
      </section>
    );
  }

  function renderTavernDetail() {
    if (!selectedEntity) {
      return renderMerchantList(taverns, "Locande", "Nessuna locanda.", "tavern");
    }

    const tabs = [
      ["overview", "Panoramica"],
      ["rooms", "Camere"],
      ["dish", "Piatto"],
      ["services", "Servizi"],
      ["quest", "Quest"],
      ["edit", "Modifica"],
      ["map", "Mappa"],
    ].map(([id, label]) => ({ id, label }));

    return (
      <MobileScreen
        title={selectedEntity.shopName}
        kicker={selectedEntity.name}
        onBack={() => setMobileScreen("tavernsList")}
        testId="mobile-tavern-detail"
        action={
          <FavoriteStar
            active={!!selectedEntity.favorite}
            onClick={() => props.onToggleMerchantFavorite(selectedEntity.id)}
            label="Preferita locanda"
          />
        }
      >
        <BadgeRow>
          <span>{getMerchantRegionLabel(selectedEntity.region)}</span>
          <span>{selectedEntity.reputation || "Neutrale"}</span>
          <span>{selectedEntity.shopTier || "Comune"}</span>
          {selectedEntity.alignment && <span>{selectedEntity.alignment}</span>}
        </BadgeRow>

        <MobileTabs
          tabs={tabs}
          activeTab={activeMobileTab}
          onChange={setActiveMobileTab}
        />

        {activeMobileTab === "overview" && (
          <section className="mobile-native-detail fantasy-card">
            <p>
              {selectedEntity.locationDescription ||
                "Descrizione locanda non definita."}
            </p>
            <p>{selectedEntity.story || "Descrizione locandiere non definita."}</p>
          </section>
        )}
        {activeMobileTab === "rooms" && renderRoomsContent()}
        {activeMobileTab === "dish" && renderDishContent()}
        {activeMobileTab === "services" && renderServicesContent()}
        {activeMobileTab === "quest" && renderQuestContent()}
        {activeMobileTab === "edit" && renderEditContent()}
        {activeMobileTab === "map" && renderMapPositionContent()}
      </MobileScreen>
    );
  }

  function renderRoomsContent() {
    return (
      <section className="mobile-native-list compact">
        {(selectedEntity?.rooms || []).length === 0 ? (
          <div className="mobile-native-empty fantasy-card">Nessuna camera.</div>
        ) : (
          selectedEntity.rooms.map((room, index) => (
            <article className="mobile-native-row as-card compact" key={`${room.name}-${index}`}>
              <strong>{room.name}</strong>
              <span>{room.tier} · {room.price}</span>
              <small>{room.description}</small>
            </article>
          ))
        )}
      </section>
    );
  }

  function renderDishContent() {
    return (
      <section className="mobile-native-detail fantasy-card">
        <h2>{selectedEntity?.dishName || "Piatto non definito"}</h2>
        <BadgeRow>
          <span>{selectedEntity?.dishPrice || "Prezzo n.d."}</span>
          {selectedEntity?.dishTier && <span>{selectedEntity.dishTier}</span>}
        </BadgeRow>
        <p>{selectedEntity?.dishDescription || "Descrizione non definita."}</p>
        {selectedEntity?.dishBonus && (
          <>
            <h2>Bonus</h2>
            <p>{selectedEntity.dishBonus}</p>
          </>
        )}
        {selectedEntity?.dishMalus && (
          <>
            <h2>Malus</h2>
            <p>{selectedEntity.dishMalus}</p>
          </>
        )}
      </section>
    );
  }

  function renderServicesContent() {
    return (
      <section className="mobile-native-list compact">
        {(selectedEntity?.services || []).length === 0 ? (
          <div className="mobile-native-empty fantasy-card">Nessun servizio.</div>
        ) : (
          selectedEntity.services.map((service, index) => (
            <article className="mobile-native-row as-card compact" key={`${service.name}-${index}`}>
              <strong>{service.name}</strong>
              <span>{service.price}</span>
            </article>
          ))
        )}
      </section>
    );
  }

  function renderBestiaryList() {
    return (
      <MobileScreen
        title="Bestiario"
        kicker={selectedBiome?.name}
        onBack={goHome}
        testId="mobile-bestiary-list"
      >
        <section className="mobile-filter-panel fantasy-card">
          <input
            value={bestiarySearch}
            onChange={(event) => setBestiarySearch(event.target.value)}
            placeholder="Cerca mostro..."
            data-testid="mobile-bestiary-search"
          />
          <select
            value={selectedBiomeId}
            onChange={(event) => setSelectedBiomeId(event.target.value)}
            data-testid="mobile-bestiary-biome-filter"
          >
            {biomes.map((biome) => (
              <option key={biome.id} value={biome.id}>
                {biome.name}
              </option>
            ))}
          </select>
          <select
            value={bestiaryCrFilter}
            onChange={(event) => setBestiaryCrFilter(event.target.value)}
            data-testid="mobile-bestiary-cr-filter"
          >
            <option value="all">Tutti GS</option>
            <option value="low">GS 0-1/2</option>
            <option value="mid">GS 1-3</option>
            <option value="high">GS 4+</option>
          </select>
          <button
            type="button"
            className={showFavoriteMonstersOnly ? "active" : ""}
            onClick={() => setShowFavoriteMonstersOnly((value) => !value)}
            data-testid="mobile-bestiary-favorites-toggle"
          >
            ★ Preferiti
          </button>
        </section>

        <div className="mobile-native-list compact">
          {biomeMonstersList.length === 0 ? (
            <div className="mobile-native-empty fantasy-card">
              Nessun mostro trovato.
            </div>
          ) : (
            biomeMonstersList.map((monster) => {
              return (
                <article
                  className="mobile-native-row compact monster-row"
                  key={monster.id}
                >
                  <button
                    className="mobile-row-main-button"
                    type="button"
                    data-testid={`mobile-monster-open-${monster.id}`}
                    onClick={() => {
                      setMobileDetailId(monster.id);
                      setActiveMobileTab("actions");
                      setMobileScreen("monsterDetail");
                    }}
                  >
                    <strong>
                      {monster.name}
                      {favoriteMonsterSet.has(monster.id) ? (
                        <span className="mobile-row-star" aria-hidden="true">
                          {" "}★
                        </span>
                      ) : null}
                    </strong>
                    <span>GS {monster.cr} · {monster.type}</span>
                    <small>CA {monster.armorClass} · PF {monster.hitPoints}</small>
                  </button>
                  <button
                    className="mobile-inline-action"
                    type="button"
                    aria-label="Aggiungi al combattimento"
                    data-testid={`mobile-monster-add-combat-${monster.id}`}
                    onClick={() => props.onAddMonsterToCombat(monster)}
                  >
                    + Combat
                  </button>
                </article>
              );
            })
          )}
        </div>
      </MobileScreen>
    );
  }

  function renderMonsterDetail() {
    if (!selectedMonster) return renderBestiaryList();

    const tabs = [
      { id: "actions", label: "Azioni" },
      { id: "stats", label: "Statistiche" },
      { id: "description", label: "Descrizione" },
    ];

    return (
      <MobileScreen
        title={selectedMonster.name}
        kicker={`GS ${selectedMonster.cr} · ${selectedMonster.type}`}
        onBack={() => setMobileScreen("bestiaryList")}
        testId="mobile-monster-detail"
        action={
          <FavoriteStar
            active={favoriteMonsterSet.has(selectedMonster.id)}
            onClick={() => props.onToggleFavoriteMonster(selectedMonster.id)}
            label="Preferito mostro"
          />
        }
      >
        <BadgeRow>
          <span>CA {selectedMonster.armorClass}</span>
          <span>PF {selectedMonster.hitPoints}</span>
          <span>{selectedMonster.speed}</span>
          <span>{selectedMonster.alignment || "Neutrale"}</span>
        </BadgeRow>

        <button
          className="mobile-primary-wide"
          type="button"
          data-testid="mobile-add-to-combat-primary"
          onClick={() => props.onAddMonsterToCombat(selectedMonster)}
        >
          + Aggiungi al combattimento
        </button>

        <MobileTabs
          tabs={tabs}
          activeTab={activeMobileTab}
          onChange={setActiveMobileTab}
        />

        {activeMobileTab === "actions" && (
          <section className="mobile-native-detail fantasy-card">
            {selectedMonsterActions.length === 0 ? (
              <p>Nessuna azione registrata.</p>
            ) : (
              selectedMonsterActions.map((action, index) => (
                <article
                  className="mobile-action-note"
                  key={`${action.name}-${index}`}
                >
                  <strong>{action.name}</strong>
                  <span>{formatActionMeta(action)}</span>
                  <p>
                    {action.hit ||
                      action.description ||
                      selectedMonsterCombat?.damageNote}
                  </p>
                </article>
              ))
            )}
          </section>
        )}
        {activeMobileTab === "stats" && (
          <section className="mobile-native-detail fantasy-card">
            <div className="mobile-ability-grid">
              {Object.entries(selectedMonster.abilityScores || {}).map(
                ([ability, score]) => (
                  <span key={ability}>
                    {getAbilityLabel(ability)} {score} {formatAbilityModifier(score)}
                  </span>
                )
              )}
            </div>
          </section>
        )}
        {activeMobileTab === "description" && (
          <section className="mobile-native-detail fantasy-card">
            <p>{selectedMonster.description}</p>
            <p>{selectedMonster.story}</p>
          </section>
        )}
      </MobileScreen>
    );
  }

  function renderMapList() {
    return (
      <MobileScreen title="Mappa" kicker="Biomi" onBack={goHome} testId="mobile-map-list">
        <div className="mobile-native-list compact">
          {mapRegions.map((region) => (
            <button
              className="mobile-native-row compact"
              key={region.id}
              type="button"
              data-testid={`mobile-biome-${region.id}`}
              onClick={() => {
                setMobileDetailId(region.id);
                setMobileScreen("biomeDetail");
              }}
            >
              <div>
                <strong>{region.label}</strong>
                <span>
                  Mercanti {region.shops.length} · Locande {region.taverns.length}
                </span>
              </div>
              <span aria-hidden="true" className="mobile-row-chevron">›</span>
            </button>
          ))}
        </div>
      </MobileScreen>
    );
  }

  function renderBiomeDetail() {
    if (!selectedMapRegion) return renderMapList();
    const places = [...selectedMapRegion.shops, ...selectedMapRegion.taverns];

    return (
      <MobileScreen
        title={selectedMapRegion.label}
        kicker="Mappa"
        onBack={() => setMobileScreen("mapList")}
        testId="mobile-biome-detail"
      >
        <div className="mobile-map-actions">
          <button
            type="button"
            onClick={() => openGeneratedEntity("shop", selectedMapRegion.id)}
          >
            + Mercante qui
          </button>
          <button
            type="button"
            onClick={() => openGeneratedEntity("tavern", selectedMapRegion.id)}
          >
            + Locanda qui
          </button>
        </div>

        <section className="mobile-native-list compact">
          {places.length === 0 ? (
            <div className="mobile-native-empty fantasy-card">
              Nessun luogo registrato in questa zona.
            </div>
          ) : (
            places.map((item) => (
              <button
                className="mobile-native-row compact"
                key={item.id}
                type="button"
                onClick={() => openMerchant(item)}
                data-testid={`mobile-biome-place-${item.id}`}
              >
                <div>
                  <strong>{item.type === "tavern" ? item.shopName : item.name}</strong>
                  <span>{item.type === "tavern" ? "Locanda" : "Mercante"}</span>
                </div>
                <BadgeRow>
                  <span>{item.reputation || "—"}</span>
                </BadgeRow>
              </button>
            ))
          )}
        </section>
      </MobileScreen>
    );
  }

  function renderCombat() {
    const tabs = [
      { id: "prep", label: "Preparazione" },
      { id: "turn", label: "Turno" },
      { id: "order", label: "Ordine" },
    ];

    return (
      <MobileScreen
        title="Combattimento"
        kicker="Tracker"
        onBack={goHome}
        testId="mobile-combat"
      >
        <MobileTabs
          tabs={tabs}
          activeTab={mobileCombatTab}
          onChange={setMobileCombatTab}
        />
        <div className={`mobile-combat-view mobile-combat-${mobileCombatTab}`}>
          <MobileCombat
            activeTab={mobileCombatTab}
            onTabChange={setMobileCombatTab}
          />
        </div>
      </MobileScreen>
    );
  }

  let content = renderHome();

  if (mobileScreen === "merchantsList") {
    content = renderMerchantList(shops, "Mercanti", "Nessun mercante.", "shop");
  } else if (mobileScreen === "merchantDetail") {
    content = renderMerchantDetail();
  } else if (mobileScreen === "itemDetail") {
    content = renderItemDetail();
  } else if (mobileScreen === "tavernsList") {
    content = renderMerchantList(taverns, "Locande", "Nessuna locanda.", "tavern");
  } else if (mobileScreen === "tavernDetail") {
    content = renderTavernDetail();
  } else if (mobileScreen === "bestiaryList") {
    content = renderBestiaryList();
  } else if (mobileScreen === "monsterDetail") {
    content = renderMonsterDetail();
  } else if (mobileScreen === "mapList") {
    content = renderMapList();
  } else if (mobileScreen === "biomeDetail") {
    content = renderBiomeDetail();
  } else if (mobileScreen === "settings") {
    content = (
      <MobileScreen
        title="Impostazioni"
        kicker="Partita"
        onBack={goHome}
        testId="mobile-settings"
      >
        <SettingsPanel {...props} />
      </MobileScreen>
    );
  } else if (mobileScreen === "combat") {
    content = renderCombat();
  }

  return (
    <>
      {content}
      <MobileBottomNav
        activeScreen={mobileScreen}
        onNavigate={navigatePrimary}
      />
    </>
  );
}
