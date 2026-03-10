import { useLanguage } from '../i18n/LanguageContext'
import { Check } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Trust() {
  const { t } = useLanguage()
  const s = useScrollReveal()

  return (
    <section className="py-14 sm:py-18 bg-dark">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div ref={s.ref} className={`grid md:grid-cols-2 gap-20 items-center reveal ${s.visible ? 'visible' : ''}`}>
          <div>
            <span className="text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-accent/50">Zaufanie</span>
            <h2 className="mt-6 text-[2rem] sm:text-[2.6rem] font-heading font-800 text-white leading-[1.15] tracking-tight">
              {t.trust.title}
            </h2>
            <p className="mt-6 text-base text-white/35 leading-[2] font-body font-300 mb-10">
              {t.trust.text}
            </p>
            <ul className="space-y-4">
              {t.trust.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-white/50 font-body font-400">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,145,59,0.06)_0%,_transparent_70%)] scale-150" />
            <img src="/products/stand-kunagone.png" alt="Stand Woodson"
              className="max-h-[480px] object-contain drop-shadow-[0_25px_70px_rgba(0,0,0,0.4)]" />
          </div>
        </div>
      </div>
    </section>
  )
}
