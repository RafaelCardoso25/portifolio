import { contacts } from '../data/contacts.js'

export default function SocialLinks({ compact = false }) {
  const size = compact ? 'h-10 w-10 text-base' : 'h-12 w-12 text-lg'

  return (
    <ul className="flex items-center gap-2">
      {contacts.map(({ id, label, href, icon: Icon }) => (
        <li key={id}>
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            aria-label={label}
            title={label}
            className={`grid ${size} place-items-center rounded-xl border border-ink-700 bg-ink-900 text-zinc-400 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent`}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  )
}
