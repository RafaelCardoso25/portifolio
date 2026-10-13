import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function ProjectCard({ project, index }) {
  const { t, pick } = useLanguage()
  const alignRight = index % 2 === 1
  const name = pick(project.name)

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 md:grid md:grid-cols-2 md:gap-14 md:pl-0"
    >
      <span
        className="absolute left-0 top-2 grid h-6 w-6 place-items-center rounded-full border border-accent/60 bg-ink-950 md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full bg-accent" />
      </span>

      <div className={`mb-4 md:mb-0 md:pt-1 ${alignRight ? 'md:order-2 md:pl-2' : 'md:pr-2 md:text-right'}`}>
        <p className="font-mono text-sm text-accent">{pick(project.period)}</p>
        <p className="mt-1 hidden font-mono text-xs text-zinc-600 md:block">
          #{String(index + 1).padStart(2, '0')}
        </p>
      </div>

      <article
        className={`card group overflow-hidden transition hover:border-ink-600 ${alignRight ? 'md:order-1' : ''}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-ink-700 bg-ink-850">
          <img
            src={project.image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{pick(project.description)}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.projects.tech}>
            {project.tech.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={project.repo} target="_blank" rel="noreferrer" className="btn-ghost px-4 py-2">
              <FaGithub /> {t.projects.repo}
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2">
                <FaArrowUpRightFromSquare /> {t.projects.live}
              </a>
            )}
          </div>
        </div>
      </article>
    </motion.li>
  )
}
