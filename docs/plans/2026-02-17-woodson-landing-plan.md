# Woodson Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a bilingual (EN/PL) single-page landing page for Woodson wooden POS displays with product gallery, configurator, and contact form.

**Architecture:** Vite + React + TypeScript SPA with Tailwind CSS. i18n via React Context with JSON translation files. Smooth-scroll navigation between sections. Simple form state management with React hooks (no external state library needed).

**Tech Stack:** Vite, React 18, TypeScript, Tailwind CSS 4, Lucide React (icons)

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tailwind.css`, `index.html`, `src/main.tsx`, `src/App.tsx`

**Step 1: Scaffold Vite project**

Run:
```bash
cd /Users/bartoszhernas/Developer/FYM/test-claude-landing
npm create vite@latest . -- --template react-ts
```

If directory not empty, confirm overwrite.

**Step 2: Install Tailwind CSS v4 and icons**

Run:
```bash
npm install
npm install tailwindcss @tailwindcss/vite lucide-react
```

**Step 3: Configure Vite with Tailwind plugin**

Replace `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**Step 4: Set up Tailwind CSS entry**

Replace `src/index.css` with:

```css
@import "tailwindcss";

@theme {
  --color-primary: #1a5c5c;
  --color-primary-light: #237474;
  --color-primary-dark: #144848;
  --color-secondary: #f5e6d3;
  --color-accent: #c4913b;
  --color-accent-hover: #d4a14b;
  --color-surface: #faf8f5;
  --color-text: #1a1a1a;
  --color-text-light: #6b7280;
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
}
```

**Step 5: Add Google Fonts to index.html**

In `index.html`, add to `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
<title>Woodson | Solid Wood Displays</title>
```

**Step 6: Create minimal App.tsx**

Replace `src/App.tsx`:

```tsx
function App() {
  return (
    <div className="min-h-screen bg-surface text-text font-body">
      <h1 className="text-4xl font-heading text-primary p-8">Woodson</h1>
    </div>
  )
}

export default App
```

**Step 7: Verify dev server**

Run: `npm run dev`
Expected: Page shows "Woodson" in teal serif font on off-white background.

**Step 8: Commit**

```bash
git init
echo "node_modules\ndist\n.env" > .gitignore
git add -A
git commit -m "feat: scaffold Vite + React + TypeScript + Tailwind project"
```

---

### Task 2: Internationalization (i18n) System

**Files:**
- Create: `src/i18n/en.ts`, `src/i18n/pl.ts`, `src/i18n/LanguageContext.tsx`

**Step 1: Create English translations**

Create `src/i18n/en.ts`:

```ts
export const en = {
  nav: {
    products: 'Products',
    whyWood: 'Why Wood',
    configurator: 'Configurator',
    contact: 'Contact',
  },
  hero: {
    headline: 'Solid Wood Displays That Outlast Cardboard 30x',
    subtitle: 'Custom POS displays & retail shelving crafted from 100% Polish pine. Designed for your brand, built to last years — not weeks.',
    cta: 'Get a Free Quote',
    badge1: '100% Solid Pine',
    badge2: 'Eco-Friendly',
    badge3: 'Made in EU',
  },
  problem: {
    title: 'Why Switch from Cardboard?',
    cardboardTitle: 'Cardboard Displays',
    cardboardPoints: [
      'Fall apart after 1-2 months',
      'Look cheap and damage your brand',
      'End up in landfill constantly',
      'Need frequent replacements',
    ],
    woodTitle: 'Woodson Wood Displays',
    woodPoints: [
      'Last 2-3 years of daily use',
      'Premium natural look that elevates your brand',
      '100% recyclable & sustainable',
      'Only 30-40% more than cardboard',
    ],
  },
  products: {
    title: 'Our Products',
    subtitle: 'Every piece custom-made from solid Polish pine to your exact specifications.',
    items: [
      { name: 'Store Display', description: 'Eye-catching POS display for retail shelves' },
      { name: '5-Shelf Rack', description: 'Versatile multi-tier product showcase' },
      { name: 'Carrier', description: 'Branded product carrier with handle' },
      { name: 'Wooden Display', description: 'Custom branded display cabinet' },
      { name: 'Crate', description: 'Rustic storage and display crate' },
      { name: 'Grill Display', description: 'Specialized display for BBQ products' },
    ],
  },
  why: {
    title: 'Why Choose Woodson',
    cards: [
      { title: '30x More Durable', description: 'Our displays last 2-3 years vs. weeks for cardboard. One investment, years of use.' },
      { title: '100% Solid Pine', description: 'No plywood, no MDF, no chipboard. Real solid wood from Polish sustainable forests.' },
      { title: 'Custom Designed', description: 'Every display built to your exact product dimensions and brand identity.' },
      { title: 'Eco-Friendly', description: '100% natural, recyclable, and biodegradable. Zero harmful chemicals.' },
    ],
    proof: 'Trusted by returning B2B clients for over 15 years',
  },
  configurator: {
    title: 'Get Your Custom Quote',
    subtitle: 'Tell us what you need and we\'ll prepare a tailored offer within 24 hours.',
    step1: 'Product Type',
    step2: 'Dimensions (cm)',
    step3: 'Quantity',
    types: ['Display', 'Shelf', 'Crate', 'Custom'],
    width: 'Width',
    height: 'Height',
    depth: 'Depth',
    quantity: 'Pieces',
    name: 'Full Name',
    email: 'Email',
    company: 'Company Name',
    message: 'Additional Details',
    submit: 'Request a Quote',
    note: 'We respond within 24 hours',
    success: 'Thank you! We\'ll get back to you within 24 hours.',
  },
  footer: {
    tagline: 'Handcrafted wooden displays from the heart of Poland.',
    contact: 'Contact',
    links: 'Links',
    rights: '© 2026 Greenfire Sp. z o.o. All rights reserved.',
  },
} as const

export type Translations = typeof en
```

