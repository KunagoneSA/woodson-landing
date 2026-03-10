import { useLanguage } from '../i18n/LanguageContext'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen bg-dark overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
        <div>
          <div className="anim-fade-up-1 overflow-hidden">
            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-heading font-800 text-white leading-[1.02] tracking-[-0.02em]">
              Drewniane
              <br />
              <span className="shimmer-text">displaye</span>
              <br />
              <span className="text-white/40">na lata</span>
            </h1>
          </div>

          <p className="anim-fade-up-2 mt-8 text-lg sm:text-xl text-white/35 font-body font-300 leading-relaxed max-w-md">
            {t.hero.subtitle}
          </p>

          <div className="anim-fade-up-3 mt-10 flex items-center gap-6">
            <a href="#contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-white font-heading font-600 text-[13px] uppercase tracking-[0.15em] transition-all duration-300 hover:bg-accent-hover hover:shadow-2xl hover:shadow-accent/20">
              {t.hero.cta}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#products" className="text-white/30 text-sm font-heading font-500 hover:text-white/60 transition-colors">
              Zobacz realizacje →
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-end anim-scale-in">
          <div className="anim-float relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,145,59,0.08)_0%,_transparent_60%)] scale-[2]" />
            <img src="/products/stand-kunagone-render.png" alt="Ekspozytor Woodson"
              className="max-h-[80vh] object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </div>
    </section>
  )
}
