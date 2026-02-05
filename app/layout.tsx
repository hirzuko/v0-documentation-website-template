import React from "react"
import type { Metadata, Viewport } from 'next'
import { Share_Tech_Mono } from 'next/font/google'

import './globals.css'

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Bypass Guide',
  description: 'Methods for bypassing internet restrictions in Russia',
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${shareTechMono.variable} font-mono antialiased`}>{children}</body>
    </html>
  )
}
