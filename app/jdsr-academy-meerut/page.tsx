import { LocalLandingPage } from '../components/LocalLandingPage'
import { SEOHead } from '../components/SEOHead'

export default function MeerutPage() {
  return (
    <>
      <SEOHead 
        title="JDSR Academy Meerut - Government Job Preparation Center"
        description="JDSR Academy in Meerut offers expert guidance for UPSC, banking, railway, and other government job examinations. Join our WhatsApp groups and Telegram channels for latest updates."
        keywords={['JDSR Academy Meerut', 'Government Jobs Meerut', 'UPSC Coaching Meerut', 'Banking Exam Preparation Meerut']}
      />
      <LocalLandingPage 
        city="Meerut"
        state="Uttar Pradesh"
        description="Our Meerut center serves the NCR region, providing comprehensive government job preparation with modern facilities."
        features={[
          'Expert faculty with years of experience',
          'Comprehensive study materials',
          'Regular mock tests and assessments',
          'WhatsApp and Telegram updates',
          'Personalized guidance and support',
          'Affordable fee structure'
        ]}
      />
    </>
  )
}
