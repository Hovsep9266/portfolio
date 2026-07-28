import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section">
      <h2 className="section__title">
        <span className="section__number">01.</span> {t.sections.about}
      </h2>
      <div className="about">
        <div className="about__text">
          {t.profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="about__location">{t.profile.location}</p>
        </div>
        <div className="about__avatar" aria-hidden="true">
          <div className="about__avatar-inner">
            <span>{profile.name.charAt(0)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
