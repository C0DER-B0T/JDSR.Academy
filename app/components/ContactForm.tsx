'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useMotionVariants } from './MotionProvider'
import toast from 'react-hot-toast'

interface FormData {
  name: string
  phone: string
  channel: string
  message: string
}

const channels = [
  { value: 'whatsapp', label: 'WhatsApp Channel' },
  { value: 'telegram', label: 'Telegram Channel' },
  { value: 'youtube', label: 'YouTube Channel' },
  { value: 'general', label: 'General Inquiry' },
]

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    channel: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const variants = useMotionVariants()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name')
      return false
    }
    if (!formData.phone.trim()) {
      toast.error('Please enter your phone number')
      return false
    }
    if (!formData.channel) {
      toast.error('Please select a channel of interest')
      return false
    }
    if (!formData.message.trim()) {
      toast.error('Please enter your message')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.')
        setFormData({
          name: '',
          phone: '',
          channel: '',
          message: '',
        })
      } else {
        toast.error(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-primary-black py-20">
      <div className="container mx-auto px-4 max-w-4xl">
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
            <span className="text-gradient">Contact</span> Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            variants={variants.slideInRight}
          >
            Have questions about government job preparation? Get in touch with us for 
            personalized guidance and support.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="card"
            variants={variants.slideInLeft}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input w-full"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input w-full"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="channel" className="block text-sm font-medium text-gray-300 mb-2">
                  Channel of Interest *
                </label>
                <select
                  id="channel"
                  name="channel"
                  value={formData.channel}
                  onChange={handleInputChange}
                  className="form-input w-full"
                  required
                >
                  <option value="">Select a channel</option>
                  {channels.map(channel => (
                    <option key={channel.value} value={channel.value}>
                      {channel.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="form-textarea w-full"
                  placeholder="Tell us about your inquiry or what you'd like to know..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="spinner" />
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={variants.slideInRight}
            initial="initial"
            animate="animate"
          >
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-glitter-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-glitter-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Call Us</h4>
                    <a 
                      href="tel:+919760380843" 
                      className="text-glitter-gold hover:text-glitter-gold-light transition-colors"
                    >
                      +91 9760380843
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Mon-Sat 9:00 AM - 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slight-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-slight-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">WhatsApp</h4>
                    <a 
                      href="https://whatsapp.com/channel/0029Vb6HmYOI7Be76U0fnl3c"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slight-blue hover:text-blue-400 transition-colors"
                    >
                      Join our WhatsApp Channel
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Instant updates and support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">YouTube</h4>
                    <a 
                      href="https://youtube.com/@jdsr_academy?si=RASKbZolVa3ftd-8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-400 transition-colors"
                    >
                      Subscribe to our Channel
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Video lectures and tutorials</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-800 pb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">What courses do you offer?</h4>
                  <p className="text-gray-300 text-sm">
                    We offer comprehensive preparation courses for various government job exams including UPSC, 
                    state PSC, banking, and other competitive examinations.
                  </p>
                </div>
                
                <div className="border-b border-gray-800 pb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">How can I join your WhatsApp group?</h4>
                  <p className="text-gray-300 text-sm">
                    Click on the WhatsApp link above or contact us directly. We'll add you to our 
                    relevant groups based on your exam preferences.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Do you provide study materials?</h4>
                  <p className="text-gray-300 text-sm">
                    Yes, we provide comprehensive study materials, previous year papers, mock tests, 
                    and regular updates through our Telegram channel and YouTube videos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
