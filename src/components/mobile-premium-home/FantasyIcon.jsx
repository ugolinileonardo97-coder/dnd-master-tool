const paths = {
  home: (
    <path d="M4.5 11.2 12 4.8l7.5 6.4v8.3h-5v-5.2h-5v5.2h-5z" />
  ),
  merchants: (
    <>
      <path d="M6 9h12l-1.3 10H7.3z" />
      <path d="M8 9a4 4 0 0 1 8 0" />
      <path d="M9.2 13h5.6M10 16h4" />
    </>
  ),
  taverns: (
    <>
      <path d="M7 6h8v10.8A3.2 3.2 0 0 1 11.8 20H10.2A3.2 3.2 0 0 1 7 16.8z" />
      <path d="M15 9h1.4a2.6 2.6 0 0 1 0 5.2H15" />
      <path d="M9.4 6v11.8M12.5 6v11.8" />
    </>
  ),
  bestiary: (
    <>
      <path d="M7 7.5 5.3 4.7l3.4 1.1A6.5 6.5 0 0 1 12 5a6.5 6.5 0 0 1 3.3.8l3.4-1.1L17 7.5c1 1.2 1.5 2.7 1.5 4.5 0 4.2-3 7.5-6.5 7.5S5.5 16.2 5.5 12c0-1.8.5-3.3 1.5-4.5Z" />
      <path d="M9.2 11h.1M14.7 11h.1M10 15l2 1.5 2-1.5" />
      <path d="m9.2 7.8 1.5 1.5M14.8 7.8l-1.5 1.5" />
    </>
  ),
  combat: (
    <>
      <path d="m5 19 5.2-5.2M14 10l5-5" />
      <path d="m4.7 5.1 14.2 14.2" />
      <path d="m15.4 4.6 4 4M4.6 15.4l4 4" />
    </>
  ),
  map: (
    <>
      <circle cx="12" cy="12" r="7.2" />
      <path d="m12 3.5 2.4 6.1L20.5 12l-6.1 2.4L12 20.5l-2.4-6.1L3.5 12l6.1-2.4z" />
      <path d="m12 8.8 1.1 3.2-1.1 3.2-1.1-3.2z" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3.1" />
      <path d="M12 3.8v2.1M12 18.1v2.1M5.3 5.3l1.5 1.5M17.2 17.2l1.5 1.5M3.8 12h2.1M18.1 12h2.1M5.3 18.7l1.5-1.5M17.2 6.8l1.5-1.5" />
      <path d="M8.1 4.6 9 6.8M15 17.2l.9 2.2M4.6 15.9l2.2-.9M17.2 9l2.2-.9" />
    </>
  ),
  chevronLeft: <path d="m14 6-6 6 6 6" />,
  chevronRight: <path d="m10 6 6 6-6 6" />,
  minus: <path d="M6 12h12" />,
  plus: <path d="M12 6v12M6 12h12" />,
}

function FantasyIcon({ name, className = '', decorative = false }) {
  return (
    <svg
      className={`fantasy-icon ${className}`}
      viewBox="0 0 24 24"
      aria-hidden={decorative ? 'true' : undefined}
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}

export default FantasyIcon
