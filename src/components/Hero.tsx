import { useLanguage } from '../i18n/LanguageContext'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-dark overflow-hidden flex items-center pt-24 pb-10 lg:min-h-screen lg:py-0">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-accent/[0.12] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-accent/[0.06] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Mobile layout — centered */}
        <div className="lg:hidden text-center">
          <div className="anim-fade-up-1 overflow-hidden">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-800 text-white leading-[1.05] tracking-[-0.02em]">
              {t.hero.heroWord1}
              <br />
              <span className="shimmer-text">{t.hero.heroWord2}</span>
              <br />
              <span className="text-white/40">{t.hero.heroWord3}</span>
            </h1>
          </div>

          <p className="anim-fade-up-2 mt-6 text-base sm:text-lg text-white/70 font-body font-300 leading-relaxed mx-auto max-w-sm">
            {t.hero.subtitle}
          </p>

          <div className="anim-fade-up-3 flex justify-center mt-8">
            <img src="/products/v5.1-stand-pusty-nobg.webp" alt="Woodson display"
              className="max-h-[50vh] object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)]" />
          </div>

          <div className="anim-fade-up-3 mt-8 flex flex-col items-center gap-4">
            <a href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-surface text-darker font-heading font-600 text-[12px] uppercase tracking-[0.15em]">
              {t.hero.cta}
              <ArrowRight size={16} />
            </a>
            <a href="#products" className="text-white/60 text-sm font-heading font-500">
              {t.hero.seeProjects}
            </a>
          </div>
        </div>

        {/* Desktop layout — side by side */}
        <div className="hidden lg:grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <div className="anim-fade-up-1 overflow-hidden">
              <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-heading font-800 text-white leading-[1.02] tracking-[-0.02em]">
                {t.hero.heroWord1}
                <br />
                <span className="shimmer-text">{t.hero.heroWord2}</span>
                <br />
                <span className="text-white/40">{t.hero.heroWord3}</span>
              </h1>
            </div>

            <p className="anim-fade-up-2 mt-8 text-xl text-white/70 font-body font-300 leading-relaxed max-w-md">
              {t.hero.subtitle}
            </p>

            <div className="anim-fade-up-3 mt-10 flex items-center gap-6">
              <a href="#contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-surface text-darker font-heading font-600 text-[13px] uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-white/20">
                {t.hero.cta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#products" className="text-white/60 text-sm font-heading font-500 hover:text-white transition-colors">
                {t.hero.seeProjects}
              </a>
            </div>
          </div>

          <div className="flex justify-end anim-scale-in">
            <div className="anim-float relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,112,96,0.15)_0%,_transparent_60%)] scale-[2]" />
              <img src="/products/v5.1-stand-pusty-nobg.webp" alt="Woodson display"
                className="max-h-[80vh] object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.5)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
