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
