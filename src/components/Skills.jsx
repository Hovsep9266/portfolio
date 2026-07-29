import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  const { t } = useLanguage()
  const revealRef = useReveal()

  return (
    <section id="skills" className="section reveal" ref={revealRef}>
      <h2 className="section__title">
        <span className="section__number">03.</span> {t.sections.skills}
      </h2>
      <div className="skills">
        {profile.skills.map(({ name, level }) => (
          <div key={name} className="skill">
            <div className="skill__header">
              <span className="skill__name">{name}</span>
              <span className="skill__level">{level}%</span>
            </div>
            <div className="skill__bar">
              <div className="skill__fill" style={{ '--level': `${level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
