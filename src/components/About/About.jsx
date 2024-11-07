import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiedPiper } from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
    <>
      <div className="about">
      <h1>About <span style={{color: 'red'}}>Pied Piper</span></h1> <br /> <hr style={{ backgroundColor: 'red', height: '2px', border: 'none', margin: '0 150px' }} />
      <br /><br />
      <div className="about-content">
        <div className="about-logo">
          <FontAwesomeIcon icon={faPiedPiper} />
        </div>
        <div className="about-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reprehenderit aperiam officiis aliquam distinctio. Dolorum sequi dolores reiciendis itaque aliquam pariatur vitae earum cum accusantium nostrum. Aspernatur excepturi vero esse.</p>
        </div>
      </div>
      <br /><br /><br />
      </div>
    </>
  )
}

export default About