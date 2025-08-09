import Header from '../components/Header'
import Footer from '../components/Footer'
import { NewsPage } from '../components/NewsPage'
import { SEOHead } from '../components/SEOHead'

export default function News() {
  return (
    <>
      <SEOHead 
        title="Latest News & Updates - JDSR Academy"
        description="Stay updated with the latest government job notifications, exam updates, and preparation tips from JDSR Academy."
      />
      <Header />
      <NewsPage />
      <Footer />
    </>
  )
}