**Step 2: Create Polish translations**

Create `src/i18n/pl.ts`:

```ts
import type { Translations } from './en'

export const pl: Translations = {
  nav: {
    products: 'Produkty',
    whyWood: 'Dlaczego Drewno',
    configurator: 'Konfigurator',
    contact: 'Kontakt',
  },
  hero: {
    headline: 'Drewniane Displaye 30x Trwalsze od Kartonu',
    subtitle: 'Ekspozytory POS i regały sklepowe z litej polskiej sosny. Zaprojektowane pod Twoją markę, stworzone na lata — nie tygodnie.',
    cta: 'Darmowa Wycena',
    badge1: '100% Lita Sosna',
    badge2: 'Eko',
    badge3: 'Made in Poland',
  },
  problem: {
    title: 'Dlaczego Warto Zamienić Karton?',
    cardboardTitle: 'Displaye Kartonowe',
    cardboardPoints: [
      'Rozpadają się po 1-2 miesiącach',
      'Wyglądają tanio i szkodzą marce',
      'Ciągle lądują na śmietniku',
      'Wymagają częstej wymiany',
    ],
    woodTitle: 'Displaye Woodson',
    woodPoints: [
      'Wytrzymują 2-3 lata codziennego użytku',
      'Naturalny, premium wygląd podnosi markę',
      '100% recyklingowalne i zrównoważone',
      'Tylko 30-40% droższe od kartonu',
    ],
  },
  products: {
    title: 'Nasze Produkty',
    subtitle: 'Każdy element wykonany na wymiar z litej polskiej sosny.',
    items: [
      { name: 'Ekspozytor Sklepowy', description: 'Przyciągający wzrok display POS na półki sklepowe' },
      { name: 'Regał 5-Półkowy', description: 'Uniwersalna wielopoziomowa prezentacja produktów' },
      { name: 'Nosidło', description: 'Brandowane nosidło z uchwytem' },
      { name: 'Ekspozytor Drewniany', description: 'Szafka ekspozycyjna na wymiar' },
      { name: 'Skrzynia', description: 'Rustykalna skrzynia do przechowywania i ekspozycji' },
      { name: 'Ekspozytor Grillowy', description: 'Specjalistyczny display na produkty grillowe' },
    ],
  },
  why: {
    title: 'Dlaczego Woodson',
    cards: [
      { title: '30x Trwalsze', description: 'Nasze displaye służą 2-3 lata vs. tygodnie dla kartonu. Jedna inwestycja, lata użytku.' },
      { title: '100% Lita Sosna', description: 'Bez sklejki, bez MDF, bez płyty wiórowej. Prawdziwe lite drewno z polskich lasów.' },
      { title: 'Na Wymiar', description: 'Każdy display dopasowany do wymiarów Twoich produktów i identyfikacji marki.' },
      { title: 'Eko', description: '100% naturalne, recyklingowalne i biodegradowalne. Zero szkodliwych chemikaliów.' },
    ],
    proof: 'Zaufali nam powracający klienci B2B od ponad 15 lat',
  },
  configurator: {
    title: 'Wycena Na Wymiar',
    subtitle: 'Powiedz nam czego potrzebujesz, a przygotujemy ofertę w ciągu 24 godzin.',
    step1: 'Typ Produktu',
    step2: 'Wymiary (cm)',
    step3: 'Ilość',
    types: ['Display', 'Regał', 'Skrzynia', 'Inny'],
    width: 'Szerokość',
    height: 'Wysokość',
    depth: 'Głębokość',
    quantity: 'Sztuk',
    name: 'Imię i Nazwisko',
    email: 'Email',
    company: 'Nazwa Firmy',
    message: 'Dodatkowe Szczegóły',
    submit: 'Wyślij Zapytanie',
    note: 'Odpowiadamy w ciągu 24 godzin',
    success: 'Dziękujemy! Odezwiemy się w ciągu 24 godzin.',
  },
  footer: {
    tagline: 'Ręcznie wykonane drewniane displaye z serca Polski.',
    contact: 'Kontakt',
    links: 'Linki',
    rights: '© 2026 Greenfire Sp. z o.o. Wszelkie prawa zastrzeżone.',
  },
}
```

