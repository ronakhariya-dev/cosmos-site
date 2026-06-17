import StarField from './components/StarField'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import EventTracker from './components/EventTracker'
import Journey from './components/Journey'
import Blogs from './components/Blogs'
import KnowledgeCapsules from './components/KnowledgeCapsules'
import CodeCosmos from './components/CodeCosmos'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main style={{ position: 'relative', background: 'var(--void)', minHeight: '100vh' }}>
      <StarField density={200} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav />
        <Hero />
        <Gallery />
        <EventTracker />
        <Journey />
        <Blogs />
        <KnowledgeCapsules />
        <CodeCosmos />
        <Footer />
      </div>
    </main>
  )
}
