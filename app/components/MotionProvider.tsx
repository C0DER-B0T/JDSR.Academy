'use client'

import { useAnimation } from './AnimationProvider'

export function MotionProvider({ children }: { children: React.ReactNode }) {
  // No LazyMotion wrapper to avoid motion-in-LazyMotion runtime errors
  return <>{children}</>
}

// Motion variants
export const motionVariants = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.3 } },
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  },
  staggerContainer: {
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  },
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
}

export const reducedMotionVariants = {
  fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
  slideInLeft: { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
  slideInRight: { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
  scaleIn: { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
  staggerContainer: { animate: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } },
  staggerItem: { initial: { opacity: 0 }, animate: { opacity: 1 } },
}

export const useMotionVariants = () => {
  const { isAnimationsEnabled } = useAnimation()
  return isAnimationsEnabled ? motionVariants : reducedMotionVariants
}
