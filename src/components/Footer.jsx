import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <p>{t.footer.madeWith} · {profile.name} · {new Date().getFullYear()}</p>
    </footer>
  )
}
