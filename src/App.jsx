import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Project } from './pages/Project'
import { Contact } from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
