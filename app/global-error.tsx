'use client'

import React from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-primary-black text-white p-6">
        <div className="max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4">Application Error</h1>
          <p className="text-gray-300 mb-2">{error?.message || 'An unexpected error occurred.'}</p>
          {error?.digest && (
            <p className="text-xs text-gray-500 mb-4">Error ID: {error.digest}</p>
          )}
          <button onClick={() => reset()} className="btn-primary w-full">
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
