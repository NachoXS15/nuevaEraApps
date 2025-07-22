import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import * as Pages from './pages/'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pages.App />
  },
  {
    path: '/memory-game',
    element: <Pages.Memory />
  },
  {
    path: '/ruleta',
    element: <Pages.Ruleta />
  },
  {
    path: '/map',
    element: <Pages.Map />
  },
  {
    path: '/map/north',
    element: <Pages.North />
  },
  {
    path: '/map/south',
    element: <Pages.South />
  },
  {
    path: '/map/west',
    element: <Pages.West />
  },
  {
    path: '/dashboard',
    element: <Pages.Dashboard />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
