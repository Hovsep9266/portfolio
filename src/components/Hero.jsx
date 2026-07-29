import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import SocialLinks from './SocialLinks'

export default function Hero() {
  const { lang, t } = useLanguage()
  const cvHref = lang === 'en' ? '/cv-en.html' : '/cv-ru.html'

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <p className="hero__greeting hero-animate" style={{ '--i': 0 }}>{t.hero.greeting}</p>
      <h1 className="hero__name hero-animate" style={{ '--i': 1 }}>{profile.name}</h1>
      <p className="hero__title hero-animate" style={{ '--i': 2 }}>{t.profile.title}</p>
      <p className="hero__tagline hero-animate" style={{ '--i': 3 }}>{t.profile.tagline}</p>
      <p className="hero__offer hero-animate" style={{ '--i': 4 }}>{t.hero.offer}</p>

      <div className="hero__actions hero-animate" style={{ '--i': 5 }}>
        <button type="button" className="btn btn--primary" onClick={() => scrollTo('projects')}>
          {t.hero.viewProjects}
        </button>
        <button type="button" className="btn btn--outline" onClick={() => scrollTo('contact')}>
          {t.hero.contact}
        </button>
        <a href={cvHref} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
          {t.hero.downloadCv}
        </a>
      </div>

      <div className="hero-animate" style={{ '--i': 6 }}>
        <SocialLinks className="hero__social" />
      </div>
    </section>
  )
}
