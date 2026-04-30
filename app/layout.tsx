import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Jakkapong Karndee — Full-Stack Developer',
  description:
    'Full-Stack Developer based in Thailand, specializing in Go, TypeScript, GraphQL, React, and .NET. Building scalable APIs and modern web applications.',
  keywords: ['developer', 'portfolio', 'Go', 'GraphQL', 'TypeScript', 'React', '.NET', 'Vue'],
  authors: [{ name: 'Jakkapong Karndee' }],
  openGraph: {
    title: 'Jakkapong Karndee — Full-Stack Developer',
    description: 'Building scalable APIs and modern web applications.',
    type: 'website',
    url: 'https://jakkapong007.github.io',
  },
}

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-zinc-950 text-zinc-100`}
      >
        {children}
      </body>
    </html>
  )
}
