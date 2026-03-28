import CursorBuddy from '../components/CursorBuddy'
//import SpotlightOverlay from '../components/SpotlightOverlay'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import InstitutionsBanner from '../components/InstitutionsBanner'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0e1529]">
      <CursorBuddy />
      <div className="mx-auto w-1/2 min-w-[320px]">
        <Nav />
        <Hero />
        <InstitutionsBanner />   {/* ← add here */}
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  )
}
