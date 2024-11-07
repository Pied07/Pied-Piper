import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiedPiperAlt } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    window.addEventListener('scroll',function(){
        const footer = this.document.querySelector('.footer')
        if (this.window.scrollY + this.window.innerHeight >= this.document.body.offsetHeight) {
            footer.style.bottom = 0
        } else {
            footer.style.bottom = '-500px'
        }
    })
  return (
    <>
        <footer className="footer">
            <div className="footerContains">
                <div className="footerLogo">
                    <FontAwesomeIcon icon={faPiedPiperAlt} size='2x' color='red' />
                </div>
                
                <div className="contains">
                <div className="pages">
                    <h2 style={{color: 'black'}}>Pages</h2>
                    <ul className="FooterItems">
                        <li className="FooterItem">
                            <NavLink to='/'  className={({isActive}) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                        </li>
                        <li className="FooterItem">
                            <NavLink to='/about' className={({isActive}) => (isActive ? 'active' : 'inactive')}>About</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="contacts">
                    <h2 style={{color: 'black'}}>Contacts</h2>
                    <ul className="FooterItems">
                        <li className="FooterItem">
                            <NavLink to='/contacts' className={({isActive}) => (isActive ? 'active' : 'inactive')}>Contacts</NavLink>
                        </li>
                        <li className="FooterItem">
                            <NavLink to='/github' className={({isActive}) => (isActive ? 'active' : 'inactive')}>Github</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="Legal">
                    <h2 style={{color: 'black'}}>Legal</h2>
                    <ul className="FooterItems">
                        <li className="FooterItem">
                            <NavLink to='/' className="inactive">Privacy Policy</NavLink>
                        </li>
                        <li className="FooterItem">
                            <NavLink to='/' className="inactive">Terms & Conditions</NavLink>
                        </li>
                    </ul>
                </div>
                </div>

            </div>
            <hr />
            <div className="BelowContains">
                <div className="copyright">© <span style={{color: 'red'}}>Pied Piper</span>, All Rights Reserved</div>
                <div className="handles">
                    <Link to='/' className='handleLink'><FontAwesomeIcon className='handleItems' icon={faFacebook} /></Link>
                    <Link to='/' className='handleLink'><FontAwesomeIcon className='handleItems' icon={faInstagram} /></Link>
                    <Link to='/' className='handleLink'><FontAwesomeIcon className='handleItems' icon={faGithub} /></Link>
                    <Link to='/' className='handleLink'><FontAwesomeIcon className='handleItems' icon={faTwitter} /></Link>
                    <Link to='/' className='handleLink'><FontAwesomeIcon className='handleItems' icon={faYoutube} /></Link>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer