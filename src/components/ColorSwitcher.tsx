import { useState } from 'react'

const palettes = [
  {
    name: 'Miętowy (obecny)',
    surface: '#d4e8e2',
    surfaceWarm: '#c5ddd6',
    accent: '#007060',
    accentHover: '#008a75',
    dark: '#005a4c',
    darker: '#004d40',
    textDark: '#1a2420',
    textMid: '#4a5c56',
  },
  {
    name: 'Leśny zielony',
    surface: '#d6e2cd',
    surfaceWarm: '#c8d6be',
    accent: '#4a6741',
    accentHover: '#5a7a50',
    dark: '#2d3e28',
    darker: '#1e2d1a',
    textDark: '#1a2418',
    textMid: '#4a5c46',
  },
  {
    name: 'Sosnowy jasny',
    surface: '#ede4d3',
    surfaceWarm: '#e2d7c4',
    accent: '#8b7035',
    accentHover: '#a0833f',
    dark: '#4a3f2e',
    darker: '#332b1e',
    textDark: '#2e2618',
    textMid: '#6b5d4a',
  },
  {
    name: 'Sosna naturalna',
    surface: '#e6dbc7',
    surfaceWarm: '#d9ceb7',
    accent: '#7a6530',
    accentHover: '#917838',
    dark: '#3e3322',
    darker: '#2a2318',
    textDark: '#2a2015',
    textMid: '#655740',
  },
  {
    name: 'Ciepły dąb',
    surface: '#e0d3be',
    surfaceWarm: '#d4c7af',
    accent: '#6b5528',
    accentHover: '#7d6530',
    dark: '#3a2f1e',
    darker: '#282014',
    textDark: '#261e12',
    textMid: '#5e5038',
  },
  {
    name: 'Oliwkowy',
    surface: '#dde0c8',
    surfaceWarm: '#d0d4ba',
    accent: '#5c6b2e',
    accentHover: '#6e7f38',
    dark: '#333a22',
    darker: '#252a18',
    textDark: '#1e2416',
    textMid: '#555c42',
  },
  {
    name: 'Szałwia',
    surface: '#d8ddd0',
    surfaceWarm: '#ccd2c3',
    accent: '#5a6b52',
    accentHover: '#6a7d60',
    dark: '#323d2e',
    darker: '#232b20',
    textDark: '#1c241a',
    textMid: '#4e5c48',
  },
  {
    name: 'Grafitowy',
    surface: '#dcdcdc',
    surfaceWarm: '#d0d0d0',
    accent: '#4a4a4a',
    accentHover: '#5c5c5c',
    dark: '#2a2a2a',
    darker: '#1a1a1a',
    textDark: '#1a1a1a',
    textMid: '#555555',
  },
  {
    name: 'Drewno + zieleń',
    surface: '#ddd8c8',
    surfaceWarm: '#d1ccba',
    accent: '#5a6e3a',
    accentHover: '#6b8248',
    dark: '#2e3520',
    darker: '#212818',
    textDark: '#1e2416',
    textMid: '#545c42',
  },
]

export function ColorSwitcher() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)

  function apply(i: number) {
    const p = palettes[i]
    const r = document.documentElement.style
    r.setProperty('--color-surface', p.surface)
    r.setProperty('--color-surface-warm', p.surfaceWarm)
    r.setProperty('--color-accent', p.accent)
    r.setProperty('--color-accent-hover', p.accentHover)
    r.setProperty('--color-dark', p.dark)
    r.setProperty('--color-darker', p.darker)
    r.setProperty('--color-primary', p.dark)
    r.setProperty('--color-primary-dark', p.darker)
    r.setProperty('--color-green', p.accent)
    r.setProperty('--color-green-light', p.accentHover)
    r.setProperty('--color-green-dark', p.darker)
    r.setProperty('--color-text-dark', p.textDark)
    r.setProperty('--color-text-mid', p.textMid)
    document.body.style.background = p.darker
    setActive(i)
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      {open && (
        <div className="mb-3 bg-white rounded-xl shadow-2xl p-4 w-72 max-h-[70vh] overflow-y-auto">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Wybierz paletę kolorów</p>
          {palettes.map((p, i) => (
            <button
              key={i}
              onClick={() => apply(i)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1.5 text-left transition-all text-sm ${
                active === i ? 'bg-gray-100 ring-2 ring-gray-300 font-semibold' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex gap-1 shrink-0">
                <div className="w-5 h-5 rounded-full border border-gray-200" style={{ background: p.surface }} />
                <div className="w-5 h-5 rounded-full border border-gray-200" style={{ background: p.accent }} />
                <div className="w-5 h-5 rounded-full border border-gray-200" style={{ background: p.darker }} />
              </div>
              <span className="text-gray-700">{p.name}</span>
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform border border-gray-200"
      >
        🎨
      </button>
    </div>
  )
}
