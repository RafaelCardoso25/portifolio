import Reveal from './Reveal.jsx'

export default function PageHeader({ label, title, subtitle }) {
  return (
    <Reveal className="max-w-3xl">
      <p className="eyebrow">{label}</p>
      <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{title}</h1>
      {subtitle && <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">{subtitle}</p>}
    </Reveal>
  )
}
