import Header from '../components/Header'
import Footer from '../components/Footer'
import { ContactForm } from '../components/ContactForm'
import { SEOHead } from '../components/SEOHead'

export default function Contact() {
  return (
    <>
      <SEOHead 
        title="Contact JDSR Academy"
        description="Get in touch with JDSR Academy for personalized guidance, support, and information about government job preparation courses."
      />
      <Header />
      <ContactForm />
      <Footer />
    </>
  )
}
