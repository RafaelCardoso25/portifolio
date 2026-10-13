import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    return 'pt'
  }
  return 'pt'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    try {
      localStorage.setItem('lang', lang)
    } catch {
      return
    }
  }, [lang])

  const toggle = useCallback(() => setLang((current) => (current === 'pt' ? 'en' : 'pt')), [])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle,
      t: translations[lang],
      pick: (field) => (field && typeof field === 'object' ? field[lang] : field),
    }),
    [lang, toggle],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
