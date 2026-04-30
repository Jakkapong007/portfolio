'use client'

import { useEffect, useState } from 'react'
import { Mail, ArrowDown } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons'

const codeStack = ['Go', 'TypeScript', 'C#', 'React']

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const cls = (delay: string) =>
    `transition-all duration-700 ${delay} ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/3 -left-72 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-72 w-[500px] h-[500px] bg-teal-500/6 rounded-full blur-3xl animate-float-slow" />

      <div className="relative container-max section-padding w-full">
        <div className="grid lg:grid-cols-5 gap-16 items-center">

          {/* Left */}
          <div className="lg:col-span-3 space-y-7">
            <div className={cls('delay-[0ms]')}>
              <span className="font-mono text-emerald-400 text-sm tracking-widest">
                &gt; Hello, world! 👋
              </span>
            </div>

            <div className={cls('delay-100')}>
              <h1 className="font-display font-bold leading-tight">
                <span className="block text-zinc-500 text-2xl sm:text-3xl mb-1">I&apos;m</span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent bg-200% animate-gradient-shift">
                  Jakkapong
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-zinc-400 mt-2">
                  Full-Stack Developer
                </span>
              </h1>
            </div>

            <p className={`text-zinc-400 text-lg leading-relaxed max-w-lg ${cls('delay-200')}`}>
              Based in Samut Prakan, Thailand — open to relocating internationally.
              I build scalable backends, clean APIs, and modern web & mobile apps
              across Go, TypeScript, C#, and more.
            </p>

            <div className={`flex flex-wrap gap-4 ${cls('delay-300')}`}>
              <a
                href="#projects"
                className="px-7 py-3 bg-emerald-400 text-zinc-950 font-bold rounded-xl hover:bg-emerald-300 hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border border-zinc-700 text-zinc-300 font-semibold rounded-xl hover:border-emerald-400/60 hover:text-emerald-400 hover:bg-emerald-400/5 transition-all"
              >
                Get In Touch
              </a>
            </div>

            <div className={`flex gap-2 ${cls('delay-500')}`}>
              {[
                { href: 'https://github.com/jakkapong007', icon: GitHubIcon, label: 'GitHub' },
                { href: 'https://linkedin.com/in/jakkapong-karndee', icon: LinkedInIcon, label: 'LinkedIn' },
                { href: 'mailto:jakkapong.karndee@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 text-zinc-500 hover:text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — code card */}
          <div
            className={`lg:col-span-2 hidden lg:block transition-all duration-700 delay-400 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-2xl shadow-black/50">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="ml-3 font-mono text-xs text-zinc-600">about-me.ts</span>
              </div>

              <div className="font-mono text-sm space-y-0.5 leading-relaxed">
                <p>
                  <span className="text-violet-400">const</span>{' '}
                  <span className="text-emerald-400">developer</span>{' '}
                  <span className="text-zinc-600">= &#123;</span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">name</span>
                  <span className="text-zinc-600">: </span>
                  <span className="text-emerald-300">&quot;Jakkapong Karndee&quot;</span>
                  <span className="text-zinc-600">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">role</span>
                  <span className="text-zinc-600">: </span>
                  <span className="text-emerald-300">&quot;Full-Stack Dev&quot;</span>
                  <span className="text-zinc-600">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">location</span>
                  <span className="text-zinc-600">: </span>
                  <span className="text-emerald-300">&quot;Thailand 🇹🇭&quot;</span>
                  <span className="text-zinc-600">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">stack</span>
                  <span className="text-zinc-600">: [</span>
                </p>
                {codeStack.map((tech, i) => (
                  <p key={tech} className="pl-8">
                    <span className="text-emerald-300">&quot;{tech}&quot;</span>
                    {i < codeStack.length - 1 && <span className="text-zinc-600">,</span>}
                  </p>
                ))}
                <p className="pl-4"><span className="text-zinc-600">],</span></p>
                <p className="pl-4">
                  <span className="text-sky-300">english</span>
                  <span className="text-zinc-600">: </span>
                  <span className="text-emerald-300">&quot;TOEIC 915&quot;</span>
                  <span className="text-zinc-600">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">openToWork</span>
                  <span className="text-zinc-600">: </span>
                  <span className="text-orange-400">true</span>
                </p>
                <p><span className="text-zinc-600">&#125;</span></p>
                <p className="mt-3 flex items-center gap-1">
                  <span className="text-zinc-600">{'// '}</span>
                  <span className="text-zinc-500">ready to build</span>
                  <span className="inline-block w-2 h-4 bg-emerald-400 ml-0.5 animate-cursor-blink" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-600 animate-bounce">
          <span className="text-xs font-mono tracking-widest">scroll</span>
          <ArrowDown size={14} />
        </div>
      </div>
    </section>
  )
}
