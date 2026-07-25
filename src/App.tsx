import { LanguageProvider } from './i18n/LanguageContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsStrip } from './components/StatsStrip'
import { Statement } from './components/Statement'
import { Comparison } from './components/Comparison'
import { NaturalWood } from './components/NaturalWood'
import { Portfolio } from './components/Portfolio'
import { B2bUseCases } from './components/B2bUseCases'
import { B2cUseCases } from './components/B2cUseCases'
import { CustomProject } from './components/CustomProject'
import { Process } from './components/Process'
import { CtaContact } from './components/CtaContact'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { ColorSwitcher } from './components/ColorSwitcher'
import { SEO } from './components/SEO'
import { VersionBadge } from './components/VersionBadge'
import { CookieBanner } from './components/CookieBanner'

function App() {
  return (
    <LanguageProvider>
      <SEO />
      <div className="min-h-screen bg-darker font-body">
        <Navbar />
        <Hero />
        <StatsStrip />
        <Statement />
        <Comparison />
        <NaturalWood />
        <B2bUseCases />
        <Portfolio />
        <B2cUseCases />
        <CustomProject />
        <Process />
        <CtaContact />
        <Faq />
        <Footer />
        {import.meta.env.DEV && <ColorSwitcher />}
        <VersionBadge />
        <CookieBanner />
      </div>
    </LanguageProvider>
  )
}

export default App
