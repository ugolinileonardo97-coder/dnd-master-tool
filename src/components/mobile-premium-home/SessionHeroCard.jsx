import { SESSION_IMAGE } from './mobileHomeAssets.js'
import LevelStepper from './LevelStepper.jsx'
import PrestigeSelector from './PrestigeSelector.jsx'

function SessionHeroCard({
  sessionName,
  prestige,
  level,
  onPrestigeChange,
  onLevelChange,
}) {
  return (
    <section className="session-hero-card" aria-labelledby="active-session-title">
      <div
        className="session-hero-card__portrait"
        aria-hidden="true"
      >
        <img src={SESSION_IMAGE} alt="" className="session-hero-image" />
      </div>
      <div className="session-hero-card__content">
        <p className="session-hero-card__label">Partita attiva</p>
        <h2 id="active-session-title">{sessionName || 'Partita non salvata'}</h2>
      </div>
      <div className="session-hero-card__controls">
        <PrestigeSelector value={prestige} onChange={onPrestigeChange} />
        <LevelStepper value={level} onChange={onLevelChange} />
      </div>
    </section>
  )
}

export default SessionHeroCard
