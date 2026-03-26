import { useLanguage } from '../i18n/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { MessageSquare, PenTool, Calculator, Hammer, Truck } from 'lucide-react'

const icons = [MessageSquare, PenTool, Calculator, Hammer, Truck]

export function Process() {
  const { t } = useLanguage()
  const s = useScrollReveal()

  return (
    <section id="process" className="pt-2 sm:pt-6 pb-6 sm:pb-14 bg-surface relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div ref={s.ref} className={`reveal ${s.visible ? 'visible' : ''}`}>

          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-accent">Proces</span>
            <h2 className="mt-4 text-[2rem] sm:text-[2.8rem] font-heading font-800 text-[#1a2e28] leading-[1.1] tracking-tight">
              {t.process.title}
            </h2>
            <p className="mt-4 text-lg text-[#4a5c56] font-body font-400">
              Od pomysłu do gotowego displaya — prosto i szybko.
            </p>
          </div>

          {/* Desktop — horizontal cards */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-4">
            {t.process.steps.map((step, i) => {
              const Icon = icons[i] || Hammer
              return (
                <div key={i}
                  className={`bg-white rounded-xl p-6 shadow-sm reveal ${s.visible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${0.1 * (i + 1)}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4 shadow-lg shadow-accent/20">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="text-[10px] font-heading font-500 text-accent/60 uppercase tracking-[0.15em] mb-1">Krok {i + 1}</div>
                  <h3 className="text-[15px] font-heading font-700 text-[#1a2e28] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#4a5c56] leading-[1.7] font-body font-300">{step.text}</p>
                </div>
              )
            })}
          </div>

          {/* Mobile — vertical timeline */}
          <div className="lg:hidden space-y-0">
            {t.process.steps.map((step, i) => {
              const Icon = icons[i] || Hammer
              const isLast = i === t.process.steps.length - 1
              return (
                <div key={i}
                  className={`flex gap-5 reveal ${s.visible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${0.1 * (i + 1)}s` }}
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
                      <Icon size={18} className="text-white" />
                    </div>
                    {!isLast && <div className="w-0.5 flex-1 bg-accent/20 my-1" />}
                  </div>
                  <div className="pb-8">
                    <div className="text-[10px] font-heading font-500 text-accent/60 uppercase tracking-[0.15em] mb-1">Krok {i + 1}</div>
                    <h3 className="text-base font-heading font-700 text-[#1a2e28] mb-1">{step.title}</h3>
                    <p className="text-sm text-[#4a5c56] leading-[1.7] font-body font-300">{step.text}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
