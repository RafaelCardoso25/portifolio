import { FaBriefcase, FaGraduationCap, FaPlaneDeparture } from 'react-icons/fa6'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { experiences } from '../data/experiences.js'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'

const icons = {
  work: FaBriefcase,
  education: FaGraduationCap,
  exchange: FaPlaneDeparture,
}

export default function Experiences() {
  const { t, pick } = useLanguage()

  return (
    <section className="container-page">
      <PageHeader label={t.experiences.label} title={t.experiences.title} subtitle={t.experiences.subtitle} />

      <ol className="mt-14 grid gap-5">
        {experiences.map((item, index) => {
          const Icon = icons[item.type]
          return (
            <Reveal as="li" key={item.id} delay={index * 0.06}>
              <article className="card grid gap-6 p-6 transition hover:border-ink-600 sm:p-8 md:grid-cols-[220px_1fr]">
                <div className="flex items-start gap-4 md:flex-col md:gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-ink-700 bg-ink-850 text-lg text-accent">
                    <Icon />
                  </span>
                  <div>
                    <p className="font-mono text-sm text-zinc-300">{pick(item.period)}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="chip">{t.experiences.types[item.type]}</span>
                      {item.current && (
                        <span className="chip border-accent/40 bg-accent/10 text-accent">{t.experiences.current}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{pick(item.role)}</h2>
                  <p className="mt-1 text-base font-medium text-accent">{pick(item.organization)}</p>
                  <p className="mt-4 leading-relaxed text-zinc-400">{pick(item.description)}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li key={tag} className="chip">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          )
        })}
      </ol>
    </section>
  )
}
