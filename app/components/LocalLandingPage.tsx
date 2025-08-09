'use client'

import { motion } from 'framer-motion'
import { useMotionVariants } from './MotionProvider'
import { CTAButton } from './CTAButton'

interface LocalLandingPageProps {
  city: string
  state: string
  description: string
  features: string[]
}

export function LocalLandingPage({ city, state, description, features }: LocalLandingPageProps) {
  const variants = useMotionVariants()

  return (
    <div className="min-h-screen bg-primary-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={variants.fadeIn}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold font-poppins mb-6"
            variants={variants.slideInLeft}
          >
            <span className="text-gradient">JDSR Academy</span>
            <br />
            <span className="text-white">{city}, {state}</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={variants.slideInRight}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={variants.staggerContainer}
          initial="initial"
          animate="animate"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card text-center"
              variants={variants.staggerItem}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={variants.scaleIn}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Start Your Journey?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              href="https://whatsapp.com/channel/0029Vb6HmYOI7Be76U0fnl3c"
              icon="whatsapp"
              text="Join WhatsApp Group"
              variant="primary"
            />
            <CTAButton
              href="https://t.me/jdsracademy"
              icon="telegram"
              text="Follow on Telegram"
              variant="secondary"
            />
            <CTAButton
              href="/contact"
              icon="youtube"
              text="Contact Us"
              variant="outline"
            />
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-16 text-center"
          variants={variants.fadeIn}
          initial="initial"
          animate="animate"
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>Phone:</strong> +91 9760380843
              </p>
              <p>
                <strong>Business Hours:</strong> Mon-Sat 9:00 AM - 7:00 PM
              </p>
              <p>
                <strong>Location:</strong> {city}, {state}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
