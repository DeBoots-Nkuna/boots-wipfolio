import { Home } from './pages/Home'
import { About } from './pages/About'
import { Project } from './pages/Project'
import { Contact } from './pages/Contact'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import { RootLayout } from './layout/RootLayout'
export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}
