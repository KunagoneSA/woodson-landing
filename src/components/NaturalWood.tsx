import { useLanguage } from '../i18n/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Leaf } from 'lucide-react'

export function NaturalWood() {
  const { t } = useLanguage()
  const s = useScrollReveal()

  return (
    <section id="why-wood" className="py-16 sm:py-20 bg-surface-warm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(196,145,59,0.04)_0%,_transparent_70%)]" />

      <div ref={s.ref} className={`max-w-6xl mx-auto px-8 lg:px-12 reveal ${s.visible ? 'visible' : ''} relative z-10`}>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img src="/products/stand-drewniany-produkty.png" alt="Ekspozytor z litego drewna"
              className="max-h-[500px] object-contain" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-accent">
              <Leaf size={14} />
              Naturalne drewno
            </span>
            <h2 className="mt-5 text-[2rem] sm:text-[2.8rem] font-heading font-800 text-text-dark leading-[1.1] tracking-tight">
              {t.wood.title}
            </h2>
            <p className="mt-5 text-base text-text-mid font-body font-300 leading-[2]">
              {t.wood.text}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-y-5 gap-x-8">
              {t.wood.yesList.map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 bg-accent/[0.06] border border-accent/10 rounded-sm">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full shrink-0" />
                  <span className="text-sm text-text-dark font-heading font-600">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-text-light font-body font-300 leading-relaxed">{t.wood.outro}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
