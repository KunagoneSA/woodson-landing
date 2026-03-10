import { X, Check } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Comparison() {
  const s = useScrollReveal()

  return (
    <section className="py-16 sm:py-20 bg-dark overflow-hidden">
      <div ref={s.ref} className={`max-w-7xl mx-auto px-8 lg:px-12 reveal ${s.visible ? 'visible' : ''}`}>
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-white/30">Porównanie</span>
          <h2 className="mt-4 text-[2rem] sm:text-[2.6rem] font-heading font-800 text-white leading-[1.1] tracking-tight">
            Karton czy drewno?
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-0 items-stretch">
          {/* Karton — left */}
          <div className="relative bg-white/[0.04] border border-red-400/20 p-10 sm:p-12 flex flex-col items-center text-center">
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-500/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,50,50,0.06)_0%,_transparent_70%)]" />
            <div className="relative z-10 flex flex-col items-center w-full">
              <img src="/products/stand-kartonowy.png" alt="Kartonowy display"
                className="h-56 sm:h-72 object-contain mb-8" />
              <h3 className="text-xl font-heading font-700 text-white mb-6">
                Karton <span className="text-red-400">& plastik</span>
              </h3>
              <ul className="space-y-3 text-left w-full max-w-xs">
                <li className="flex items-center gap-3 text-sm text-white/65 font-body font-400">
                  <X size={16} className="text-red-400 shrink-0" />Niszczy się po tygodniach
                </li>
                <li className="flex items-center gap-3 text-sm text-white/65 font-body font-400">
                  <X size={16} className="text-red-400 shrink-0" />Wygląda tanio
                </li>
                <li className="flex items-center gap-3 text-sm text-white/65 font-body font-400">
                  <X size={16} className="text-red-400 shrink-0" />Brak brandingu
                </li>
                <li className="flex items-center gap-3 text-sm text-white/65 font-body font-400">
                  <X size={16} className="text-red-400 shrink-0" />Wymaga ciągłej wymiany
                </li>
              </ul>
            </div>
          </div>

          {/* VS divider */}
          <div className="hidden md:flex items-center justify-center px-6">
            <div className="flex flex-col items-center gap-3">
              <div className="w-px h-16 bg-white/10" />
              <span className="text-xs font-heading font-700 text-white/25 uppercase tracking-widest">vs</span>
              <div className="w-px h-16 bg-white/10" />
            </div>
          </div>

          {/* Drewno — right */}
          <div className="relative bg-accent/[0.04] border border-accent/15 p-10 sm:p-12 flex flex-col items-center text-center">
            <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,145,59,0.06)_0%,_transparent_70%)]" />
            <div className="relative z-10 flex flex-col items-center w-full">
              <img src="/products/stand-kunagone-render.png" alt="Woodson display"
                className="h-56 sm:h-72 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] mb-8" />
              <h3 className="text-xl font-heading font-700 text-white mb-6">
                Woodson <span className="text-accent">drewno</span>
              </h3>
              <ul className="space-y-3 text-left w-full max-w-xs">
                <li className="flex items-center gap-3 text-sm text-white/65 font-body font-400">
                  <Check size={16} className="text-accent shrink-0" />Wytrzymuje lata
                </li>
                <li className="flex items-center gap-3 text-sm text-white/65 font-body font-400">
                  <Check size={16} className="text-accent shrink-0" />Buduje wizerunek marki
                </li>
                <li className="flex items-center gap-3 text-sm text-white/65 font-body font-400">
                  <Check size={16} className="text-accent shrink-0" />100% naturalne drewno
                </li>
                <li className="flex items-center gap-3 text-sm text-white/65 font-body font-400">
                  <Check size={16} className="text-accent shrink-0" />Indywidualny projekt
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-white/25 font-body font-300">
            Różnica w cenie ~30–40% · Trwałość drewna <span className="text-accent font-500">wielokrotnie większa</span>
          </p>
        </div>
      </div>
    </section>
  )
}
