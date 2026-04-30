'use client'

import { useRef, useState } from 'react'
import { ExternalLink, Star } from 'lucide-react'
import { GitHubIcon } from './icons'
import { Project } from '@/types/project'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

function Thumbnail({ project }: { readonly project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [imgError, setImgError] = useState(false)

  if (!project.thumbnail || imgError) {
    return (
      <div className="w-full h-44 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-t-2xl">
        <span className="text-4xl font-display font-bold text-zinc-700 select-none">
          {project.title.slice(0, 2).toUpperCase()}
        </span>
      </div>
    )
  }

  const isVideo =
    project.thumbnail.endsWith('.mp4') ||
    project.thumbnail.endsWith('.webm') ||
    project.thumbnail.endsWith('.mov')

  const src = `${basePath}/projects/${project.slug}/${project.thumbnail}`

  if (isVideo) {
    return (
      <video
        ref={videoRef}
        src={src}
        className="w-full h-44 object-cover rounded-t-2xl"
        muted
        loop
        playsInline
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => {
          videoRef.current?.pause()
          if (videoRef.current) videoRef.current.currentTime = 0
        }}
      />
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={project.title}
      className="w-full h-44 object-cover rounded-t-2xl"
      onError={() => setImgError(true)}
    />
  )
}

export default function ProjectCard({ project }: { readonly project: Project }) {
  return (
    <article className="glass-card overflow-hidden group hover:-translate-y-1.5 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden">
        <Thumbnail project={project} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {project.featured && (
          <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-medium rounded-full">
            <Star size={10} className="fill-amber-400 text-amber-400" />
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs font-mono bg-emerald-400/8 text-emerald-400 border border-emerald-400/20 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-zinc-800">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-200 text-sm transition-colors"
            >
              <GitHubIcon size={15} />
              <span>Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo"
              className="flex items-center gap-1.5 text-zinc-500 hover:text-emerald-400 text-sm transition-colors ml-auto"
            >
              <span>Live Demo</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
