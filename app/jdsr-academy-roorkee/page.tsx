import { LocalLandingPage } from '../components/LocalLandingPage'
import { SEOHead } from '../components/SEOHead'

export default function RoorkeePage() {
  return (
    <>
      <SEOHead 
        title="JDSR Academy Roorkee - Government Job Preparation Center"
        description="JDSR Academy in Roorkee offers expert guidance for UPSC, banking, railway, and other government job examinations. Join our WhatsApp groups and Telegram channels for latest updates."
        keywords={['JDSR Academy Roorkee', 'Government Jobs Roorkee', 'UPSC Coaching Roorkee', 'Banking Exam Preparation Roorkee']}
      />
      <LocalLandingPage 
        city="Railway Road geetanjali vihar Roorkee"
        state="Uttarakhand"
        description="Located in the Railway Road geetanjali vihar Roorkee Uttarakhand, our Roorkee center provides comprehensive preparation for all government job examinations."
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
