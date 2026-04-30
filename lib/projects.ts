import fs from 'fs'
import path from 'path'
import { Project } from '@/types/project'

export function getProjects(): Project[] {
  try {
    const dataDir = path.join(process.cwd(), 'data', 'projects')
    if (!fs.existsSync(dataDir)) return []

    const projects = fs
      .readdirSync(dataDir, { withFileTypes: true })
      .filter(e => e.isDirectory())
      .map(e => {
        const configPath = path.join(dataDir, e.name, 'config.json')
        if (!fs.existsSync(configPath)) return null
        try {
          const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
          return { slug: e.name, ...config } as Project
        } catch {
          return null
        }
      })
      .filter((p): p is Project => p !== null)

    return projects.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return (a.order ?? 999) - (b.order ?? 999)
    })
  } catch {
    return []
  }
}
