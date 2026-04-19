import CursorGrid from '../components/CursorGrid'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-canvas">
      <CursorGrid />
      <Nav />
      <div className="max-w-6xl mx-auto">
        <Hero />
        <Projects />
        <Contact />
      </div>
      <ThemeSwitcher />
    </main>
  )
}
