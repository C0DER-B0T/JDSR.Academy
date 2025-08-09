'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface AnimationContextType {
  reducedMotion: boolean
  toggleReducedMotion: () => void
  isAnimationsEnabled: boolean
}

const AnimationContext = createContext<AnimationContextType>({
  reducedMotion: false,
  toggleReducedMotion: () => {},
  isAnimationsEnabled: true,
})

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isAnimationsEnabled, setIsAnimationsEnabled] = useState(true)

  useEffect(() => {
    // Check for user's reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    // Check for stored preference
    const storedPreference = localStorage.getItem('reduced-motion')
    if (storedPreference) {
      setReducedMotion(storedPreference === 'true')
    }

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    // Update animations enabled state
    setIsAnimationsEnabled(!reducedMotion)
    
    // Store preference
    localStorage.setItem('reduced-motion', reducedMotion.toString())
    
    // Update CSS custom property
    document.documentElement.style.setProperty(
      '--reduced-motion',
      reducedMotion ? 'reduce' : 'no-preference'
    )
  }, [reducedMotion])

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion)
  }

  return (
    <AnimationContext.Provider
      value={{
        reducedMotion,
        toggleReducedMotion,
        isAnimationsEnabled,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}

export const useAnimation = () => {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error('useAnimation must be used within AnimationProvider')
  }
  return context
}
