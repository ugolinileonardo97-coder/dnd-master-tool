import { zoneTypeMeta } from "../../data/maps/mapData";
import { getMarkerAsset } from "../../data/maps/tileAssetMap";
import {
  getAbilityLabel,
  getMonsterAbilityScores,
} from "../../utils/monsterStats";
import { getMonsterXp } from "../../utils/monsterXpTable";

function DetailBlock({ title, children, className = "" }) {
  if (!children) return null;
  return (
    <article className={className}>
      <strong>{title}</strong>
      <p>{children}</p>
    </article>
  );
}

function getFallbackCr(profile) {
  const difficulty = String(profile?.difficulty || "").toLowerCase();
  if (difficulty.includes("boss")) return 8;
  if (difficulty.includes("diffic")) return 5;
  if (difficulty.includes("media") || difficulty.includes("medio")) return 3;
  if (difficulty.includes("facile")) return 1;
  return null;
}

function parseAttackBonus(profile) {
  const explicitBonus = profile?.combat?.attackBonus ?? profile?.attackBonus;
  if (explicitBonus !== undefined && explicitBonus !== null && explicitBonus !== "") {
    const numericBonus = Number(String(explicitBonus).replace("+", ""));
    return Number.isFinite(numericBonus)
      ? `${numericBonus >= 0 ? "+" : ""}${numericBonus}`
      : String(explicitBonus);
  }

  return String(profile?.attack || "").match(/[+-]\d+/)?.[0] || "—";
}

function parseDamageType(profile, damage) {
  if (profile?.combat?.damageType || profile?.damageType) {
    return profile.combat?.damageType || profile.damageType;
  }

  const withoutFormula = String(damage || "")
    .replace(/^\s*\d+d\d+(?:\s*[+-]\s*\d+)?\s*/i, "")
    .trim();

  return withoutFormula || "—";
}

function normalizeMapMonsterStats(profile) {
  if (!profile) return null;

  const cr =
    profile.cr ??
    profile.challengeRating ??
    profile.level ??
    profile.monsterLevel ??
    getFallbackCr(profile);
  const damage = profile.combat?.damage || profile.damage || "—";
  const abilitySource =
    profile.abilityScores || profile.abilities || profile.stats || null;
  const abilityScores = getMonsterAbilityScores({
    ...profile,
    abilityScores: abilitySource || undefined,
  });
  const xp = Number(profile.xp) || getMonsterXp({ ...profile, cr });

  return {
    ...profile,
    armorClass: profile.armorClass ?? profile.ac ?? 10,
    hitPoints: profile.hitPoints ?? profile.hp ?? profile.maxHp ?? 1,
    speed: profile.speed || profile.velocity || "—",
    cr: cr ?? "—",
    xp: xp || 0,
    abilityScores,
    attackBonus: parseAttackBonus(profile),
    damage,
    damageType: parseDamageType(profile, damage),
    resistances: profile.resistances || profile.resistance || "",
    special:
      profile.special ||
      profile.trait ||
      profile.specialTrait ||
      "Nessun tratto speciale indicato.",
    tactics: profile.tactics || profile.tactic || "Nessuna tattica indicata.",
  };
}

function EncounterBlock({ profile, title = "Mostri / Fight" }) {
  if (!profile) return null;
  const stats = normalizeMapMonsterStats(profile);

  return (
    <article className="map-play-block encounter">
      <div className="map-play-heading">
        <img src={getMarkerAsset(title === "Boss" ? "boss" : "monster")} alt="" draggable="false" />
        <div>
          <strong>{title}</strong>
          <h3>{profile.name}</h3>
        </div>
      </div>
      <strong className="map-creature-section-title">Statistiche creatura</strong>
      <div className="map-stat-grid map-creature-primary-grid">
        <span><b>CA</b>{stats.armorClass}</span>
        <span><b>PF</b>{stats.hitPoints}</span>
        <span><b>Velocità</b>{stats.speed}</span>
        <span><b>GS / CR</b>{stats.cr}</span>
        <span><b>XP</b>{stats.xp || "—"}</span>
        <span><b>Difficoltà</b>{stats.difficulty || "—"}</span>
      </div>
      <div className="map-stat-grid map-creature-ability-grid">
        {Object.entries(stats.abilityScores).map(([ability, score]) => (
          <span key={ability}>
            <b>{getAbilityLabel(ability)}</b>
            {score}
          </span>
        ))}
      </div>
      <div className="map-play-row">
        <b>Bonus colpire</b>
        <p>{stats.attackBonus}</p>
      </div>
      <div className="map-play-row">
        <b>Danno</b>
        <p>{stats.damage}</p>
      </div>
      <div className="map-play-row">
        <b>Tipo danno</b>
        <p>{stats.damageType}</p>
      </div>
      <div className="map-play-row">
        <b>Tratto speciale</b>
        <p>{stats.special}</p>
      </div>
      {stats.resistances && (
        <div className="map-play-row">
          <b>Resistenze</b>
          <p>{stats.resistances}</p>
        </div>
      )}
      <div className="map-play-row">
        <b>Tattica</b>
        <p>{stats.tactics}</p>
      </div>
    </article>
  );
}

