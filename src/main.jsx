import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

document.getElementById('root').render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='github' element={<Github />} />
          <Route path='user/:id' element={<User />} />
        </Route>  
      </Routes>
    </HashRouter>
  </StrictMode>,
)
