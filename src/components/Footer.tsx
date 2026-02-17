import { useLanguage } from '../i18n/LanguageContext'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-text text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-3">Woodson</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {t.footer.tagline}
            </p>
            <p className="text-white/40 text-xs">Greenfire Sp. z o.o.</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={16} className="shrink-0" />
                <a
                  href="mailto:hello@woodson.pl"
                  className="hover:text-accent transition-colors"
                >
                  hello@woodson.pl
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={16} className="shrink-0" />
                <a
                  href="tel:+48882905145"
                  className="hover:text-accent transition-colors"
                >
                  +48 882-905-145
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin size={16} className="shrink-0" />
                <span>Pl. Kilińskiego 1, 32-660 Chełmek, Poland</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.links}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://woodson.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-sm hover:text-accent transition-colors"
                >
                  woodson.pl
                </a>
              </li>
              <li>
                <a
                  href="https://klejonkanawymiar.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-sm hover:text-accent transition-colors"
                >
                  klejonkanawymiar.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-xs">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
