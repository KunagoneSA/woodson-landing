import { useLanguage } from '../i18n/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight, Ruler, Weight, Eye, MapPin, Fingerprint, MoreHorizontal, Flame, Image, PenTool, Paintbrush, Droplets } from 'lucide-react'

const basisIcons = [Ruler, Weight, Eye, MapPin, Fingerprint, MoreHorizontal]
const persIcons = [Flame, Image, PenTool, Paintbrush, Droplets, MoreHorizontal]

export function CustomProject() {
  const { t } = useLanguage()
  const s = useScrollReveal()

  return (
    <section className="relative bg-surface overflow-hidden pt-6 sm:pt-14 pb-6 sm:pb-10">
      <div ref={s.ref} className={`max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 reveal ${s.visible ? 'visible' : ''}`}>

        <div className="text-center mb-8 sm:mb-14">
          <span className="text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-accent">Tworzony na wymiar</span>
          <h2 className="mt-4 text-[2rem] sm:text-[2.6rem] font-heading font-800 text-[#1a2e28] leading-[1.1] tracking-tight">
            {t.custom.title}
          </h2>
          <p className="mt-6 text-lg text-[#4a5c56] font-body font-300 leading-[2] max-w-4xl mx-auto ">
            {t.custom.text}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left — project basis */}
          <div className="bg-white/70 rounded-xl p-5 sm:p-10 border border-accent/10 flex flex-col">
            <h3 className="text-lg font-heading font-700 text-[#1a2e28] mb-6">Co bierzemy pod uwagę:</h3>
            <div className="space-y-3 flex-1">
              {t.custom.points.map((p, i) => {
                const Icon = basisIcons[i] || Ruler
                return (
                  <div key={i} className="flex items-center gap-4 bg-accent/[0.06] border border-accent/10 rounded-lg px-5 py-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <span className="text-[15px] font-heading font-500 text-[#1a2e28]">{p}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right — personalization */}
          <div className="bg-dark rounded-xl p-5 sm:p-10 border border-white/10 flex flex-col">
            <h3 className="text-lg font-heading font-700 text-white mb-6">{t.custom.personalization}</h3>
            <div className="space-y-3 flex-1">
              {t.custom.personalizationItems.map((item, i) => {
                const Icon = persIcons[i] || Paintbrush
                return (
                  <div key={i} className="flex items-center gap-4 bg-white/[0.06] border border-white/8 rounded-lg px-5 py-4">
                    <div className="w-10 h-10 rounded-full bg-surface/15 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-surface" />
                    </div>
                    <span className="text-[15px] font-heading font-500 text-white/85">{item}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-white font-heading font-600 text-[13px] uppercase tracking-[0.15em] transition-all duration-300 hover:bg-accent-hover hover:shadow-2xl hover:shadow-accent/20 rounded-lg">
            Zaprojektuj swój display
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  )
}
