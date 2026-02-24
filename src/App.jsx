import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProject from './components/FeaturedProject'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-900 text-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProject />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
