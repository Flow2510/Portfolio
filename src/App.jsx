import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/header/header'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Footer from './components/footer/footer'
import ProjectDetail from './pages/projectdetail'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/projects/:id' element={<ProjectDetail />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
