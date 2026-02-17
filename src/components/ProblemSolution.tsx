import { useLanguage } from '../i18n/LanguageContext'
import { X, Check } from 'lucide-react'

export function ProblemSolution() {
  const { t } = useLanguage()

  return (
    <section id="why-wood" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center text-text mb-16">
          {t.problem.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Cardboard - Problem */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-red-100 shadow-sm">
            <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-6">
              <X size={32} className="text-red-400" />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-text mb-6">
              {t.problem.cardboardTitle}
            </h3>
            <ul className="space-y-4">
              {t.problem.cardboardPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-text-light"
                >
                  <X size={18} className="text-red-400 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 h-48 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
              [Cardboard display photo]
            </div>
          </div>

          {/* Wood - Solution */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-primary/20 shadow-sm ring-2 ring-primary/10">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Check size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-text mb-6">
              {t.problem.woodTitle}
            </h3>
            <ul className="space-y-4">
              {t.problem.woodPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-text">
                  <Check
                    size={18}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 h-48 bg-secondary/50 rounded-xl flex items-center justify-center text-primary/50 text-sm">
              [Woodson display photo]
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
