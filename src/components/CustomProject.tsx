import { useLanguage } from '../i18n/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight } from 'lucide-react'

export function CustomProject() {
  const { t } = useLanguage()
  const s = useScrollReveal()

  return (
    <section className="relative bg-surface overflow-hidden">
      {/* Full-width product strip */}
      <div className="flex items-center justify-center gap-8 py-8 bg-surface-warm border-y border-text-dark/5 overflow-hidden">
        {['/products/stand-kunagone.png', '/products/stand-tm-2022.png', '/products/stand-drewniany-produkty.png', '/products/ekspozytor-regal.png', '/products/stand-kunagone-render.png'].map((src, i) => (
          <img key={i} src={src} alt="" className="h-32 object-contain opacity-40 shrink-0" />
        ))}
      </div>

      <div ref={s.ref} className={`py-14 sm:py-18 max-w-3xl mx-auto px-8 lg:px-12 text-center reveal ${s.visible ? 'visible' : ''}`}>
        <span className="text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-accent">Twój projekt</span>
        <h2 className="mt-6 text-[2rem] sm:text-[2.8rem] font-heading font-800 text-text-dark leading-[1.1] tracking-tight">
          {t.custom.title}
        </h2>
        <p className="mt-8 text-lg text-text-mid font-body font-300 leading-[2]">
          {t.custom.text}
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {t.custom.points.map((p, i) => (
            <span key={i} className="px-5 py-2.5 bg-white border border-text-dark/8 text-sm text-text-dark font-heading font-500">
              {p}
            </span>
          ))}
        </div>

        <div className="mt-14">
          <a href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-white font-heading font-600 text-[13px] uppercase tracking-[0.15em] transition-all duration-300 hover:bg-accent-hover hover:shadow-2xl hover:shadow-accent/20">
            Zaprojektuj swój display
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
