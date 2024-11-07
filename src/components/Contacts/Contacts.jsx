import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Contacts() {
  return (
    <>
      <div className="contact">
      <h1>Contact<span style={{color: 'red'}}>/s</span></h1> <br /> <hr style={{ backgroundColor: 'red', height: '2px', border: 'none', margin: '0 150px' }} />
      <ul className="contact-items">
        <li className="contact-item"><FontAwesomeIcon className='item-icon facebook' icon={faFacebook} />
        <p className='item-text' >FaceBook</p>
        </li>
        <li className="contact-item"><FontAwesomeIcon className='item-icon github' icon={faGithub} />
        <p className='item-text' >Github</p>
        </li>
        <li className="contact-item"><FontAwesomeIcon className='item-icon instagram' icon={faInstagram} />
        <p className='item-text' >Instagram</p>
        </li>
        <li className="contact-item"><FontAwesomeIcon className='item-icon twitter' icon={faTwitter} />
        <p className='item-text' >Twitter</p>
        </li>
      </ul>
      <br /><br /><br />
      </div>
    </>
  )
}

export default Contacts