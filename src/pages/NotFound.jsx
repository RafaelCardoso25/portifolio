import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <section className="container-page flex flex-col items-center py-24 text-center">
      <p className="font-mono text-7xl font-bold text-accent">404</p>
      <h1 className="mt-6 text-2xl font-semibold">{t.notFound.title}</h1>
      <Link to="/" className="btn-primary mt-8">
        {t.notFound.back}
      </Link>
    </section>
  )
}
