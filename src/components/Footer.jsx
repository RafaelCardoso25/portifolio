import { useLanguage } from '../i18n/LanguageContext.jsx'
import SocialLinks from './SocialLinks.jsx'

const year = new Date().getFullYear()

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative border-t border-ink-800 bg-ink-950">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-zinc-200">Rafael Abi-Saber Cardoso</p>
          <p className="mt-1 text-xs text-zinc-500">
            © {year} · {t.footer.rights} {t.footer.built}
          </p>
        </div>
        <SocialLinks compact />
      </div>
    </footer>
  )
}
