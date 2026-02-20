import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { key: 'products' as const, href: '#products' },
  { key: 'whyWood' as const, href: '#why-wood' },
  { key: 'configurator' as const, href: '#configurator' },
  { key: 'contact' as const, href: '#configurator' },
]

export function Navbar() {
  const { lang, t, setLanguage } = useLanguage()
  const languages = ['en', 'pl', 'de'] as const
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
            <div className="flex items-center gap-1">
              {languages.map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${
                    lang === l
                      ? scrolled
                        ? 'bg-primary text-white'
                        : 'bg-white text-primary'
                      : scrolled
                        ? 'text-primary/60 hover:bg-primary/10'
                        : 'text-white/60 hover:bg-white/20'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
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
            <div className="flex items-center gap-1">
              {languages.map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${
                    lang === l
                      ? 'bg-primary text-white'
                      : 'text-primary/60 hover:bg-primary/10'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
