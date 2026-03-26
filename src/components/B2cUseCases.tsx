import { useLanguage } from '../i18n/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Home, BookOpen, UtensilsCrossed, PartyPopper, Camera, Store } from 'lucide-react'

const highlights = [
  { icon: Home, key: 0 },
  { icon: BookOpen, key: 1 },
  { icon: UtensilsCrossed, key: 3 },
  { icon: PartyPopper, key: 5 },
  { icon: Store, key: 6 },
  { icon: Camera, key: 8 },
]

export function B2cUseCases() {
  const { t } = useLanguage()
  const s = useScrollReveal()

  return (
    <section className="pt-4 sm:pt-8 pb-6 sm:pb-14 bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/[0.08] rounded-full blur-[200px] -translate-y-1/2" />
      <div ref={s.ref} className={`max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 reveal ${s.visible ? 'visible' : ''}`}>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 items-center">

          {/* Left — text */}
          <div>
            <span className="text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-surface/80 block text-center lg:text-left">Nie tylko dla firm</span>
            <h2 className="mt-4 text-[2rem] sm:text-[2.4rem] font-heading font-800 text-white leading-[1.1] text-center lg:text-left tracking-tight">
              {t.b2c.title}
            </h2>
            <p className="mt-6 text-base text-white/50 font-body font-300 leading-[2] text-center lg:text-left">
              {t.b2c.text}
            </p>
          </div>

          {/* Right — icon grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {highlights.map(({ icon: Icon, key }) => {
              const item = t.b2c.items[key]
              if (!item) return null
              return (
                <div key={key} className="bg-white/[0.06] border border-white/10 rounded-xl p-5 text-center hover-lift">
                  <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-3">
                    <Icon size={22} className="text-surface" />
                  </div>
                  <h3 className="text-sm font-heading font-600 text-white/85 mb-1">{item.title}</h3>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
