import './App.css'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Gallery from './components/gallery/gallery'
import Header from './components/header/header'
import Hero from './components/hero/hero'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
