import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiedPiperHat } from '@fortawesome/free-brands-svg-icons'
import { faPiedPiperAlt } from '@fortawesome/free-brands-svg-icons'

function Home() {
  return (
    <>
      <div className="Home">
        <h1 style={{margin: '20px', marginBottom: '40px'}}>Welcome to <span style={{color: 'red'}}>Pied's</span> Den</h1> <hr style={{ backgroundColor: 'red', height: '2px', border: 'none', margin: '0 150px' }} />
        <section className='block'>
        <div className="welcome">
        <div className="img">
          <FontAwesomeIcon className='piedImg' size='3x' icon={faPiedPiperHat} color='red' />
        </div>
        <div className="welcomeText">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        </div>
        </section><hr style={{ backgroundColor: 'red', height: '2px', border: 'none', margin: '0 50px' }} />
        <section className='block'>
        <div className="piedLogo-div">
          <FontAwesomeIcon className='piedLogo' id='piedLogo' icon={faPiedPiperAlt} color='red' />
        </div>
        </section>
        <hr style={{ backgroundColor: 'red', height: '2px', border: 'none', margin: '0 150px' }} /><br />
        <h1>Some <span style={{color: 'red'}}>Cards</span></h1><br /><hr style={{ backgroundColor: 'red', height: '2px', border: 'none', margin: '0 150px' }} /> <br />
        <div className="card-container">
        <section className="block">
            <div className="card">
              <img className="card-img" src="https://wordandsorcery.com/wp-content/uploads/2023/11/pied-piper-of-hamelin.webp" alt="" />
              <div className="card-content">
                <h3 className="card-title">Title</h3>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, minus tempora officiis ducimus a error adipisci exercitationem laboriosam eius assumenda, fugit obcaecati non iusto, quisquam omnis ab blanditiis ut aut!</p>
              </div>
            </div>
        </section>
        <section className="block">
            <div className="card">
              <img className="card-img" src="https://img.podcastone.com/images/2142/episodes/PiedPiper.jpg" alt="" />
              <div className="card-content">
                <h3 className="card-title">Title</h3>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, minus tempora officiis ducimus a error adipisci exercitationem laboriosam eius assumenda, fugit obcaecati non iusto, quisquam omnis ab blanditiis ut aut!</p>
              </div>
            </div>
        </section>
        <section className="block">
            <div className="card">
              <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3-ANvAv8Rm7sztP-cWlG-tzq5U3HLZwjVQ&s" alt="" />
              <div className="card-content">
                <h3 className="card-title">Title</h3>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, minus tempora officiis ducimus a error adipisci exercitationem laboriosam eius assumenda, fugit obcaecati non iusto, quisquam omnis ab blanditiis ut aut!</p>
              </div>
            </div>
        </section>
        <section className="block">
            <div className="card">
              <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhI8O2MxqGBeA4lBUiIZj0kp2ESrT8-qkQiA&s" alt="" />
              <div className="card-content">
                <h3 className="card-title">Title</h3>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, minus tempora officiis ducimus a error adipisci exercitationem laboriosam eius assumenda, fugit obcaecati non iusto, quisquam omnis ab blanditiis ut aut!</p>
              </div>
            </div>
        </section>
        <section className="block">
            <div className="card">
              <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSn-O6LC0g8mJnqG7rLzNEXetCbhF3NyFvpg&s" alt="" />
              <div className="card-content">
                <h3 className="card-title">Title</h3>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, minus tempora officiis ducimus a error adipisci exercitationem laboriosam eius assumenda, fugit obcaecati non iusto, quisquam omnis ab blanditiis ut aut!</p>
              </div>
            </div>
        </section>
        <section className="block">
            <div className="card">
              <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZrnwR3u1L38wHlFeyJoKbrM1Kb2Gdh12Aw&s" alt="" />
              <div className="card-content">
                <h3 className="card-title">Title</h3>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, minus tempora officiis ducimus a error adipisci exercitationem laboriosam eius assumenda, fugit obcaecati non iusto, quisquam omnis ab blanditiis ut aut!</p>
              </div>
            </div>
        </section>
        <section className="block">
            <div className="card">
              <img className="card-img" src="https://www.medievalchronicles.com/wp-content/uploads/2024/02/a36e3cc2-01d7-4e01-9973-a0b21c556ce8.jpg" alt="" />
              <div className="card-content">
                <h3 className="card-title">Title</h3>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, minus tempora officiis ducimus a error adipisci exercitationem laboriosam eius assumenda, fugit obcaecati non iusto, quisquam omnis ab blanditiis ut aut!</p>
              </div>
            </div>
        </section>
        <section className="block">
            <div className="card">
              <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdjkIMmFtbaYJexZm3u2ZRAsD_McwImfRIKw&s" alt="" />
              <div className="card-content">
                <h3 className="card-title">Title</h3>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, minus tempora officiis ducimus a error adipisci exercitationem laboriosam eius assumenda, fugit obcaecati non iusto, quisquam omnis ab blanditiis ut aut!</p>
              </div>
            </div>
        </section>
        <section className="block">
            <div className="card">
              <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXfyo_fayM_Rslb6LSxuuz11cQpe7tmrJZBw&s" alt="" />
              <div className="card-content">
                <h3 className="card-title">Title</h3>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, minus tempora officiis ducimus a error adipisci exercitationem laboriosam eius assumenda, fugit obcaecati non iusto, quisquam omnis ab blanditiis ut aut!</p>
              </div>
            </div>
        </section>
        </div>
        <hr style={{ backgroundColor: 'red', height: '2px', border: 'none', margin: '0 150px' }} /><br />
        <h1>Hope you like the <span style={{color: 'red'}}>website</span>, Bye Bye...</h1> <br /> <hr style={{ backgroundColor: 'red', height: '2px', border: 'none', margin: '0 150px' }} />
        <section className="block"><br />
          <div className="byebye">
            <div className="byebye-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXg1aHkK3m1YkBjX-X4ggPdWnZlx0AHlbNA&s" alt="" className="last-img" />
            </div>
            <div className="byebye-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eveniet voluptates mollitia totam saepe natus sint non. Quam excepturi dolorem sunt, atque aspernatur nostrum quos consequuntur minus, et delectus voluptatibus.</p>
            </div>
          </div>
        </section>
        <br /><br /><br /><br /><br />
      </div>
    </>
  )
}

export default Home