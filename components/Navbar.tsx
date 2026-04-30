'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <a href="/#" className="text-lg font-bold font-display gradient-text hover:opacity-80 transition-opacity">
          JK.
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 text-sm font-medium text-emerald-400 border border-emerald-400/40 rounded-lg hover:bg-emerald-400/10 hover:border-emerald-400 transition-all duration-200"
          >
            Resume ↗
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-lg transition-all"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm text-emerald-400 border border-emerald-400/40 rounded-lg hover:bg-emerald-400/10 transition-all mt-2"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
