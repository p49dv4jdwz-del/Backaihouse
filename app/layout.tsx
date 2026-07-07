import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BackAIHouse — AI Operating System for Professional Kitchens',
  description: 'The second brain of every professional kitchen. AI-powered allergen checking, recipe management, supplier tracking and kitchen intelligence.',
  keywords: 'restaurant AI, kitchen management, allergen checker, recipe builder, hospitality software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
