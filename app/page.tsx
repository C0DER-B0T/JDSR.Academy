import Header from './components/Header'
import Footer from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { QuickLinks } from './components/QuickLinks'
import { SEOHead } from './components/SEOHead'

export default function HomePage() {
  return (
    <>
      <SEOHead />
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <QuickLinks />
      </main>
      <Footer />
    </>
  )
}
