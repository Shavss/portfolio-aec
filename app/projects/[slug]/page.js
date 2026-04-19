import { all } from '/data/projectsData'
import CaseStudy from '../../../components/CaseStudy'
import CursorGrid from '../../../components/CursorGrid'
import ThemeSwitcher from '../../../components/ThemeSwitcher'

export function generateStaticParams() {
  return all.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const project = all.find(p => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.name} — Kacper Ryske`,
    description: project.description,
  }
}

export default function ProjectPage({ params }) {
  const index = all.findIndex(p => p.slug === params.slug)
  const project = all[index]
  const prev = index > 0 ? all[index - 1] : null
  const next = index < all.length - 1 ? all[index + 1] : null

  return (
    <main className="relative min-h-screen bg-canvas">
      <CursorGrid />
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <CaseStudy project={project} index={index} prev={prev} next={next} />
      </div>
      <ThemeSwitcher />
    </main>
  )
}
