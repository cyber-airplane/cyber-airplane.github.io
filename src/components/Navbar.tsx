import './Navbar.css'

const NAV_LINKS = ['首页', '全部机型', '武器', '感知系统', '其他网站']

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <div className="navbar__left">
          <span className="navbar__brand crt-glow">
            <span className="material-symbols-outlined navbar__icon">flight</span>
            赛博航空基地
          </span>
          <div className="navbar__links">
            {NAV_LINKS.map((label) => (
              <a
                key={label}
                href="#"
                className={`navbar__link${label === '首页' ? ' navbar__link--active' : ''}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="navbar__right">
          {/* Placeholder for future search/auth */}
        </div>
      </nav>
    </header>
  )
}
