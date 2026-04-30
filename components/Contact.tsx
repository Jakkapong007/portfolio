'use client'

import { useInView } from '@/hooks/useInView'
import { Mail, Phone } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jakkapong.karndee@gmail.com',
    href: 'mailto:jakkapong.karndee@gmail.com',
    hover: 'hover:border-emerald-400/40 hover:bg-emerald-400/5 hover:text-emerald-400',
    iconBg: 'bg-emerald-400/10 text-emerald-400',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+66 90 693 5403',
    href: 'tel:+66906935403',
    hover: 'hover:border-teal-400/40 hover:bg-teal-400/5 hover:text-teal-400',
    iconBg: 'bg-teal-400/10 text-teal-400',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'github.com/jakkapong007',
    href: 'https://github.com/jakkapong007',
    hover: 'hover:border-zinc-600 hover:bg-zinc-800 hover:text-zinc-100',
    iconBg: 'bg-zinc-800 text-zinc-400',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jakkapong-karndee',
    href: 'https://linkedin.com/in/jakkapong-karndee',
    hover: 'hover:border-sky-400/40 hover:bg-sky-400/5 hover:text-sky-400',
    iconBg: 'bg-sky-400/10 text-sky-400',
  },
]

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-zinc-950"
    >
      <div className="container-max">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-mono text-emerald-400 text-sm tracking-wider">05. Contact</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-100 mt-2 mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            I&apos;m open to new opportunities — full-time roles, contracts, or interesting
            collaborations. Open to relocating internationally.
            Reach out through any of the channels below.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 text-left">
            {links.map(({ icon: Icon, label, value, href, hover, iconBg }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 glass-card border-zinc-800 text-zinc-400 transition-all duration-200 group ${hover}`}
              >
                <span className={`p-2.5 rounded-xl shrink-0 transition-colors ${iconBg}`}>
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-zinc-600 mb-0.5">{label}</p>
                  <p className="text-sm truncate">{value}</p>
                </div>
                <span className="ml-auto text-zinc-700 group-hover:text-current transition-colors shrink-0">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
