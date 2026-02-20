import { useState, useEffect, useRef } from 'react'
import { useLanguage, type Language } from '../i18n/LanguageContext'
import { Menu, X, ChevronDown } from 'lucide-react'

const languageLabels: Record<Language, string> = {
  en: 'EN',
  pl: 'PL',
  de: 'DE',
}

const navLinks = [
  { key: 'products' as const, href: '#products' },
  { key: 'whyWood' as const, href: '#why-wood' },
  { key: 'configurator' as const, href: '#configurator' },
  { key: 'contact' as const, href: '#configurator' },
]

export function Navbar() {
  const { lang, t, setLanguage } = useLanguage()
  const languages: Language[] = ['en', 'pl', 'de']
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#"
            className={`text-2xl sm:text-3xl font-heading font-bold transition-colors ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
          >
            Woodson
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-text/70 hover:text-primary'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {t.nav[link.key]}
              </a>
            ))}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  scrolled
                    ? 'bg-primary/10 text-primary hover:bg-primary/20'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {languageLabels[lang]}
                <ChevronDown size={14} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden min-w-[80px]">
                  {languages.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLanguage(l); setLangOpen(false) }}
                      className={`w-full px-4 py-2 text-xs font-medium text-left transition-colors ${
                        lang === l
                          ? 'bg-primary text-white'
                          : 'text-text/70 hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      {languageLabels[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            className={`md:hidden p-2 ${scrolled ? 'text-text' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="block text-sm font-medium text-text/70 hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav[link.key]}
              </a>
            ))}
            <select
              value={lang}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border-none outline-none cursor-pointer"
            >
              {languages.map((l) => (
                <option key={l} value={l}>
                  {languageLabels[l]}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </nav>
  )
}
