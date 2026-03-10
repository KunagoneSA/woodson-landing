import { useLanguage } from '../i18n/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

const items = [
  { img: '/products/stand-kunagone.png', span: 'col-span-1 row-span-2' },
  { img: '/products/ekspozytor-est2023.png', span: 'col-span-1' },
  { img: '/products/stand-kunagone-render.png', span: 'col-span-1' },
  { img: '/products/ekspozytor-regal.png', span: 'col-span-1 row-span-2' },
  { img: '/products/stand-tm-2022.png', span: 'col-span-1' },
  { img: '/products/ekspozytor-skrzynkowy-3.png', span: 'col-span-1' },
]

export function Portfolio() {
  const { t } = useLanguage()
  const s = useScrollReveal()

  return (
    <section id="products" className="py-16 sm:py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div ref={s.ref} className={`mb-12 reveal ${s.visible ? 'visible' : ''}`}>
          <span className="text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-accent/50">Realizacje</span>
          <h2 className="mt-6 text-[2rem] sm:text-[2.8rem] font-heading font-800 text-white leading-[1.1] tracking-tight">
            {t.portfolio.title}
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`${item.span} group relative bg-white/[0.03] border border-white/5 overflow-hidden hover-lift`}
            >
              <img src={item.img} alt={t.portfolio.items[i] || ''}
                className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {t.portfolio.items[i] && (
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white text-sm font-heading font-600">{t.portfolio.items[i]}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