**Step 3: Create Language Context**

Create `src/i18n/LanguageContext.tsx`:

```tsx
import { createContext, useContext, useState, type ReactNode } from 'react'
import { en } from './en'
import { pl } from './pl'
import type { Translations } from './en'

type Language = 'en' | 'pl'

interface LanguageContextType {
  lang: Language
  t: Translations
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')
  const t = lang === 'en' ? en : pl

  const toggleLanguage = () => setLang(prev => prev === 'en' ? 'pl' : 'en')

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
```

**Step 4: Wrap App with LanguageProvider**

Update `src/App.tsx`:

```tsx
import { LanguageProvider } from './i18n/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-surface text-text font-body">
        <h1 className="text-4xl font-heading text-primary p-8">Woodson</h1>
      </div>
    </LanguageProvider>
  )
}

export default App
```

**Step 5: Verify**

Run: `npm run dev`
Expected: Still renders "Woodson", no console errors.

**Step 6: Commit**

```bash
git add src/i18n/
git commit -m "feat: add i18n system with EN/PL translations"
```

---

### Task 3: Navbar Component

**Files:**
- Create: `src/components/Navbar.tsx`
- Modify: `src/App.tsx`

**Step 1: Create Navbar**

Create `src/components/Navbar.tsx`:

```tsx
import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { key: 'products' as const, href: '#products' },
  { key: 'whyWood' as const, href: '#why-wood' },
  { key: 'configurator' as const, href: '#configurator' },
  { key: 'contact' as const, href: '#configurator' },
]

export function Navbar() {
  const { lang, t, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="text-2xl sm:text-3xl font-heading font-bold text-primary">
            Woodson
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-text/70 hover:text-primary transition-colors"
              >
                {t.nav[link.key]}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm font-medium border border-primary/30 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
            >
              {lang === 'en' ? 'PL' : 'EN'}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-text"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <a
                key={link.key}
                href={link.href}
                className="block text-sm font-medium text-text/70 hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav[link.key]}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm font-medium border border-primary/30 rounded-full text-primary"
            >
              {lang === 'en' ? 'PL' : 'EN'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
```

**Step 2: Add Navbar to App**

Update `src/App.tsx` to include `<Navbar />` inside the LanguageProvider div.

**Step 3: Verify**

Run: `npm run dev`
Expected: Sticky navbar with logo, links, and language toggle. Mobile hamburger on small screens.

**Step 4: Commit**

```bash
git add src/components/Navbar.tsx src/App.tsx
git commit -m "feat: add responsive Navbar with language toggle"
```

---

### Task 4: Hero Section

