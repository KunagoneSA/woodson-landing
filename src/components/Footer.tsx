import { useLanguage } from '../i18n/LanguageContext'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-20 bg-darker border-t border-white/5">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
          <div>
            <h3 className="text-xl font-heading font-300 shimmer-text inline-block mb-4">Woodson</h3>
            <p className="text-white/25 text-sm leading-[1.8] font-body font-300">{t.footer.tagline}</p>
            <p className="text-white/12 text-xs font-body font-300 mt-4">Greenfire Sp. z o.o.</p>
          </div>
          <div>
            <h4 className="text-[11px] font-heading font-500 text-white/30 uppercase tracking-[0.2em] mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-sm text-white/30 font-body font-300">
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-accent/30" />
                <a href="mailto:hello@woodson.pl" className="hover:text-accent transition-colors">hello@woodson.pl</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-accent/30" />
                <a href="tel:+48882905145" className="hover:text-accent transition-colors">+48 882-905-145</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={14} className="text-accent/30" />
                <span>Pl. Kilińskiego 1, 32-660 Chełmek</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-heading font-500 text-white/30 uppercase tracking-[0.2em] mb-6">{t.footer.links}</h4>
            <ul className="space-y-4 text-sm text-white/30 font-body font-300">
              <li><a href="https://woodson.pl" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">woodson.pl</a></li>
              <li><a href="https://klejonkanawymiar.pl" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">klejonkanawymiar.pl</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-white/10 text-xs font-body font-300">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
