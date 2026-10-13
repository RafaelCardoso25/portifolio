import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const links = [
  { to: '/', key: 'about' },
  { to: '/projetos', key: 'projects' },
  { to: '/experiencias', key: 'experiences' },
  { to: '/contato', key: 'contact' },
]

function LanguageSwitch() {
  const { lang, toggle, t } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.nav.language}
      className="flex items-center rounded-full border border-ink-700 bg-ink-900 p-1 font-mono text-xs"
    >
      {['pt', 'en'].map((code) => (
        <span
          key={code}
          className={`rounded-full px-2.5 py-1 uppercase transition ${
            lang === code ? 'bg-accent text-ink-950' : 'text-zinc-500'
          }`}
        >
          {code}
        </span>
      ))}
    </button>
  )
}

export default function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        scrolled || open ? 'border-ink-800 bg-ink-950/85 backdrop-blur-xl' : 'border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-ink-700 bg-ink-900 font-display text-sm font-bold text-accent">
            RC
          </span>
          <span className="hidden font-display text-sm font-semibold text-zinc-100 sm:block">Rafael Cardoso</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {({ isActive }) => (
                <>
                  {t.nav[link.key]}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-3 -bottom-[1px] h-px bg-accent"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-ink-700 text-zinc-200 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-ink-800 md:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium ${
                      isActive ? 'bg-ink-850 text-accent' : 'text-zinc-300'
                    }`
                  }
                >
                  {t.nav[link.key]}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
