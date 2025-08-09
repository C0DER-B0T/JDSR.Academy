import { LocalLandingPage } from '../components/LocalLandingPage'
import { SEOHead } from '../components/SEOHead'

export default function DehradunPage() {
  return (
    <>
      <SEOHead 
        title="JDSR Academy Dehradun - Government Job Preparation Center"
        description="JDSR Academy in Dehradun offers expert guidance for UPSC, banking, railway, and other government job examinations. Join our WhatsApp groups and Telegram channels for latest updates."
        keywords={['JDSR Academy Dehradun', 'Government Jobs Dehradun', 'UPSC Coaching Dehradun', 'Banking Exam Preparation Dehradun']}
      />
      <LocalLandingPage 
        city="Dehradun"
        state="Uttarakhand"
        description="Our Dehradun center serves as the capital hub for government job preparation, offering comprehensive courses and expert guidance."
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
