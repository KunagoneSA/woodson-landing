import { useLanguage } from '../i18n/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ShoppingBag, Sparkles, Leaf, LayoutGrid, Zap, Trophy } from 'lucide-react'

const icons = [ShoppingBag, Sparkles, Leaf, LayoutGrid, Zap, Trophy]

export function B2bUseCases() {
  const { t } = useLanguage()
  const s = useScrollReveal()

  return (
    <section className="py-6 sm:py-14 bg-surface">
      <div ref={s.ref} className={`max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 reveal ${s.visible ? 'visible' : ''}`}>
        <div className="text-center mb-8 sm:mb-14">
          <span className="text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-accent">B2B</span>
          <h2 className="mt-4 text-[2rem] sm:text-[2.6rem] font-heading font-800 text-[#1a2e28] leading-[1.1] tracking-tight">
            {t.b2b.title}
          </h2>
          <p className="mt-6 text-lg text-[#4a5c56] font-body font-300 leading-[2] max-w-2xl mx-auto">
            {t.b2b.text}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.b2b.items.map((item, i) => {
            const Icon = icons[i] || ShoppingBag
            return (
              <div key={i} className="bg-white/60 border border-accent/10 rounded-lg p-5 sm:p-8 hover-lift">
                <Icon size={24} className="text-accent mb-4" />
                <h3 className="text-base font-heading font-700 text-[#1a2e28] mb-3">{item.title}</h3>
                <p className="text-sm text-[#4a5c56] font-body font-300 leading-[1.8]">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
