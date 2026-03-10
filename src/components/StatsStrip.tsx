import { useCounter } from '../hooks/useCounter'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function StatsStrip() {
  const s = useScrollReveal(0.5)
  const c1 = useCounter(30, 1500, s.visible)
  const c2 = useCounter(15, 1500, s.visible)
  const c3 = useCounter(100, 1500, s.visible)

  return (
    <div ref={s.ref} className="bg-accent py-10">
      <div className="max-w-5xl mx-auto px-8 flex items-center justify-between">
        {[
          { val: `${c1}×`, label: 'trwalsze niż karton' },
          { val: `${c2}+`, label: 'lat żywotności' },
          { val: `${c3}%`, label: 'lite drewno' },
        ].map((s, i) => (
          <div key={i} className="text-center flex-1">
            <div className="text-[2.8rem] sm:text-[3.5rem] font-heading font-800 text-white leading-none">{s.val}</div>
            <div className="text-[11px] text-white/60 font-heading font-500 uppercase tracking-[0.2em] mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
