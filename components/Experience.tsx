'use client'

import { useInView } from '@/hooks/useInView'

const experiences = [
  {
    role: 'Full-Stack Developer (Contract)',
    company: 'HMMT',
    location: 'Samut Prakan, TH',
    period: 'Mar 2025 – Mar 2026',
    current: true,
    highlights: [
      'Designed and developed a web-based system to manage, forecast, and export car & truck parts data, handling large datasets and business-critical workflows',
      'Improved system reliability by resolving defects, refactoring legacy code, and enforcing better coding standards',
      'Enhanced an existing asset management platform with new modules and optimized workflows',
      'Refactored and optimized SQL Server stored procedures, significantly improving performance',
    ],
  },
  {
    role: 'Freelancer',
    company: 'Fastwork',
    location: 'Remote',
    period: 'Jun 2024 – Present',
    current: true,
    highlights: [
      'Designed and developed a full-stack clinic management system using ASP.NET MVC with a scalable multi-layered architecture (Repository, Service, and Web layers)',
      'Led all architectural decisions independently, ensuring maintainability and separation of concerns',
      'Provided ongoing maintenance, bug fixes, and feature enhancements based on client feedback',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'FCC Services',
    location: 'Bangkok, TH',
    period: 'Aug 2023 – Jan 2025',
    current: false,
    highlights: [
      'Implemented call center telecommunication modules for a banking system via Genesys Cloud API integration',
      'Built marketing and advertising web applications using LINE API for automated promotions and user engagement',
      'Supported CI/CD automation, security hardening, and production deployments with the DevOps team',
    ],
  },
]

const education = {
  degree: 'Bachelor of Engineering — Digital Engineering',
  school: 'Sirindhorn International Institute of Technology (Thammasat University)',
}

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-black"
    >
      <div className="container-max">
        <div
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-12">
            <span className="font-mono text-emerald-400 text-sm tracking-wider">02. Experience</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-100 mt-2">
              Where I&apos;ve worked
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Work history */}
            <div className="lg:col-span-2 space-y-5">
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="glass-card p-6 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/30 transition-all"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-bold text-zinc-100">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs bg-emerald-400/10 text-emerald-400 border border-emerald-400/30 rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-emerald-400 font-medium text-sm mt-0.5">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-zinc-500 bg-zinc-800 px-3 py-1.5 rounded-lg shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Sidebar cards */}
            <div className="space-y-5">
              <div className="glass-card p-6 hover:border-zinc-700 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-violet-400/10 rounded-xl">
                    <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-zinc-600 uppercase tracking-wider">Education</span>
                </div>
                <p className="font-display font-semibold text-zinc-200 text-sm leading-snug">
                  {education.degree}
                </p>
                <p className="text-zinc-500 text-sm mt-1">{education.school}</p>
              </div>

              <div className="glass-card p-6 hover:border-zinc-700 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-emerald-400/10 rounded-xl">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-zinc-600 uppercase tracking-wider">Languages</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-300 text-sm font-medium">English</span>
                    <span className="font-mono text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md border border-emerald-400/20">
                      TOEIC 915
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-300 text-sm font-medium">Thai</span>
                    <span className="font-mono text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded-md">
                      Native
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:border-zinc-700 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-amber-400/10 rounded-xl">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-zinc-600 uppercase tracking-wider">Location</span>
                </div>
                <p className="text-zinc-200 text-sm font-medium">Samut Prakan, Thailand</p>
                <p className="text-zinc-500 text-xs mt-1">Open to relocating internationally</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
