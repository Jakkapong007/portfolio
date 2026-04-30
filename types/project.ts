export interface ProjectMedia {
  type: 'image' | 'video'
  src: string
  alt?: string
  poster?: string
}

export interface Project {
  slug: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  thumbnail?: string
  media?: ProjectMedia[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  order?: number
}
