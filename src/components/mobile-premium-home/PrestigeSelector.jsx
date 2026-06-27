import FantasyIcon from './FantasyIcon.jsx'

const PRESTIGE_VALUES = ['Casuale', 'Mediocre', 'Buona', 'Lussuosa']

function PrestigeSelector({ value, onChange }) {
  const activeIndex = PRESTIGE_VALUES.indexOf(value)

  const move = (direction) => {
    const nextIndex =
      (activeIndex + direction + PRESTIGE_VALUES.length) % PRESTIGE_VALUES.length
    onChange(PRESTIGE_VALUES[nextIndex])
  }

  return (
    <div className="prestige-selector">
      <span className="premium-field-label">Prestigio</span>
      <div className="prestige-selector__control">
        <button
          type="button"
          aria-label="Prestigio precedente"
          onClick={() => move(-1)}
        >
          <FantasyIcon name="chevronLeft" decorative />
        </button>
        <strong>{value}</strong>
        <button
          type="button"
          aria-label="Prestigio successivo"
          onClick={() => move(1)}
        >
          <FantasyIcon name="chevronRight" decorative />
        </button>
      </div>
    </div>
  )
}

export default PrestigeSelector
