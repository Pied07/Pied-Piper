import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter([
  {
    path: '/#',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contacts",
        element: <Contacts />
      },
      {
        path: "github",
        element: <Github />
      },
      {
        path: "user/:id",
        element: <User />
      }
    ]
  }
],
{
  basename: "/Pied-Piper"
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
