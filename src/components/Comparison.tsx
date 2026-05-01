import { X, Check } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../i18n/LanguageContext'

export function Comparison() {
  const s = useScrollReveal()
  const { t } = useLanguage()

  return (
    <section className="py-6 sm:py-14 bg-darker overflow-hidden">
      <div ref={s.ref} className={`max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 reveal ${s.visible ? 'visible' : ''}`}>
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-14">
          <span className="text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-surface/80">{t.comparison.label}</span>
          <h2 className="mt-4 text-[2rem] sm:text-[2.6rem] font-heading font-800 text-white leading-[1.1] tracking-tight">
            {t.comparison.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Karton — left */}
          <div className="relative bg-white/[0.06] border border-red-400/20 rounded-xl p-5 sm:p-8 md:p-10 flex flex-col items-center text-center">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-400/70 rounded-t-xl" />
            <img loading="lazy" src="/products/stand-kartonowy.webp" alt="Kartonowy display"
              className="h-48 sm:h-60 object-contain mb-6" />
            <h3 className="text-xl font-heading font-700 text-white mb-6">
              Karton <span className="text-red-400">&amp; {t.comparison.cardboardTitle.split('& ')[1]}</span>
            </h3>
            <ul className="space-y-4 text-left w-full">
              {t.comparison.cardboardItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/60 font-body font-400">
                  <div className="w-7 h-7 rounded-full bg-red-400/15 flex items-center justify-center shrink-0">
                    <X size={14} className="text-red-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Drewno — right */}
          <div className="relative bg-surface/10 border border-surface/20 rounded-xl p-5 sm:p-8 md:p-10 flex flex-col items-center text-center">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-surface rounded-t-xl" />
            <img loading="lazy" src="/products/v5.1-stand-pusty-nobg.webp" alt="Woodson display"
              className="h-48 sm:h-60 object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.3)] mb-6" />
            <h3 className="text-xl font-heading font-700 text-white mb-6">
              Woodson <span className="text-surface">{t.comparison.woodTitle}</span>
            </h3>
            <ul className="space-y-4 text-left w-full">
              {t.comparison.woodItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/75 font-body font-400">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-surface" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          <div className="bg-white/[0.06] border border-white/10 rounded-xl py-5 px-6 text-center">
            <p className="text-sm text-white/50 font-body font-300 mb-1">{t.comparison.priceLabel}</p>
            <p className="text-2xl font-heading font-800 text-white">~30–40%</p>
          </div>
          <div className="bg-surface/10 border border-surface/20 rounded-xl py-5 px-6 text-center">
            <p className="text-sm text-white/50 font-body font-300 mb-1">{t.comparison.durabilityLabel}</p>
            <p className="text-2xl font-heading font-800 text-surface">{t.comparison.durabilityValue}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
