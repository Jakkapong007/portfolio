'use client'

import { useInView } from '@/hooks/useInView'
import { Project } from '@/types/project'
import ProjectCard from './ProjectCard'

interface Props {
  readonly projects: Project[]
}

export default function Projects({ projects }: Props) {
  const { ref, inView } = useInView()

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-zinc-950"
    >
      <div className="container-max">
        <div
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-12">
            <span className="font-mono text-emerald-400 text-sm tracking-wider">03. Projects</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-100 mt-2">
              Things I&apos;ve built
            </h2>
            <p className="text-zinc-500 mt-3 max-w-xl">
              Add your own by dropping a{' '}
              <code className="font-mono text-emerald-400 text-sm bg-emerald-400/8 px-1.5 py-0.5 rounded">
                config.json
              </code>{' '}
              in{' '}
              <code className="font-mono text-emerald-400 text-sm bg-emerald-400/8 px-1.5 py-0.5 rounded">
                data/projects/
              </code>.
            </p>
          </div>

          {projects.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <p className="text-zinc-600 font-mono text-sm mb-2">{'// No projects found'}</p>
              <p className="text-zinc-500 text-sm">
                Add a folder to{' '}
                <code className="text-emerald-400">data/projects/your-project/config.json</code>{' '}
                to get started.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
