import { useState } from 'react'
import { navLinks, profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <a href="#hero" className="header__logo" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>
        {profile.name.split(' ')[0]}
        <span>.</span>
      </a>

      <div className={`header__actions${menuOpen ? ' header__actions--open' : ''}`}>
        <div className="lang-switch" role="group" aria-label={t.common.language}>
          <button
            type="button"
            className={`lang-switch__btn${lang === 'ru' ? ' lang-switch__btn--active' : ''}`}
            onClick={() => setLang('ru')}
            aria-pressed={lang === 'ru'}
          >
            RU
          </button>
          <button
            type="button"
            className={`lang-switch__btn${lang === 'en' ? ' lang-switch__btn--active' : ''}`}
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
        </div>

        <nav className="header__nav">
          {navLinks.map(({ id, key }) => (
            <button key={id} type="button" className="header__link" onClick={() => scrollTo(id)}>
              {t.nav[key]}
            </button>
          ))}
        </nav>
      </div>

      <button
        type="button"
        className="header__burger"
        aria-label={t.common.menu}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
