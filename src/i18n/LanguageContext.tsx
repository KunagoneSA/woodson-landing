import { createContext, useContext, useState, type ReactNode } from 'react'
import { en } from './en'
import { pl } from './pl'
import { de } from './de'
import type { Translations } from './en'

type Language = 'en' | 'pl' | 'de'

const translations: Record<Language, Translations> = { en, pl, de }

interface LanguageContextType {
  lang: Language
  t: Translations
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')
  const t = translations[lang]

  const setLanguage = (newLang: Language) => setLang(newLang)

  return (
    <LanguageContext.Provider value={{ lang, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
