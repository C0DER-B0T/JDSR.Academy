'use client'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-black text-white">
      <div className="flex items-center gap-3">
        <div className="spinner" />
        <span className="text-gray-300">Loading...</span>
      </div>
    </div>
  )
}
