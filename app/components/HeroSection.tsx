'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { useAnimation } from './AnimationProvider'
import { useMotionVariants } from './MotionProvider'
import { CTAButton } from './CTAButton'
import { ParticleBackground } from './ParticleBackground'

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const { isAnimationsEnabled } = useAnimation()
  const variants = useMotionVariants()

  useEffect(() => {
    if (!isAnimationsEnabled || !heroRef.current) return

    const tl = gsap.timeline({ delay: 0.5 })

    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' })

    if (titleRef.current) {
      tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
    }
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
    }
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.children
      tl.fromTo(
        buttons,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out', stagger: 0.1 },
        '-=0.2'
      )
    }

    return () => {
      tl.kill()
    }
  }, [isAnimationsEnabled])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-black">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* Glitter Shimmer Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-glitter-gold/5 to-transparent animate-pulse-gold" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div variants={variants.fadeIn} initial="initial" animate="animate" className="max-w-4xl mx-auto">
          <motion.h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight" variants={variants.slideInLeft}>
            <span className="text-gradient">JDSR Academy</span>
            <br />
            <span className="text-white">Govt. Jobs (UP & UK)</span>
            <br />
            <span className="text-xl md:text-2xl lg:text-3xl text-glitter-gold font-normal">Director: Monika Singh</span>
          </motion.h1>

          <motion.p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed" variants={variants.slideInRight}>
            Your trusted partner for government job preparation in Uttar Pradesh & Uttarakhand
          </motion.p>

          <motion.div className="text-glitter-gold text-lg md:text-xl mb-8" variants={variants.scaleIn}>
            <p className="font-semibold">
              📞 Call us: <a href="tel:+919760380843" className="hover:text-glitter-gold-light transition-colors">+91 9760380843</a>
            </p>
            <p className="text-gray-400 text-sm md:text-base mt-2">Business Hours: Mon-Sat 9:00 AM - 7:00 PM</p>
          </motion.div>

          <motion.div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={variants.staggerContainer}>
            <CTAButton href="https://whatsapp.com/channel/0029Vb6HmYOI7Be76U0fnl3c" icon="whatsapp" text="Join WhatsApp Channel" variant="primary" />
            <CTAButton href="https://t.me/jdsracademy" icon="telegram" text="Follow on Telegram" variant="secondary" />
            <CTAButton href="https://youtube.com/@jdsr_academy?si=RASKbZolVa3ftd-8" icon="youtube" text="Subscribe on YouTube" variant="outline" />
          </motion.div>

          <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 0.8 }}>
            <div className="w-6 h-10 border-2 border-glitter-gold rounded-full flex justify-center">
              <div className="w-1 h-3 bg-glitter-gold rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-glitter-gold/10 rounded-full blur-xl animate-float z-0" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-slight-blue/10 rounded-full blur-xl animate-float z-0" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-glitter-gold/5 rounded-full blur-lg animate-float z-0" style={{ animationDelay: '4s' }} />
    </section>
  )
}
