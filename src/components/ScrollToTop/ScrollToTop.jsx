import React from 'react'

function ScrollToTop({className}) {
    const HandleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <button className={`scroll-to-top ${className}`} onClick={HandleScrollToTop}>
        <p className='scroll-text'>➣</p>
        <span className='ripple'></span>
    </button>
  )
}

export default ScrollToTop