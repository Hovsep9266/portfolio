import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'

export default function Services() {
  const { t } = useLanguage()
  const revealRef = useReveal()

  return (
    <section id="services" className="section reveal" ref={revealRef}>
      <h2 className="section__title">
        <span className="section__number">02.</span> {t.services.title}
      </h2>
      <ul className="services">
        {t.services.items.map(({ name, price }) => (
          <li key={name} className="services__item">
            <span className="services__name">{name}</span>
            <span className="services__price">{price}</span>
          </li>
        ))}
      </ul>
      <p className="services__note">{t.services.note}</p>
    </section>
  )
}
