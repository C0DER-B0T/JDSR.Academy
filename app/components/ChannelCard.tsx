'use client'

import { motion } from 'framer-motion'
import { useAnimation } from './AnimationProvider'
import { useMotionVariants } from './MotionProvider'

interface ChannelCardProps {
  channel: {
    id: string
    title: string
    description: string
    link: string
    icon: React.ReactNode
    color: string
    bgColor: string
    borderColor: string
    features: string[]
    memberCount: string
    buttonText: string
    buttonColor: string
  }
  index: number
}

export function ChannelCard({ channel, index }: ChannelCardProps) {
  const { isAnimationsEnabled } = useAnimation()
  const variants = useMotionVariants()

  return (
    <motion.div
      className={`card card-hover ${channel.bgColor} ${channel.borderColor} border-2`}
      variants={variants.staggerItem}
      whileHover={isAnimationsEnabled ? { 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.2 }
      } : {}}
      initial="initial"
      animate="animate"
      transition={{ delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${channel.color} text-white`}>
          {channel.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{channel.title}</h3>
          <p className="text-sm text-gray-400">{channel.memberCount} members</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6 leading-relaxed">
        {channel.description}
      </p>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
          What you'll get:
        </h4>
        <ul className="space-y-2">
          {channel.features.map((feature, idx) => (
            <motion.li
              key={idx}
              className="flex items-center gap-2 text-sm text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
            >
              <div className="w-1.5 h-1.5 bg-glitter-gold rounded-full flex-shrink-0" />
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <motion.a
        href={channel.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${channel.buttonColor} text-white font-semibold px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black will-change-transform gpu-accelerated`}
        whileHover={isAnimationsEnabled ? { scale: 1.05 } : {}}
        whileTap={isAnimationsEnabled ? { scale: 0.95 } : {}}
      >
        {channel.buttonText}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </motion.a>

      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${channel.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
    </motion.div>
  )
}