**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/App.tsx`

**Step 1: Create Hero**

Create `src/components/Hero.tsx`:

```tsx
import { useLanguage } from '../i18n/LanguageContext'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
      {/* Wood grain texture overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q25 15 50 20 T100 20' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3Cpath d='M0 40 Q25 35 50 40 T100 40' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3Cpath d='M0 60 Q25 55 50 60 T100 60' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3Cpath d='M0 80 Q25 75 50 80 T100 80' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[t.hero.badge1, t.hero.badge2, t.hero.badge3].map(badge => (
            <span key={badge} className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90">
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
```

**Step 2: Add Hero to App**

**Step 3: Verify & Commit**

```bash
git add src/components/Hero.tsx src/App.tsx
git commit -m "feat: add Hero section with CTA and badges"
```

---

### Task 5: Problem vs Solution Section

**Files:**
- Create: `src/components/ProblemSolution.tsx`
- Modify: `src/App.tsx`

**Step 1: Create ProblemSolution**

Create `src/components/ProblemSolution.tsx`:

```tsx
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
                <li key={i} className="flex items-start gap-3 text-text-light">
                  <X size={18} className="text-red-400 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {/* Placeholder image */}
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
                  <Check size={18} className="text-primary mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {/* Placeholder image */}
            <div className="mt-8 h-48 bg-secondary/50 rounded-xl flex items-center justify-center text-primary/50 text-sm">
              [Woodson display photo]
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to App, Verify & Commit**

```bash
git add src/components/ProblemSolution.tsx src/App.tsx
git commit -m "feat: add Problem vs Solution comparison section"
```

---

### Task 6: Products Gallery

**Files:**
- Create: `src/components/Products.tsx`
- Modify: `src/App.tsx`

**Step 1: Create Products**

Create `src/components/Products.tsx`:

```tsx
import { useLanguage } from '../i18n/LanguageContext'

const placeholderColors = [
  'bg-amber-50', 'bg-orange-50', 'bg-yellow-50',
  'bg-lime-50', 'bg-emerald-50', 'bg-teal-50',
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
              {/* Placeholder image */}
              <div className={`h-64 ${placeholderColors[i]} flex items-center justify-center overflow-hidden`}>
                <span className="text-text/30 text-sm group-hover:scale-110 transition-transform duration-500">
                  [{item.name} photo]
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-text mb-2">
                  {item.name}
                </h3>
                <p className="text-text-light text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to App, Verify & Commit**

```bash
git add src/components/Products.tsx src/App.tsx
git commit -m "feat: add Products gallery section"
```

---

### Task 7: Why Choose Woodson Section

**Files:**
- Create: `src/components/WhyWoodson.tsx`
- Modify: `src/App.tsx`

**Step 1: Create WhyWoodson**

Create `src/components/WhyWoodson.tsx`:

```tsx
import { useLanguage } from '../i18n/LanguageContext'
import { Shield, TreePine, Ruler, Leaf } from 'lucide-react'

const icons = [Shield, TreePine, Ruler, Leaf]

