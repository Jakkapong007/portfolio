'use client'

import { useInView } from '@/hooks/useInView'

const categories = [
  {
    label: 'Languages',
    color: 'emerald',
    items: ['Go', 'TypeScript', 'JavaScript', 'C#', 'Python', 'PHP', 'SQL'],
  },
  {
    label: 'Frontend & Mobile',
    color: 'teal',
    items: ['React', 'Next.js', 'Vue 3', 'React Native', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    label: 'Backend & APIs',
    color: 'sky',
    items: ['GraphQL', 'REST API', '.NET / ASP.NET', 'Node.js', 'Bun.js', 'Elysia.js', 'SignalR'],
  },
  {
    label: 'Databases',
    color: 'cyan',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Redis'],
  },
  {
    label: 'DevOps & Cloud',
    color: 'amber',
    items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Nginx', 'Azure', 'Traefik', 'Grafana'],
  },
  {
    label: 'Integrations & APIs',
    color: 'violet',
    items: ['LINE API', 'Omise API', 'Genesys Cloud API', 'JWT / Auth'],
  },
]

const badgeMap: Record<string, string> = {
  emerald: 'bg-emerald-400/8  text-emerald-400 border-emerald-400/20 hover:bg-emerald-400/15',
  teal:    'bg-teal-400/8     text-teal-400    border-teal-400/20    hover:bg-teal-400/15',
  sky:     'bg-sky-400/8      text-sky-400     border-sky-400/20     hover:bg-sky-400/15',
  cyan:    'bg-cyan-400/8     text-cyan-400    border-cyan-400/20    hover:bg-cyan-400/15',
  amber:   'bg-amber-400/8    text-amber-400   border-amber-400/20   hover:bg-amber-400/15',
  violet:  'bg-violet-400/8   text-violet-400  border-violet-400/20  hover:bg-violet-400/15',
}

const labelMap: Record<string, string> = {
  emerald: 'text-emerald-400',
  teal:    'text-teal-400',
  sky:     'text-sky-400',
  cyan:    'text-cyan-400',
  amber:   'text-amber-400',
  violet:  'text-violet-400',
}

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section
      id="skills"
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
            <span className="font-mono text-emerald-400 text-sm tracking-wider">04. Skills</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-100 mt-2">
              Technologies I work with
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map(cat => (
              <div
                key={cat.label}
                className="glass-card p-5 hover:border-zinc-700 transition-all group"
              >
                <h3 className={`font-display font-semibold text-sm mb-4 ${labelMap[cat.color]}`}>
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(item => (
                    <span
                      key={item}
                      className={`px-3 py-1.5 text-xs font-mono border rounded-lg transition-colors cursor-default ${badgeMap[cat.color]}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
