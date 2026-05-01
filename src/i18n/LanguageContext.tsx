import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { en } from './en'
import { pl } from './pl'
import { de } from './de'
import type { Translations } from './en'

export type Language = 'en' | 'pl' | 'de'

const translations: Record<Language, Translations> = { en, pl, de }
const STORAGE_KEY = 'woodson-lang'
const SUPPORTED: Language[] = ['pl', 'en', 'de']

function detectInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'pl'
  const saved = window.localStorage.getItem(STORAGE_KEY) as Language | null
  if (saved && SUPPORTED.includes(saved)) return saved
  const nav = window.navigator.language?.slice(0, 2).toLowerCase()
  if (nav && (SUPPORTED as string[]).includes(nav)) return nav as Language
  return 'pl'
}

interface LanguageContextType {
  lang: Language
  t: Translations
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(detectInitialLanguage)
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    try { window.localStorage.setItem(STORAGE_KEY, lang) } catch {}
  }, [lang])

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
