import { LocalLandingPage } from '../components/LocalLandingPage'
import { SEOHead } from '../components/SEOHead'

export default function NoidaPage() {
  return (
    <>
      <SEOHead 
        title="JDSR Academy Noida - Government Job Preparation Center"
        description="JDSR Academy in Noida offers expert guidance for UPSC, banking, railway, and other government job examinations. Join our WhatsApp groups and Telegram channels for latest updates."
        keywords={['JDSR Academy Noida', 'Government Jobs Noida', 'UPSC Coaching Noida', 'Banking Exam Preparation Noida']}
      />
      <LocalLandingPage 
        city="Noida"
        state="Uttar Pradesh"
        description="Our Noida center serves the heart of NCR, offering world-class government job preparation facilities and expert guidance."
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