function TreasureBlock({ detail }) {
  if (!detail) return null;
  return (
    <article className="map-play-block treasure">
      <div className="map-play-heading">
        <img src={getMarkerAsset("treasure")} alt="" draggable="false" />
        <div>
          <strong>Tesoro</strong>
          <h3>{detail.name}</h3>
        </div>
      </div>
      <DetailBlock title="Dove">{`Nascosto ${detail.location}.`}</DetailBlock>
      <DetailBlock title="Contenuto / valore">{detail.value}</DetailBlock>
      <DetailBlock title="Effetto">{detail.effect}</DetailBlock>
      <DetailBlock title="Nota DM">{detail.dmNote}</DetailBlock>
    </article>
  );
}

function HazardBlock({ detail, title = "Trappola / Pericolo" }) {
  if (!detail) return null;
  return (
    <article className="map-play-block hazard">
      <div className="map-play-heading">
        <img src={getMarkerAsset(title.includes("Trappola") ? "trap" : "hazard")} alt="" draggable="false" />
        <div>
          <strong>{title}</strong>
          <h3>{detail.name}</h3>
        </div>
      </div>
      <DetailBlock title="Trigger">{detail.trigger}</DetailBlock>
      <DetailBlock title="CD / prova">{detail.dc}</DetailBlock>
      <DetailBlock title="Effetto">{detail.effect}</DetailBlock>
      <DetailBlock title="Danno">{detail.damage}</DetailBlock>
      <DetailBlock title="Come evitarla">{detail.counter}</DetailBlock>
    </article>
  );
}

function getMarkerLabel(markerType) {
  const labels = {
    monster: "Mostri / Fight",
    boss: "Boss",
    treasure: "Tesoro",
    trap: "Trappola",
    event: "Evento",
    secret: "Segreto",
    hazard: "Pericolo ambientale",
    safe: "Rifugio",
    entrance: "Ingresso",
  };
  return labels[markerType] || "Marker";
}

