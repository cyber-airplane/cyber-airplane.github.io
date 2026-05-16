import './Footer.css'

const FOOTER_LINKS = [
  { label: '[状态_01: 正常]', href: '#' },
  { label: '[版本_2.0.4]', href: '#' },
  { label: '[安全_已加密]', href: '#' },
]

const RUNTIME = '1,492:02:11'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <span className="footer__status">[系统_就绪]</span>
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
