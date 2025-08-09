'use client'

import { Toaster } from 'react-hot-toast'
import { AnimationProvider } from './components/AnimationProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimationProvider>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#0a0a0a',
              color: '#ffffff',
              border: '1px solid #F5C518',
              borderRadius: '12px',
            },
            success: {
              iconTheme: {
                primary: '#F5C518',
                secondary: '#000000',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#000000',
              },
            },
          }}
        />
      </AnimationProvider>
    </>
  )
}
