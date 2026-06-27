function HomeMapCard({ background, icon, onClick }) {
  return (
    <button
      className="home-map-card"
      type="button"
      onClick={onClick}
      style={{ '--map-image': `url("${background}")` }}
    >
      <span className="home-map-card__icon-ring" aria-hidden="true">
        <img src={icon} alt="" className="home-map-card__icon-img" />
      </span>
      <span>
        <span className="home-map-card__title">Mappa del mondo</span>
        <span className="home-map-card__description">Esplora, segna, scopri</span>
      </span>
    </button>
  )
}

export default HomeMapCard
