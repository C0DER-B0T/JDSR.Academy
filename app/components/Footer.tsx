'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 bg-black/60">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h3 className="text-white font-semibold mb-3">JDSR Academy</h3>
          <p className="text-sm">Govt. Jobs (UP &amp; UK) — Director: Monika Singh</p>
          <p className="text-sm mt-2">Phone: <a href="tel:+919760380843" className="text-glitter-gold">+91 9760380843</a></p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Pages</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/connect" className="nav-link">Connect</Link></li>
            <li><Link href="/about" className="nav-link">About</Link></li>
            <li><Link href="/news" className="nav-link">News</Link></li>
            <li><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/robots.txt" className="nav-link">Robots.txt</Link></li>
            <li><Link href="/sitemap.xml" className="nav-link">Sitemap</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} JDSR Academy</div>
    </footer>
  )
}
