import { createContext, useContext, useState, type ReactNode } from 'react'
import { en } from './en'
import { pl } from './pl'
import type { Translations } from './en'

type Language = 'en' | 'pl'

interface LanguageContextType {
  lang: Language
  t: Translations
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')
  const t = lang === 'en' ? en : pl

  const toggleLanguage = () =>
    setLang((prev) => (prev === 'en' ? 'pl' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
