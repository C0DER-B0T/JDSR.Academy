import Header from '../components/Header'
import Footer from '../components/Footer'
import { ConnectPage } from '../components/ConnectPage'
import { SEOHead } from '../components/SEOHead'

export default function Connect() {
  return (
    <>
      <SEOHead 
        title="Connect with JDSR Academy"
        description="Join our WhatsApp groups, Telegram channels, and YouTube for latest government job updates and preparation tips."
      />
      <Header />
      <ConnectPage />
      <Footer />
    </>
  )
}
