import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'

function isLiveUrl(url) {
  return url && url !== '#'
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const revealRef = useReveal()

  const openProject = (url) => {
    if (isLiveUrl(url)) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="projects" className="section section--projects reveal" ref={revealRef}>
      <h2 className="section__title">
        <span className="section__number">04.</span> {t.sections.projects}
      </h2>
      <div className="projects">
        {profile.projects.map((project, index) => (
          <article
            key={project.id}
            className={[
              'project-card',
              index === 0 && 'project-card--featured',
              isLiveUrl(project.url) && 'project-card--clickable',
            ].filter(Boolean).join(' ')}
            style={{ '--i': index }}
            onClick={() => openProject(project.url)}
            onKeyDown={(e) => {
              if (isLiveUrl(project.url) && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault()
                openProject(project.url)
              }
            }}
            role={isLiveUrl(project.url) ? 'link' : undefined}
            tabIndex={isLiveUrl(project.url) ? 0 : undefined}
          >
            <div className="project-card__preview">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
              />
              {isLiveUrl(project.url) && (
                <div className="project-card__overlay" aria-hidden="true">
                  <span>{t.common.openProject}</span>
                  <ExternalIcon />
                </div>
              )}
            </div>
            <div className="project-card__body">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{t.projects[project.id].description}</p>
              <div className="project-card__footer">
                <ul className="project-card__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-card__links" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    GitHub
                  </a>
                  {isLiveUrl(project.url) && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link project-card__link--primary"
                    >
                      {t.common.demo}
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
