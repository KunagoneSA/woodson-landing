import { useState, useEffect, useRef } from 'react'
import { useLanguage, type Language } from '../i18n/LanguageContext'
import { Menu, X, ChevronDown } from 'lucide-react'
import logoWhite from '../assets/woodson-logo-white.png'

const languageLabels: Record<Language, string> = { en: 'EN', pl: 'PL', de: 'DE' }
const navLinks = [
  { key: 'products' as const, href: '#products' },
  { key: 'whyWood' as const, href: '#why-wood' },
  { key: 'process' as const, href: '#process' },
  { key: 'contact' as const, href: '#contact' },
]

export function Navbar() {
  const { lang, t, setLanguage } = useLanguage()
  const languages: Language[] = ['en', 'pl', 'de']
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const h = (e: MouseEvent) => { if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', s)
    return () => window.removeEventListener('scroll', s)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#">
            <img src={logoWhite} alt="Woodson"
              className={`h-6 w-auto transition-all duration-500 ${scrolled ? 'brightness-0' : ''}`} />
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <a key={l.key} href={l.href}
                className={`text-[11px] font-heading font-600 uppercase tracking-[0.2em] transition-colors duration-300 ${
                  scrolled ? 'text-text-dark/40 hover:text-accent' : 'text-white/40 hover:text-white'
                }`}>
                {t.nav[l.key]}
              </a>
            ))}
            <div className="relative" ref={langRef}>
              <button onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1 px-3 py-1.5 text-[10px] font-heading font-600 tracking-[0.15em] transition-colors border ${
                  scrolled ? 'text-accent border-accent/20 hover:border-accent/40' : 'text-accent/70 border-accent/15 hover:text-accent'
                }`}>
                {languageLabels[lang]}
                <ChevronDown size={11} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className={`absolute right-0 mt-2 border overflow-hidden min-w-[70px] ${
                  scrolled ? 'bg-white border-gray-100 shadow-lg' : 'bg-dark border-white/10'
                }`}>
                  {languages.map((l) => (
                    <button key={l} onClick={() => { setLanguage(l); setLangOpen(false) }}
                      className={`w-full px-4 py-2 text-[10px] font-heading font-600 tracking-wider text-left transition-colors ${
                        lang === l ? 'bg-accent text-white' :
                        scrolled ? 'text-text-dark/50 hover:text-accent hover:bg-accent/5' : 'text-white/40 hover:text-accent hover:bg-white/5'
                      }`}>
                      {languageLabels[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button className={`md:hidden p-2 ${scrolled ? 'text-text-dark' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={`md:hidden border-t px-8 py-6 space-y-4 ${
          scrolled ? 'bg-white/95 backdrop-blur-md border-gray-100' : 'bg-dark/95 backdrop-blur-md border-white/5'
        }`}>
          {navLinks.map((l) => (
            <a key={l.key} href={l.href} onClick={() => setMobileOpen(false)}
              className={`block text-sm font-heading font-500 ${scrolled ? 'text-text-dark/50 hover:text-accent' : 'text-white/50 hover:text-accent'}`}>
              {t.nav[l.key]}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
