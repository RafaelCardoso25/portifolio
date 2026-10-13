import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowDownWideShort, FaArrowUpWideShort } from 'react-icons/fa6'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { projects } from '../data/projects.js'
import PageHeader from '../components/PageHeader.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

const featuredTech = ['React', 'JavaScript', 'Python', 'Java', 'Supabase', 'Node.js']

export default function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')
  const [order, setOrder] = useState('asc')

  const visible = useMemo(() => {
    const filtered =
      filter === 'all' ? projects : projects.filter((project) => project.tech.includes(filter))
    const sorted = [...filtered].sort((a, b) => a.date.localeCompare(b.date))
    return order === 'asc' ? sorted : sorted.reverse()
  }, [filter, order])

  const filters = ['all', ...featuredTech.filter((tech) => projects.some((project) => project.tech.includes(tech)))]

  return (
    <section className="container-page">
      <PageHeader label={t.projects.label} title={t.projects.title} subtitle={t.projects.subtitle} />

      <div className="mt-12 flex flex-col gap-4 border-y border-ink-800 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label={t.projects.tech}>
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                filter === item
                  ? 'border-accent bg-accent text-ink-950'
                  : 'border-ink-700 text-zinc-400 hover:border-ink-600 hover:text-white'
              }`}
            >
              {item === 'all' ? t.projects.all : item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-zinc-500">{t.projects.count(visible.length)}</span>
          <button
            type="button"
            onClick={() => setOrder((value) => (value === 'asc' ? 'desc' : 'asc'))}
            className="btn-ghost px-4 py-2"
          >
            {order === 'asc' ? <FaArrowDownWideShort /> : <FaArrowUpWideShort />}
            {order === 'asc' ? t.projects.oldest : t.projects.newest}
          </button>
        </div>
      </div>

      <div className="relative mt-14">
        <div
          className="absolute bottom-0 left-[11px] top-2 w-px bg-gradient-to-b from-accent via-ink-700 to-transparent md:left-1/2"
          aria-hidden="true"
        />
        <AnimatePresence mode="popLayout">
          {visible.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pl-10 text-zinc-500"
            >
              {t.projects.empty}
            </motion.p>
          ) : (
            <ol className="space-y-12 md:space-y-16">
              {visible.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </ol>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
