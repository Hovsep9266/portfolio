import { getEmailComposeUrl, profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import SocialLinks from './SocialLinks'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const { t } = useLanguage()
  const revealRef = useReveal()
  const emailUrl = getEmailComposeUrl(profile.email)
  const opensInBrowser = emailUrl.startsWith('https://')

  return (
    <section id="contact" className="section section--contact reveal" ref={revealRef}>
      <h2 className="section__title">
        <span className="section__number">04.</span> {t.sections.contact}
      </h2>
      <p className="contact__text">
        {t.contact.text}
      </p>
      <a
        href={emailUrl}
        className="btn btn--primary contact__btn"
        {...(opensInBrowser ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {t.contact.button}
      </a>
      <SocialLinks className="contact__social" />
    </section>
  )
}
