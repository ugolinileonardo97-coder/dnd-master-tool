import './MobilePremiumHome.css'
import { useState } from 'react'
import HomeFeatureCard from './HomeFeatureCard.jsx'
import HomeMapCard from './HomeMapCard.jsx'
import MobilePremiumBottomNav from './MobilePremiumBottomNav.jsx'
import PremiumLogo from './PremiumLogo.jsx'
import SessionHeroCard from './SessionHeroCard.jsx'
import { FEATURE_ASSETS } from './mobileHomeAssets.js'

const featureCards = [
  {
    id: 'merchants',
    title: 'Mercanti',
    description: 'Genera e gestisci',
    icon: FEATURE_ASSETS.merchants.icon,
    background: FEATURE_ASSETS.merchants.background,
  },
  {
    id: 'taverns',
    title: 'Locande',
    description: 'Ospitalità e quest',
    icon: FEATURE_ASSETS.taverns.icon,
    background: FEATURE_ASSETS.taverns.background,
  },
  {
    id: 'bestiary',
    title: 'Bestiario',
    description: 'Consulta creature',
    icon: FEATURE_ASSETS.bestiary.icon,
    background: FEATURE_ASSETS.bestiary.background,
  },
  {
    id: 'combat',
    title: 'Combattimento',
    description: 'Gestisci scontri',
    icon: FEATURE_ASSETS.combat.icon,
    background: FEATURE_ASSETS.combat.background,
  },
]

function MobilePremiumHome() {
  const [activeSection, setActiveSection] = useState('home')
  const [prestige, setPrestige] = useState('Lussuosa')
  const [partyLevel, setPartyLevel] = useState(11)
  const showDebugHomeOverlay =
    new URLSearchParams(window.location.search).get('debugHomeOverlay') === '1'
  const showDebugHomeBoxes =
    new URLSearchParams(window.location.search).get('debugHomeBoxes') === '1'

  const navigate = (section) => {
    setActiveSection(section)
  }

  const rootClasses = `mobile-premium-home${showDebugHomeBoxes ? ' debug-boxes' : ''}`
  const isMerchantsPage = activeSection === 'merchants'

  return (
    <div className={rootClasses}>
      {isMerchantsPage ? (
        <main className="mobile-merchants-page" aria-label="Mercanti">
          <h1 className="mobile-merchants-page__title">Mercanti</h1>
          <button className="mobile-merchants-page__generate" type="button">
            + Genera mercante
          </button>
          <div className="mobile-merchants-page__filters" aria-label="Filtri mercanti">
            <button className="mobile-merchants-page__filter is-active" type="button">
              Tutti
            </button>
            <button className="mobile-merchants-page__filter" type="button">
              Preferiti
            </button>
          </div>
          <section className="mobile-merchants-page__empty" aria-label="Nessun mercante">
            <h2>Nessun mercante</h2>
            <p>Genera un primo mercante per iniziare</p>
          </section>
        </main>
      ) : (
        <main className="mobile-premium-home__scroll">
          <PremiumLogo />
          <SessionHeroCard
            prestige={prestige}
            level={partyLevel}
            onPrestigeChange={setPrestige}
            onLevelChange={setPartyLevel}
          />
          <section className="home-feature-grid" aria-label="Sezioni principali">
            {featureCards.map((feature) => (
              <HomeFeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                background={feature.background}
                onClick={() => navigate(feature.id)}
              />
            ))}
          </section>
          <HomeMapCard
            background={FEATURE_ASSETS.map.background}
            icon={FEATURE_ASSETS.map.icon}
            onClick={() => navigate('map')}
          />
        </main>
      )}
      <MobilePremiumBottomNav
        activeSection={activeSection}
        onNavigate={navigate}
      />
      {showDebugHomeOverlay && <div className="mobile-home-reference-overlay" />}
    </div>
  )
}

export default MobilePremiumHome
