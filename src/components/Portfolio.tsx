import { useLanguage } from '../i18n/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

const items = [
  { img: '/products/v3-wino-fest.webp', fit: 'object-cover object-center' },
  { img: '/products/v5-garden-hearth.webp', fit: 'object-contain p-2' },
  { img: '/products/v4-artisan-regal.webp', fit: 'object-cover object-center' },
  { img: '/products/v2-artisan-deska.webp', fit: 'object-cover object-center' },
  { img: '/products/v1-regaly-ogrodnicze.webp', fit: 'object-cover object-top' },
  { img: '/products/v6-sklep-stand.webp', fit: 'object-cover object-center' },
]

export function Portfolio() {
  const { t } = useLanguage()
  const s = useScrollReveal()

  return (
    <section id="products" className="py-6 sm:py-14 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.08] rounded-full blur-[200px]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div ref={s.ref} className={`mb-4 sm:mb-12 reveal relative z-10 text-center lg:text-left ${s.visible ? 'visible' : ''}`}>
          <span className="text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-surface">{t.portfolio.label}</span>
          <h2 className="mt-3 sm:mt-6 text-[2rem] sm:text-[2.8rem] font-heading font-800 text-white leading-[1.1] tracking-tight">
            {t.portfolio.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative aspect-[3/4] bg-white/[0.06] rounded-lg border border-white/10 overflow-hidden hover-lift"
            >
              <img src={item.img} alt=""
                className={`absolute inset-0 w-full h-full ${item.fit} transition-transform duration-700 group-hover:scale-105`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
