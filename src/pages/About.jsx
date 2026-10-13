import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaJava, FaLocationDot } from 'react-icons/fa6'
import {
  SiGit,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from 'react-icons/si'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import Reveal from '../components/Reveal.jsx'
import SocialLinks from '../components/SocialLinks.jsx'

const stack = [
  { name: 'Java', icon: FaJava },
  { name: 'Python', icon: SiPython },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Vite', icon: SiVite },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Git', icon: SiGit },
  { name: 'Vercel', icon: SiVercel },
]

function ProfileCard() {
  const { lang } = useLanguage()
  const lines = [
    ['name', '"Rafael Abi-Saber Cardoso"'],
    ['course', lang === 'pt' ? '"Engenharia de Software"' : '"Software Engineering"'],
    ['university', '"PUC Minas"'],
    ['city', '"Belo Horizonte"'],
    ['learning', '["Java", "Python"]'],
    ['english', lang === 'pt' ? '"Fluente"' : '"Fluent"'],
    ['openToWork', 'true'],
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="card relative w-full overflow-hidden bg-ink-900 shadow-2xl shadow-black/70"
    >
      <div className="flex items-center gap-2 border-b border-ink-700 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-ink-600" />
        <span className="h-3 w-3 rounded-full bg-ink-600" />
        <span className="h-3 w-3 rounded-full bg-accent" />
        <span className="ml-3 font-mono text-xs text-zinc-500">rafael.json</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-6">
        <span className="text-zinc-500">{'{'}</span>
        {lines.map(([key, value], index) => (
          <div key={key} className="pl-4">
            <span className="text-accent">"{key}"</span>
            <span className="text-zinc-500">: </span>
            <span className={value === 'true' ? 'text-sky-300' : 'text-zinc-200'}>{value}</span>
            {index < lines.length - 1 && <span className="text-zinc-500">,</span>}
          </div>
        ))}
        <span className="text-zinc-500">{'}'}</span>
      </pre>
    </motion.div>
  )
}

export default function About() {
  const { t } = useLanguage()

  return (
    <>
      <section className="container-page grid items-center gap-12 pb-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900 px-3 py-1.5 text-xs font-medium text-zinc-300"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            {t.hero.status}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-8 text-lg text-zinc-400"
          >
            {t.hero.greeting}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Rafael Abi-Saber
            <span className="block text-zinc-500">Cardoso.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300"
          >
            {t.hero.role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-3 flex items-center gap-2 text-sm text-zinc-500"
          >
            <FaLocationDot className="text-accent" /> {t.hero.location}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link to="/projetos" className="btn-primary">
              {t.hero.ctaProjects} <FaArrowRight />
            </Link>
            <Link to="/contato" className="btn-ghost">
              {t.hero.ctaContact}
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <SocialLinks compact />
          </motion.div>
        </div>
        <div className="relative mx-auto w-full max-w-md pb-4 lg:max-w-none lg:pb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[4/5] overflow-hidden rounded-3xl border border-ink-700 bg-ink-900 lg:ml-12"
          >
            <img
              src="/profile.jpg"
              alt="Rafael Abi-Saber Cardoso"
              className="h-full w-full object-cover object-top"
              width="520"
              height="641"
            />
          </motion.div>
          <div className="relative -mt-20 px-4 sm:px-10 lg:absolute lg:-bottom-20 lg:-left-6 lg:mt-0 lg:w-[320px] lg:px-0">
            <ProfileCard />
          </div>
        </div>
      </section>

      <section id="sobre" className="container-page border-t border-ink-800 pt-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">{t.about.label}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{t.about.title}</h2>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {t.about.highlights.map((item) => (
                <div key={item.label} className="card p-4">
                  <p className="font-display text-2xl font-bold text-white sm:text-3xl">{item.value}</p>
                  <p className="mt-1 text-xs leading-snug text-zinc-500">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="card p-6">
            <h3 className="text-lg font-semibold">{t.about.interestsTitle}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t.about.interests.map((interest) => (
                <li key={interest} className="chip">
                  {interest}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="card p-6">
            <h3 className="text-lg font-semibold">{t.about.languagesTitle}</h3>
            <ul className="mt-4 space-y-4">
              {t.about.languages.map((language) => (
                <li key={language.name}>
                  <p className="text-sm font-medium text-zinc-100">{language.name}</p>
                  <p className="mt-0.5 text-sm text-zinc-500">{language.level}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.16} className="card p-6 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold">{t.about.goalsTitle}</h3>
            <ul className="mt-4 space-y-3">
              {t.about.goals.map((goal) => (
                <li key={goal} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {goal}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h3 className="text-lg font-semibold">{t.about.stackTitle}</h3>
          <ul className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-7">
            {stack.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="card group flex flex-col items-center gap-3 p-4 transition hover:-translate-y-1 hover:border-accent/50"
              >
                <Icon className="text-2xl text-zinc-400 transition group-hover:text-accent" />
                <span className="text-xs font-medium text-zinc-400">{name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  )
}
