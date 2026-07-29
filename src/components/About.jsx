import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const { t } = useLanguage()
  const revealRef = useReveal()

  return (
    <section id="about" className="section reveal" ref={revealRef}>
      <h2 className="section__title">
        <span className="section__number">01.</span> {t.sections.about}
      </h2>
      <div className="about">
        <div className="about__text">
          {t.profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="about__location">{t.profile.location}</p>

          <div className="about__languages">
            <h3 className="about__languages-title">{t.profile.languagesTitle}</h3>
            <ul className="about__languages-list">
              {t.profile.languages.map(({ name, level }) => (
                <li key={name} className="about__language">
                  <span className="about__language-name">{name}</span>
                  <span className="about__language-level">{level}</span>
                </li>
              ))}
            </ul>
          </div>
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
