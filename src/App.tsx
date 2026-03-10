import { LanguageProvider } from './i18n/LanguageContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsStrip } from './components/StatsStrip'
import { Statement } from './components/Statement'
import { Comparison } from './components/Comparison'
import { NaturalWood } from './components/NaturalWood'
import { Portfolio } from './components/Portfolio'
import { CustomProject } from './components/CustomProject'
import { Process } from './components/Process'
import { CtaContact } from './components/CtaContact'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0e0a04] font-body">
        <Navbar />
        <Hero />
        <StatsStrip />
        <Statement />
        <Comparison />
        <NaturalWood />
        <Portfolio />
        <CustomProject />
        <Process />
        <CtaContact />
        <Faq />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
