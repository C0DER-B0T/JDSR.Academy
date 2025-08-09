import Header from '../components/Header'
import Footer from '../components/Footer'
import { AboutPage } from '../components/AboutPage'
import { SEOHead } from '../components/SEOHead'

export default function About() {
  return (
    <>
      <SEOHead 
        title="About JDSR Academy - Director Monika Singh"
        description="Learn about JDSR Academy and our director Monika Singh. Discover our mission to help students succeed in government job examinations."
      />
      <Header />
      <AboutPage />
      <Footer />
    </>
  )
}
