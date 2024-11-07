import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Bubbles from './components/Bubbles/Bubbles'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  const [showbtn, setshowBtn] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setshowBtn(true)
      } else {
        setshowBtn(false)
      }
    }
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  return (
    <>
      <Header />
      <Bubbles />
      <Outlet />
      <ScrollToTop className={showbtn? 'show':''} />
      <Footer />
    </>
  )
}

export default App
