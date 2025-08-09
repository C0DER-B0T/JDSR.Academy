import { LocalLandingPage } from '../components/LocalLandingPage'
import { SEOHead } from '../components/SEOHead'

export default function GhaziabadPage() {
  return (
    <>
      <SEOHead 
        title="JDSR Academy Ghaziabad - Government Job Preparation Center"
        description="JDSR Academy in Ghaziabad offers expert guidance for UPSC, banking, railway, and other government job examinations. Join our WhatsApp groups and Telegram channels for latest updates."
        keywords={['JDSR Academy Ghaziabad', 'Government Jobs Ghaziabad', 'UPSC Coaching Ghaziabad', 'Banking Exam Preparation Ghaziabad']}
      />
      <LocalLandingPage 
        city="Ghaziabad"
        state="Uttar Pradesh"
        description="Our Ghaziabad center provides excellent connectivity and modern facilities for government job preparation."
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
