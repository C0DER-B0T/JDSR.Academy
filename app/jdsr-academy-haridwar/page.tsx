import { LocalLandingPage } from '../components/LocalLandingPage'
import { SEOHead } from '../components/SEOHead'

export default function HaridwarPage() {
  return (
    <>
      <SEOHead 
        title="JDSR Academy Haridwar - Government Job Preparation Center"
        description="JDSR Academy in Haridwar offers expert guidance for UPSC, banking, railway, and other government job examinations. Join our WhatsApp groups and Telegram channels for latest updates."
        keywords={['JDSR Academy Haridwar', 'Government Jobs Haridwar', 'UPSC Coaching Haridwar', 'Banking Exam Preparation Haridwar']}
      />
      <LocalLandingPage 
        city="Haridwar"
        state="Uttarakhand"
        description="Our Haridwar center provides spiritual and educational excellence, offering comprehensive government job preparation courses."
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
