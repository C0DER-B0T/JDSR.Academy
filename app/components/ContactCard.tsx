'use client'

import { motion } from 'framer-motion'
import { useMotionVariants } from './MotionProvider'

export function ContactCard() {
  const variants = useMotionVariants()

  return (
    <motion.div
      className="card border-2 border-glitter-gold/20 bg-gradient-to-br from-card-dark to-black"
      variants={variants.scaleIn}
      initial="initial"
      animate="animate"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          <span className="text-gradient">Contact</span> Information
        </h2>
        <p className="text-gray-300">
          Get in touch with us for personalized guidance and support
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <motion.div
          className="space-y-6"
          variants={variants.slideInLeft}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-glitter-gold/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-glitter-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Phone Number</h3>
              <a 
                href="tel:+919760380843" 
                className="text-glitter-gold hover:text-glitter-gold-light transition-colors text-lg font-medium"
              >
                +91 9760380843
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slight-blue/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-slight-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Business Hours</h3>
              <p className="text-gray-300">
                Monday - Saturday<br />
                9:00 AM - 7:00 PM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-glitter-gold/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-glitter-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Office Location</h3>
              <p className="text-gray-300">
                TODO: Add Office Address<br />
                Uttar Pradesh, India
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="space-y-4"
          variants={variants.slideInRight}
          initial="initial"
          animate="animate"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
          
          <motion.a
            href="tel:+919760380843"
            className="block w-full bg-gradient-to-r from-glitter-gold to-glitter-gold-light text-black font-semibold px-6 py-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-glitter-gold/25 focus:outline-none focus:ring-2 focus:ring-glitter-gold focus:ring-offset-2 focus:ring-offset-black"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            📞 Call Now
          </motion.a>

          <motion.a
            href="https://whatsapp.com/channel/0029Vb6HmYOI7Be76U0fnl3c"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            💬 WhatsApp Channel
          </motion.a>

          <motion.a
            href="/contact"
            className="block w-full bg-card-dark border-2 border-slight-blue text-slight-blue font-semibold px-6 py-4 rounded-lg text-center transition-all duration-300 hover:bg-slight-blue hover:text-black transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slight-blue focus:ring-offset-2 focus:ring-offset-black"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            📝 Send Message
          </motion.a>
        </motion.div>
      </div>

      {/* Additional Info */}
      <motion.div
        className="mt-8 p-4 bg-black/30 rounded-lg border border-gray-800"
        variants={variants.fadeIn}
        initial="initial"
        animate="animate"
      >
        <h4 className="text-lg font-semibold text-white mb-2">Why Choose JDSR Academy?</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-glitter-gold rounded-full" />
            Expert guidance from experienced faculty
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-glitter-gold rounded-full" />
            Comprehensive study materials and mock tests
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-glitter-gold rounded-full" />
            Regular updates on job notifications
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-glitter-gold rounded-full" />
            Personalized support and doubt clearing
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}
