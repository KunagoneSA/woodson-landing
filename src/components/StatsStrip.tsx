import { useCounter } from '../hooks/useCounter'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../i18n/LanguageContext'

export function StatsStrip() {
  const s = useScrollReveal(0.5)
  const { t } = useLanguage()
  const c1 = useCounter(30, 1500, s.visible)
  const c2 = useCounter(15, 1500, s.visible)
  const c3 = useCounter(100, 1500, s.visible)

  return (
    <div ref={s.ref} className="bg-accent py-4 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-2">
        {[
          { val: `${c1}×`, label: t.stats.items[0] },
          { val: `${c2}+`, label: t.stats.items[1] },
          { val: `${c3}%`, label: t.stats.items[2] },
        ].map((s, i) => (
          <div key={i} className="text-center flex-1">
            <div className="text-[1.4rem] sm:text-[2.2rem] md:text-[3.5rem] font-heading font-800 text-white leading-none">{s.val}</div>
            <div className="text-[9px] sm:text-[11px] text-white/60 font-heading font-500 uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-1 sm:mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
