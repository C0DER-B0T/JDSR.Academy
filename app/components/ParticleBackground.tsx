'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useAnimation } from './AnimationProvider'

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { isAnimationsEnabled } = useAnimation()

  useEffect(() => {
    if (!isAnimationsEnabled || !containerRef.current) return

    const container = containerRef.current
    const particles: HTMLDivElement[] = []

    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute w-1 h-1 bg-glitter-gold/30 rounded-full'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      container.appendChild(particle)
      particles.push(particle)
    }

    particles.forEach((particle) => {
      const duration = 3 + Math.random() * 4
      const delay = Math.random() * 2

      gsap.set(particle, { opacity: 0, scale: 0 })
      gsap.to(particle, {
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: -100 - Math.random() * 200,
        x: (Math.random() - 0.5) * 100,
        duration,
        delay,
        ease: 'power2.out',
        repeat: -1,
        repeatDelay: Math.random() * 2,
      })
    })

    return () => {
      particles.forEach((particle) => {
        gsap.killTweensOf(particle)
        particle.remove()
      })
    }
  }, [isAnimationsEnabled])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0" />
  )
}