export function MapDetailPanel({ zone, marker, connection, map }) {
  if (!zone) {
    return (
      <aside className="adventure-map-detail fantasy-card">
        <span className="section-kicker">Dettaglio zona</span>
        <p>Seleziona una stanza della mappa per leggere appunti e contenuti.</p>
      </aside>
    );
  }

  const typeLabel = zoneTypeMeta[zone.type]?.label || "Zona";
  const zoneConnections = (map?.connections || []).filter(
    (connection) => connection.from === zone.id || connection.to === zone.id
  );

  if (connection) {
    const fromZone = map?.zones?.find((item) => item.id === connection.from);
    const toZone = map?.zones?.find((item) => item.id === connection.to);

    return (
      <aside className="adventure-map-detail fantasy-card connection-detail">
        <div className="adventure-map-detail-header">
          <span>{connection.secret ? "?" : ">"}</span>
          <div>
            <small>
              Passaggio - {fromZone?.name || "Zona"} verso {toZone?.name || "Zona"}
            </small>
            <h2>{connection.title || connection.label}</h2>
          </div>
        </div>

        <div className="adventure-map-detail-badges">
          <span>Tipo: {connection.type || "passaggio"}</span>
          <span>Rischio: {connection.danger || connection.dangerLevel || "basso"}</span>
          {connection.secret && <span>Segreto</span>}
        </div>

        <p>{connection.description || connection.label}</p>

        <div className="adventure-map-detail-notes">
          <DetailBlock title="Effetto">{connection.effect}</DetailBlock>
          <DetailBlock title="Prova richiesta">{connection.check}</DetailBlock>
          <DetailBlock title="Fallimento">{connection.failure}</DetailBlock>
          <DetailBlock title="Nota DM">{connection.dmNote}</DetailBlock>
        </div>
      </aside>
    );
  }

  if (marker) {
    const markerLabel = getMarkerLabel(marker.type);

    return (
      <aside className="adventure-map-detail fantasy-card marker-detail">
        <div className="adventure-map-detail-header">
          <span className="map-detail-icon">
            <img src={getMarkerAsset(marker.type)} alt="" draggable="false" />
          </span>
          <div>
            <small>
              {markerLabel} - Zona {zone.order}
            </small>
            <h2>{marker.title}</h2>
          </div>
        </div>

        {!marker.detail?.encounterProfile &&
          !marker.detail?.treasureDetail &&
          !marker.detail?.hazardDetail && <p>{marker.description}</p>}

        <div className="adventure-map-detail-notes">
          <DetailBlock title="Creature">
            {!marker.detail?.encounterProfile && (
              marker.detail?.boss
                ? `${marker.detail.boss}. Minion: ${marker.detail.minions}.`
                : marker.detail?.monsters
            )}
          </DetailBlock>
          <EncounterBlock
            profile={marker.detail?.encounterProfile}
            title={marker.type === "boss" ? "Boss" : "Mostri / Fight"}
          />
          <DetailBlock title="Tattica / Svolta">{marker.detail?.bossTwist}</DetailBlock>
          <HazardBlock detail={marker.detail?.hazardDetail} />
          <DetailBlock title="Trappola">{!marker.detail?.hazardDetail && marker.detail?.trap}</DetailBlock>
          <TreasureBlock detail={marker.detail?.treasureDetail} />
          <DetailBlock title="Ricompensa">
            {!marker.detail?.treasureDetail && (marker.reward || marker.detail?.treasure)}
          </DetailBlock>
          <DetailBlock title="Pericolo">{marker.detail?.hazard}</DetailBlock>
          <DetailBlock title="Evento">{marker.detail?.event}</DetailBlock>
        </div>

        <div className="adventure-map-dm-note">
          <strong>Nota DM</strong>
          <p>{marker.dmNote || zone.dmNote}</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="adventure-map-detail fantasy-card">
      <div className="adventure-map-detail-header">
        <span>{zone.icon}</span>
        <div>
          <small>
            Zona {zone.order} - {typeLabel}
          </small>
          <h2>{zone.name}</h2>
        </div>
      </div>

      <div className="adventure-map-detail-badges">
        <span>{typeLabel}</span>
      </div>

      <div className="adventure-map-detail-notes">
        <DetailBlock title="Ingresso visuale">{zone.entranceVisual}</DetailBlock>
        <DetailBlock title="Passaggio segreto">
          {zoneConnections
            .filter((connection) => connection.secret)
            .map((connection) => connection.description)
            .join("; ")}
        </DetailBlock>
        <DetailBlock title="Evento">{zone.event}</DetailBlock>
        <EncounterBlock
          profile={zone.encounterProfile}
          title={zone.type === "boss" ? "Boss" : "Mostri / Fight"}
        />
        <DetailBlock title="Mostri / Fight">
          {!zone.encounterProfile && (zone.boss ? `${zone.boss}. Minion: ${zone.minions}.` : zone.monsters)}
        </DetailBlock>
        <HazardBlock detail={zone.hazardDetail} />
        <DetailBlock title="Trappola">{!zone.hazardDetail && zone.trap}</DetailBlock>
        <TreasureBlock detail={zone.treasureDetail} />
        <DetailBlock title="Tesoro">{!zone.treasureDetail && zone.treasure}</DetailBlock>
        <DetailBlock title="Pericolo ambientale">{!zone.hazardDetail && zone.hazard}</DetailBlock>
        <DetailBlock title="Svolta boss">{zone.bossTwist}</DetailBlock>
      </div>

      <div className="adventure-map-dm-note">
        <strong>Nota DM</strong>
        <p>{zone.dmNote}</p>
      </div>
    </aside>
  );
}
