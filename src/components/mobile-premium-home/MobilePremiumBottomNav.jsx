import FantasyIcon from './FantasyIcon.jsx'
import { NAV_ICON_ASSETS } from './mobileHomeAssets.js'

const navItems = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'merchants', label: 'Mercanti', icon: 'merchants' },
  { id: 'taverns', label: 'Locande', icon: 'taverns' },
  { id: 'bestiary', label: 'Bestiario', icon: 'bestiary' },
  { id: 'combat', label: 'Combatti', icon: 'combat' },
  { id: 'map', label: 'Mappa', icon: 'map' },
]

function MobilePremiumBottomNav({ activeSection, onNavigate }) {
  return (
    <nav className="mobile-premium-bottom-nav" aria-label="Navigazione principale">
      {navItems.map((item) => (
        <button
          className={activeSection === item.id ? 'is-active' : ''}
          type="button"
          key={item.id}
          aria-label={item.label}
          aria-current={activeSection === item.id ? 'page' : undefined}
          data-icon-asset={NAV_ICON_ASSETS[item.id]}
          onClick={() => onNavigate(item.id)}
        >
          <FantasyIcon name={item.icon} decorative />
        </button>
      ))}
    </nav>
  )
}

export default MobilePremiumBottomNav
