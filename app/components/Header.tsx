'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAnimation } from './AnimationProvider'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/connect', label: 'Connect' },
  { href: '/about', label: 'About' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const { reducedMotion, toggleReducedMotion } = useAnimation()

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-gray-800">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-glitter-gold font-bold tracking-wide">JDSR Academy</Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'text-glitter-gold' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleReducedMotion}
            className="text-xs px-3 py-1 rounded border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
            aria-pressed={reducedMotion}
            title="Toggle reduced motion"
          >
            {reducedMotion ? 'Motion: Off' : 'Motion: On'}
          </button>
          <button className="md:hidden text-gray-300" onClick={() => {
            const el = document.getElementById('mobile-menu')
            if (el) el.classList.toggle('hidden')
          }} aria-label="Open menu">☰</button>
        </div>
      </div>
      {/* Mobile menu */}
      <div id="mobile-menu" className="md:hidden hidden border-t border-gray-800 bg-black/80">
        <div className="px-4 py-3 space-y-2">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="block nav-link">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
