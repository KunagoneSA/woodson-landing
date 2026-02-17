import { useLanguage } from '../i18n/LanguageContext'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
      {/* Wood grain texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q25 15 50 20 T100 20' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3Cpath d='M0 40 Q25 35 50 40 T100 40' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3Cpath d='M0 60 Q25 55 50 60 T100 60' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3Cpath d='M0 80 Q25 75 50 80 T100 80' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[t.hero.badge1, t.hero.badge2, t.hero.badge3].map((badge) => (
            <span
              key={badge}
              className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90"
            >
              {badge}
            </span>
          ))}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
          {t.hero.headline}
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-body">
          {t.hero.subtitle}
        </p>

        <a
          href="#configurator"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg text-lg transition-colors shadow-lg shadow-accent/25"
        >
          {t.hero.cta}
          <ArrowDown size={20} />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-white/50" />
      </div>
    </section>
  )
}
