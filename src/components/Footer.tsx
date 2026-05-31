import './Footer.css'

const FOOTER_LINKS = [
  { label: '[已收录机型: 4]', href: '#' },
  { label: '[图片：5]', href: '#' },
  { label: '[版本：0.2]', href: '#' },
]

const RUNTIME = '1,492:02:11'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <div className="footer__links">
            {FOOTER_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer__right">
          <span className="footer__runtime">运行时间: {RUNTIME}</span>
          <span className="footer__online">
            <span className="footer__online-dot" />
            在线
          </span>
        </div>
      </div>
    </footer>
  )
}
