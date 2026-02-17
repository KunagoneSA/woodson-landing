import { useLanguage } from '../i18n/LanguageContext'
import { Shield, TreePine, Ruler, Leaf } from 'lucide-react'

const icons = [Shield, TreePine, Ruler, Leaf]

export function WhyWoodson() {
  const { t } = useLanguage()

  return (
    <section className="py-20 sm:py-28 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-16">
          {t.why.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.why.cards.map((card, i) => {
            const Icon = icons[i]
            return (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Social proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-accent/80 border-2 border-primary flex items-center justify-center text-xs font-bold"
                >
                  {['A', 'B', 'C', 'D'][i]}
                </div>
              ))}
            </div>
            <span className="text-white/80 text-sm">{t.why.proof}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