export function WhyWoodson() {
  const { t } = useLanguage()

  return (
    <section className="py-20 sm:py-28 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-16">
          {t.why.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.why.cards.map((card, i) => {
            const Icon = icons[i]
            return (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Social proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-accent/80 border-2 border-primary flex items-center justify-center text-xs font-bold">
                  {['A', 'B', 'C', 'D'][i]}
                </div>
              ))}
            </div>
            <span className="text-white/80 text-sm">{t.why.proof}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to App, Verify & Commit**

```bash
git add src/components/WhyWoodson.tsx src/App.tsx
git commit -m "feat: add Why Choose Woodson trust section"
```

---

### Task 8: Configurator + Contact Form

**Files:**
- Create: `src/components/Configurator.tsx`
- Modify: `src/App.tsx`

**Step 1: Create Configurator**

Create `src/components/Configurator.tsx`:

```tsx
import { useState, type FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Package, Ruler, Hash, Send, CheckCircle } from 'lucide-react'

export function Configurator() {
  const { t } = useLanguage()
  const [productType, setProductType] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [depth, setDepth] = useState('')
  const [quantity, setQuantity] = useState('10')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // For now, just show success state
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="configurator" className="py-20 sm:py-28 bg-secondary/30">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle size={64} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-heading font-bold text-text mb-4">
            {t.configurator.success}
          </h2>
        </div>
      </section>
    )
  }

  return (
    <section id="configurator" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            {t.configurator.title}
          </h2>
          <p className="text-lg text-text-light">
            {t.configurator.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
          {/* Step 1: Product Type */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Package size={20} className="text-primary" />
              <h3 className="font-semibold text-text">{t.configurator.step1}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {t.configurator.types.map(type => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setProductType(type)}
                  className={`px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                    productType === type
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-text border-gray-200 hover:border-primary/50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Dimensions */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Ruler size={20} className="text-primary" />
              <h3 className="font-semibold text-text">{t.configurator.step2}</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: t.configurator.width, value: width, set: setWidth },
                { label: t.configurator.height, value: height, set: setHeight },
                { label: t.configurator.depth, value: depth, set: setDepth },
              ].map(dim => (
                <div key={dim.label}>
                  <label className="block text-xs text-text-light mb-1">{dim.label}</label>
                  <input
                    type="number"
                    value={dim.value}
                    onChange={e => dim.set(e.target.value)}
                    placeholder="cm"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Quantity */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Hash size={20} className="text-primary" />
              <h3 className="font-semibold text-text">{t.configurator.step3}</h3>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="500"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                className="flex-1 accent-primary"
              />
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}
                  className="w-20 px-3 py-2 border border-gray-200 rounded-xl text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <span className="text-sm text-text-light">{t.configurator.quantity}</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-8" />

          {/* Contact form */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs text-text-light mb-1">{t.configurator.name}</label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs text-text-light mb-1">{t.configurator.email}</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-xs text-text-light mb-1">{t.configurator.company}</label>
            <input
              type="text"
              value={company}
              onChange={e => setCompany(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div className="mb-8">
            <label className="block text-xs text-text-light mb-1">{t.configurator.message}</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-light">{t.configurator.note}</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl text-lg transition-colors shadow-lg shadow-accent/25"
            >
              <Send size={20} />
              {t.configurator.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
```

**Step 2: Add to App, Verify & Commit**

```bash
git add src/components/Configurator.tsx src/App.tsx
git commit -m "feat: add Configurator with 3-step form and contact fields"
```

---

### Task 9: Footer

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/App.tsx`

**Step 1: Create Footer**

Create `src/components/Footer.tsx`:

```tsx
import { useLanguage } from '../i18n/LanguageContext'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-text text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-3">Woodson</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {t.footer.tagline}
            </p>
            <p className="text-white/40 text-xs">Greenfire Sp. z o.o.</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:hello@woodson.pl" className="hover:text-accent transition-colors">hello@woodson.pl</a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+48882905145" className="hover:text-accent transition-colors">+48 882-905-145</a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin size={16} className="shrink-0" />
                <span>Pl. Kilińskiego 1, 32-660 Chełmek, Poland</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.links}</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://woodson.pl" target="_blank" rel="noopener noreferrer"
                  className="text-white/70 text-sm hover:text-accent transition-colors">
                  woodson.pl
                </a>
              </li>
              <li>
                <a href="https://klejonkanawymiar.pl" target="_blank" rel="noopener noreferrer"
                  className="text-white/70 text-sm hover:text-accent transition-colors">
                  klejonkanawymiar.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-xs">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
```

**Step 2: Add to App, Verify & Commit**

```bash
git add src/components/Footer.tsx src/App.tsx
git commit -m "feat: add Footer with contact info and links"
```

---

### Task 10: Assemble App + Final Polish

**Files:**
- Modify: `src/App.tsx`

**Step 1: Final App.tsx assembly**

```tsx
import { LanguageProvider } from './i18n/LanguageContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProblemSolution } from './components/ProblemSolution'
import { Products } from './components/Products'
import { WhyWoodson } from './components/WhyWoodson'
import { Configurator } from './components/Configurator'
import { Footer } from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-surface text-text font-body">
        <Navbar />
        <Hero />
        <ProblemSolution />
        <Products />
        <WhyWoodson />
        <Configurator />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
```

**Step 2: Clean up default Vite files**

Remove unused files: `src/App.css`, `src/assets/react.svg`, `public/vite.svg`

**Step 3: Verify full page**

Run: `npm run dev`
Expected: Full landing page with all sections, smooth scroll, language toggle works.

**Step 4: Final commit**

```bash
git add -A
git commit -m "feat: assemble full Woodson landing page"
```

---

### Task 11: Build & verify production

**Step 1: Run production build**

Run: `npm run build`
Expected: No errors, `dist/` folder created.

**Step 2: Preview production build**

Run: `npm run preview`
Expected: Full page renders correctly in preview mode.

**Step 3: Commit if any build fixes needed**
