import { useLanguage } from '../i18n/LanguageContext'

const placeholderColors = [
  'bg-amber-50',
  'bg-orange-50',
  'bg-yellow-50',
  'bg-lime-50',
  'bg-emerald-50',
  'bg-teal-50',
]

export function Products() {
  const { t } = useLanguage()

  return (
    <section id="products" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            {t.products.title}
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.products.items.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`h-64 ${placeholderColors[i]} flex items-center justify-center overflow-hidden`}
              >
                <span className="text-text/30 text-sm group-hover:scale-110 transition-transform duration-500">
                  [{item.name} photo]
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-text mb-2">
                  {item.name}
                </h3>
                <p className="text-text-light text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
