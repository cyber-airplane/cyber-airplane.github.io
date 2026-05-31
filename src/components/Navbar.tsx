import { useLocation, Link } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { label: '首页', path: '/' },
  { label: '全部机型', path: '/aircraft' },
  { label: '武器', path: '/weapons' },
  { label: '感知系统', path: '/sensors' },
  { label: '战术科普', path: '/tactics' },
  { label: '其他网站', path: '/links' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <div className="navbar__left">
          <span className="navbar__brand crt-glow">
            <img src="/favicon.svg" alt="" className="navbar__icon" />
            赛博航空基地
          </span>
          <div className="navbar__links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`navbar__link${location.pathname === link.path ? ' navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
