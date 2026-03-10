import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Faq() {
  const { t } = useLanguage()
  const [open, setOpen] = useState<number | null>(null)
  const s = useScrollReveal()

  return (
    <section className="py-14 sm:py-18 bg-dark">
      <div ref={s.ref} className={`max-w-3xl mx-auto px-8 lg:px-12 reveal ${s.visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <span className="text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-white/30">FAQ</span>
          <h2 className="mt-6 text-[2rem] sm:text-[2.6rem] font-heading font-800 text-white leading-[1.15] tracking-tight">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <div key={i} className="border border-white/8 hover:border-white/15 transition-colors">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-6 text-left"
              >
                <span className="text-[15px] font-heading font-600 text-white/70 pr-4">{item.q}</span>
                <ChevronDown size={16} className={`text-accent shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40' : 'max-h-0'}`}>
                <p className="px-7 pb-6 text-sm text-white/35 leading-[1.9] font-body font-300">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
