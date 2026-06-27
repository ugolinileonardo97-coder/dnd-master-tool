import FantasyIcon from "../components/mobile-premium-home/FantasyIcon";

const navItems = [
  { id: "home", icon: "home", label: "Home" },
  { id: "merchants", icon: "merchants", label: "Mercanti" },
  { id: "taverns", icon: "taverns", label: "Locande" },
  { id: "bestiary", icon: "bestiary", label: "Bestiario" },
  { id: "combat", icon: "combat", label: "Combatti" },
  { id: "map", icon: "map", label: "Mappa" },
];

function navGroup(screen) {
  if (screen === "merchantDetail" || screen === "itemDetail") return "merchants";
  if (screen === "tavernDetail") return "taverns";
  if (screen === "monsterDetail") return "bestiary";
  if (screen === "mapRegion") return "map";
  return screen;
}

export function MobileBottomNav({ activeScreen, onNavigate }) {
  const active = navGroup(activeScreen);
  return (
    <nav className="mobile-premium-bottom-nav" aria-label="Navigazione mobile">
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={active === item.id ? "is-active" : ""}
          aria-label={item.label}
          aria-current={active === item.id ? "page" : undefined}
          onClick={() => onNavigate(item.id)}
        >
          <FantasyIcon name={item.icon} decorative />
        </button>
      ))}
    </nav>
  );
}
