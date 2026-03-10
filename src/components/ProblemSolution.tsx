import { useLanguage } from '../i18n/LanguageContext'
import { Check } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function ProblemSolution() {
  const { t } = useLanguage()
  const s1 = useScrollReveal()
  const s2 = useScrollReveal()
  const s3 = useScrollReveal()

  return (
    <>
      {/* Problem — LIGHT */}
      <section className="py-14 sm:py-18 bg-surface">
        <div ref={s1.ref} className={`max-w-4xl mx-auto px-8 lg:px-12 reveal ${s1.visible ? 'visible' : ''}`}>
          <span className="text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-text-light">Problem</span>
          <h2 className="mt-6 text-[2rem] sm:text-[2.6rem] font-heading font-800 text-text-dark leading-[1.15] tracking-tight">
            {t.problem.title}
          </h2>
          <p className="mt-6 text-base text-text-mid leading-[2] font-body font-300 max-w-2xl">
            {t.problem.text}
          </p>
          <div className="mt-8 space-y-3">
            {t.problem.points.map((p, i) => (
              <p key={i} className="text-sm text-text-light leading-relaxed font-body font-300 pl-4 border-l-2 border-accent/20">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Solution — DARK */}
      <section className="py-14 sm:py-18 bg-dark">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div ref={s2.ref} className={`reveal-left ${s2.visible ? 'visible' : ''}`}>
              <span className="text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-accent/60">Rozwiązanie</span>
              <h2 className="mt-6 text-[2rem] sm:text-[2.6rem] font-heading font-800 text-white leading-[1.15] tracking-tight">
                {t.solution.title}
              </h2>
              <p className="mt-6 text-base text-white/40 leading-[2] font-body font-300">
                {t.solution.text}
              </p>
              <ul className="mt-8 space-y-4">
                {t.solution.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-white/55 font-body font-400">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div ref={s3.ref} className={`flex justify-center reveal-right ${s3.visible ? 'visible' : ''}`}>
              <img
                src="/products/stand-drewniany-produkty.png"
                alt="Ekspozytor Woodson"
                className="max-h-[520px] object-contain drop-shadow-[0_25px_70px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
