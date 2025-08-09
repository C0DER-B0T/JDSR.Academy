'use client'

import { motion } from 'framer-motion'

interface ReadingProgressProps {
  progress: number
}

export function ReadingProgress({ progress }: ReadingProgressProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-glitter-gold to-glitter-gold-light"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  )
}
