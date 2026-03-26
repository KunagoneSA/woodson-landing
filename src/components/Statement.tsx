import { useLanguage } from '../i18n/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Statement() {
  const { t } = useLanguage()
  const s = useScrollReveal()

  return (
    <section className="py-6 sm:py-14 bg-surface">
      <div ref={s.ref} className={`max-w-4xl mx-auto px-8 lg:px-12 text-center reveal ${s.visible ? 'visible' : ''}`}>
        <p className="text-[clamp(1.6rem,3.5vw,3rem)] font-heading font-300 text-[#1a2e28] leading-[1.3] tracking-tight">
          {t.problem.title}
        </p>
        <div className="w-16 h-0.5 gold-line mx-auto mt-8 mb-8" />
        <p className="text-lg text-[#4a5c56] font-body font-300 leading-[2] max-w-2xl mx-auto">
          {t.solution.text}
        </p>
      </div>
    </section>
  )
}
