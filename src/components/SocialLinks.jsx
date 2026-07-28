import { profile } from '../data/profile'
import SocialIcon from './SocialIcon'

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`.trim()}>
      {profile.social.map(({ label, url, icon }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-links__item"
          aria-label={label}
        >
          <span className="social-links__icon">
            <SocialIcon name={icon} />
          </span>
          <span className="social-links__label">{label}</span>
        </a>
      ))}
    </div>
  )
}
