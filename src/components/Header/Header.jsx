import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import {faPiedPiperAlt} from '@fortawesome/free-brands-svg-icons'

function Header() {
    window.addEventListener("scroll", function(){
        var header = this.document.querySelector(".header")
        header.classList.toggle("sticky",this.window.scrollY > 100)
    })
    window.addEventListener("click",function(event){
        var body = this.document.body
        var sidebar = this.document.querySelector(".sidebar")

        if (event.clientX < body.clientWidth-sidebar.clientWidth) {
            hideSideBar()
        }

    })
    let checked = false
    const showSideBar = ()=>{
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.right = "0"
        checked = true
    }
    const hideSideBar = ()=>{
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.right = "-100%"
        checked = false
    }
  return (
    <header className='header'>
        <div className="headerContainer">
            <div className="logo">
                <FontAwesomeIcon icon={faPiedPiperAlt} size='2x' color='red' />
            </div>
            <div className="navigation">
                <ul className='items'>
                    <li className="item hideItems">
                        <NavLink to='/'  className={({isActive}) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                    </li>
                    <li className="item hideItems">
                        <NavLink to='/about' className={({isActive}) => (isActive ? 'active' : 'inactive')}>About</NavLink>
                    </li>
                    <li className="item hideItems">
                        <NavLink to='/contacts' className={({isActive}) => (isActive ? 'active' : 'inactive')}>Contacts</NavLink>
                    </li>
                    <li className="item hideItems">
                        <NavLink to='/github' className={({isActive}) => (isActive ? 'active' : 'inactive')}>Github</NavLink>
                    </li>
                </ul>
                <ul className={`items sidebar`} id='sidebar'>
                    <li><span style={{color: 'red', cursor: 'pointer'}} onClick={hideSideBar}>✖</span></li>
                    <li className="item">
                        <NavLink to='/'  className={({isActive}) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                    </li>
                    <li className="item">
                        <NavLink to='/about' className={({isActive}) => (isActive ? 'active' : 'inactive')}>About</NavLink>
                    </li>
                    <li className="item">
                        <NavLink to='/contacts' className={({isActive}) => (isActive ? 'active' : 'inactive')}>Contacts</NavLink>
                    </li>
                    <li className="item">
                        <NavLink to='/github' className={({isActive}) => (isActive ? 'active' : 'inactive')}>Github</NavLink>
                    </li>
                    <li className="item">
                        <NavLink className="inactive">Get Started</NavLink>
                    </li>
                    <li className="item">
                        <NavLink className="inactive">Login</NavLink>
                    </li>
                </ul>
            </div>
            <div className="NavRoutes">
                <Link className='route hideItems' to='#'>Get Started</Link>
                <Link className='btn hideItems' to='#'>Login</Link>
                <span onClick={showSideBar} className='menu'>☰</span>
            </div>
        </div>
    </header>
  )
}

export default Header