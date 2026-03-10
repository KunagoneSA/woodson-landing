import { useLanguage } from '../i18n/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Process() {
  const { t } = useLanguage()
  const s = useScrollReveal()

  return (
    <section id="process" className="py-16 sm:py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div ref={s.ref} className={`reveal ${s.visible ? 'visible' : ''}`}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
            <div>
              <span className="text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-accent/50">Proces</span>
              <h2 className="mt-6 text-[2rem] sm:text-[2.8rem] font-heading font-800 text-white leading-[1.1] tracking-tight">
                {t.process.title}
              </h2>
            </div>
            <p className="text-white/25 text-sm font-body font-300 mt-4 lg:mt-0 max-w-xs">Od pomysłu do gotowego displaya — prosto i szybko.</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/8" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6">
              {t.process.steps.map((step, i) => (
                <div key={i} className={`reveal ${s.visible ? 'visible' : ''}`} style={{ transitionDelay: `${0.12 * (i + 1)}s` }}>
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-accent mb-6 relative z-10" />
                  </div>
                  <div className="text-[11px] font-heading font-500 text-white/15 uppercase tracking-[0.15em] mb-2">Krok {i + 1}</div>
                  <h3 className="text-base font-heading font-700 text-white/80 mb-3">{step.title}</h3>
                  <p className="text-sm text-white/30 leading-[1.8] font-body font-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
