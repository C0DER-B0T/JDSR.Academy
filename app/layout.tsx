import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Analytics } from './components/Analytics'
import { SEOHead } from './components/SEOHead'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'JDSR Academy — Govt. Jobs (UP & UK) | Director: Monika Singh',
    template: '%s | JDSR Academy'
  },
  description: 'JDSR Academy - Your trusted partner for government job preparation in UP & UK. Join our WhatsApp groups, Telegram channels, and YouTube for latest updates. Director: Monika Singh',
  keywords: ['government jobs', 'UP jobs', 'UK jobs', 'JDSR Academy', 'Monika Singh', 'job preparation', 'WhatsApp group', 'Telegram channel', 'YouTube'],
  authors: [{ name: 'JDSR Academy' }],
  creator: 'JDSR Academy',
  publisher: 'JDSR Academy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jdsracademy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jdsracademy.com',
    title: 'JDSR Academy — Govt. Jobs (UP & UK) | Director: Monika Singh',
    description: 'JDSR Academy - Your trusted partner for government job preparation in UP & UK. Join our WhatsApp groups, Telegram channels, and YouTube for latest updates.',
    siteName: 'JDSR Academy',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JDSR Academy - Government Job Preparation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JDSR Academy — Govt. Jobs (UP & UK) | Director: Monika Singh',
    description: 'JDSR Academy - Your trusted partner for government job preparation in UP & UK.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#F5C518" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="JDSR Academy" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "JDSR Academy",
              "url": "https://jdsracademy.com",
              "logo": "https://jdsracademy.com/images/logo.png",
              "description": "JDSR Academy - Your trusted partner for government job preparation in UP & UK",
              "founder": {
                "@type": "Person",
                "name": "Monika Singh",
                "jobTitle": "Director",
                "worksFor": {
                  "@type": "Organization",
                  "name": "JDSR Academy"
                }
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-XXXXXXXXXX",
                  "contactType": "customer service",
                  "areaServed": ["IN"],
                  "availableLanguage": ["English", "Hindi"]
                }
              ],
              "sameAs": [
                "https://whatsapp.com/channel/0029Vb6HmYOI7Be76U0fnl3c",
                "https://t.me/jdsracademy",
                "https://youtube.com/@jdsr_academy"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "TODO: Add City",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "TODO: Add Latitude",
                "longitude": "TODO: Add Longitude"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-primary-black text-white antialiased`}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
