import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Wheelze - Custom Development Agency',
  description: 'High-end custom development for Websites, Web Applications, and Machine Learning Solutions',
  keywords: ['web development', 'machine learning', 'custom development', 'agency'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navigation />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
