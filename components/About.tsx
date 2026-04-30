'use client'

import { useInView } from '@/hooks/useInView'

const facts = [
  { label: 'Location', value: 'Samut Prakan, Thailand' },
  { label: 'Email', value: 'jakkapong.karndee@gmail.com' },
  { label: 'English', value: 'TOEIC 915 — Fluent' },
  { label: 'Status', value: '🟢 Open to opportunities' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-zinc-950"
    >
      <div className="container-max">
        <div
          className={`grid lg:grid-cols-5 gap-12 items-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Avatar */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-emerald-400/10 to-teal-400/10 border border-zinc-800 flex items-center justify-center text-6xl font-display font-bold text-zinc-700 select-none">
                JK
              </div>
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-emerald-400/60 rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-teal-400/60 rounded-br-lg" />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <span className="font-mono text-emerald-400 text-sm tracking-wider">01. About Me</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-100 mt-2">
                A bit about me
              </h2>
            </div>

            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Hi! I&apos;m Jakkapong, a Full-Stack Developer based in Thailand, open to relocating
                internationally. I graduated in Digital Engineering from{' '}
                <span className="text-zinc-200 font-medium">
                  Sirindhorn International Institute of Technology, Thammasat University
                </span>.
              </p>
              <p>
                I specialize in building scalable backend systems and clean APIs — primarily with{' '}
                <span className="text-emerald-400 font-medium">Go</span> and{' '}
                <span className="text-emerald-400 font-medium">C# .NET</span> — while staying
                comfortable across the full stack with{' '}
                <span className="text-emerald-400 font-medium">TypeScript</span>,{' '}
                <span className="text-emerald-400 font-medium">React</span>,{' '}
                <span className="text-emerald-400 font-medium">Vue</span>, and{' '}
                <span className="text-emerald-400 font-medium">React Native</span>.
              </p>
              <p>
                I care deeply about architecture, performance, and developer experience —
                shipping software that&apos;s reliable in production and a pleasure to maintain.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {facts.map(item => (
                <div key={item.label}>
                  <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-zinc-300 text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
