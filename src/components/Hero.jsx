import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import SocialLinks from './SocialLinks'

export default function Hero() {
  const { t } = useLanguage()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <p className="hero__greeting">{t.hero.greeting}</p>
      <h1 className="hero__name">{profile.name}</h1>
      <p className="hero__title">{t.profile.title}</p>
      <p className="hero__tagline">{t.profile.tagline}</p>

      <div className="hero__actions">
        <button type="button" className="btn btn--primary" onClick={() => scrollTo('projects')}>
          {t.hero.viewProjects}
        </button>
        <button type="button" className="btn btn--outline" onClick={() => scrollTo('contact')}>
          {t.hero.contact}
        </button>
      </div>

      <SocialLinks className="hero__social" />
    </section>
  )
}
