import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { contacts } from '../data/contacts.js'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section className="container-page">
      <PageHeader label={t.contact.label} title={t.contact.title} subtitle={t.contact.subtitle} />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2 className="text-lg font-semibold">{t.contact.channels}</h2>
          <ul className="mt-5 grid gap-3">
            {contacts.map(({ id, label, value, href, icon: Icon }) => (
              <li key={id}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="card group flex items-center gap-4 p-4 transition hover:border-accent/50"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink-850 text-xl text-zinc-300 transition group-hover:bg-accent group-hover:text-ink-950">
                    <Icon />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-wider text-zinc-500">{label}</span>
                    <span className="block truncate font-medium text-zinc-100">{value}</span>
                  </span>
                  <FaArrowUpRightFromSquare className="text-sm text-zinc-600 transition group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
