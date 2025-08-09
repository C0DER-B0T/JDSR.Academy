'use client'

import { motion } from 'framer-motion'
import { useMotionVariants } from './MotionProvider'
import { CountUp } from './CountUp'

export function AboutPage() {
  const variants = useMotionVariants()

  const achievements = [
    { number: 500, suffix: '+', label: 'Students Helped' },
    { number: 3, suffix: ' Years', label: 'Experience' },
    { number: 95, suffix: '%', label: 'Student satisfaction' },
    { number: 95, suffix: '+', label: 'Job ready aspirants' },
  ]

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
            About <span className="text-gradient">JDSR Academy</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={variants.slideInRight}
          >
            Empowering students to achieve their dreams in government service through 
            expert guidance, comprehensive preparation, and unwavering support.
          </motion.p>
        </motion.div>

        {/* Director Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          variants={variants.staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Director Info */}
          <motion.div variants={variants.slideInLeft}>
            <div className="card">
              <h2 className="text-3xl font-bold text-white mb-6">
                Meet Our Director
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-glitter-gold to-glitter-gold-light rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    MS
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Monika Singh</h3>
                    <p className="text-glitter-gold font-semibold">Director & Founder</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Monika Singh is a passionate educator and career counselor with over 3 years of 
                  experience in government job preparation. Her dedication to helping students 
                  achieve their dreams has made JDSR Academy a trusted name in competitive exam preparation.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  With a deep understanding of the challenges faced by aspirants, Monika has 
                  developed comprehensive study programs that combine traditional learning methods 
                  with modern technology to ensure maximum success rates.
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Expertise Areas:</h4>
                  <ul className="space-y-2">
                    {[
                      'UPSC Civil Services Examination',
                      'State PSC Examinations',
                      'Banking & Financial Services',
                      'Railway Recruitment Board',
                      'Teaching & Education Services',
                      'Police & Defense Services'
                    ].map((area, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-2 text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-glitter-gold rounded-full flex-shrink-0" />
                        {area}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div variants={variants.slideInRight}>
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To provide comprehensive, accessible, and effective preparation for government 
                  job examinations, empowering students from all backgrounds to achieve their 
                  career aspirations through expert guidance and innovative learning methods.
                </p>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To become the most trusted and preferred destination for government job 
                  preparation in Uttar Pradesh and Uttarakhand, known for our commitment 
                  to student success and excellence in education.
                </p>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Excellence', desc: 'Striving for the highest standards in education' },
                    { title: 'Integrity', desc: 'Maintaining honesty and transparency in all dealings' },
                    { title: 'Innovation', desc: 'Embracing new methods and technologies' },
                    { title: 'Empathy', desc: 'Understanding and supporting student needs' },
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-card-dark border border-gray-800 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <h4 className="text-glitter-gold font-semibold mb-2">{value.title}</h4>
                      <p className="text-gray-400 text-sm">{value.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="mb-20"
          variants={variants.fadeIn}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="text-gradient">Achievements</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={variants.scaleIn}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.1 }}
              >
                <div className="card text-center">
                  <div className="text-3xl md:text-4xl font-bold text-glitter-gold mb-2">
                    <CountUp end={achievement.number} suffix={achievement.suffix} />
                  </div>
                  <p className="text-gray-300 font-medium">{achievement.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="card"
          variants={variants.scaleIn}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose <span className="text-gradient">JDSR Academy</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Expert Faculty',
                description: 'Learn from experienced educators who understand the exam patterns and requirements.'
              },
              {
                icon: '📚',
                title: 'Comprehensive Study Material',
                description: 'Access to updated study materials, previous year papers, and mock tests.'
              },
              {
                icon: '📱',
                title: 'Digital Learning',
                description: 'Stay connected through WhatsApp, Telegram, and YouTube for regular updates.'
              },
              {
                icon: '🎓',
                title: 'Personalized Guidance',
                description: 'Individual attention and customized study plans based on your strengths and weaknesses.'
              },
              {
                icon: '📊',
                title: 'Regular Assessment',
                description: 'Continuous evaluation through mock tests and performance tracking.'
              },
              {
                icon: '🤝',
                title: 'Community Support',
                description: 'Join a community of aspirants for motivation and peer learning.'
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-card-dark border border-gray-800 rounded-lg hover:border-glitter-gold/50 transition-all duration-300"
                variants={variants.staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
