import { getEmailComposeUrl, profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import SocialLinks from './SocialLinks'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const { lang, t } = useLanguage()
  const revealRef = useReveal()
  const emailUrl = getEmailComposeUrl(profile.email)
  const opensInBrowser = emailUrl.startsWith('https://')
  const cvHref = lang === 'en' ? '/cv-en.html' : '/cv-ru.html'

  return (
    <section id="contact" className="section section--contact reveal" ref={revealRef}>
      <h2 className="section__title">
        <span className="section__number">04.</span> {t.sections.contact}
      </h2>
      <p className="contact__text">
        {t.contact.text}
      </p>
      <div className="contact__actions">
        <a
          href={emailUrl}
          className="btn btn--primary"
          {...(opensInBrowser ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {t.contact.button}
        </a>
        <a href={cvHref} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
          {t.contact.downloadCv}
        </a>
      </div>
      <SocialLinks className="contact__social" />
    </section>
  )
}
