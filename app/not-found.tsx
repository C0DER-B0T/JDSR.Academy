'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-black text-white p-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-300 mb-6">The page you are looking for does not exist.</p>
        <Link href="/" className="btn-primary inline-flex items-center justify-center">
          Go Home
        </Link>
      </div>
    </div>
  )
}
