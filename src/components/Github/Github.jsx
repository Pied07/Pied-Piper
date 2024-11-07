import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Github() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/Pied07')
    .then(response => response.json())
    .then(data => {
      setData(data)
    } )
  },[])
  const formatted_date = new Date(data.created_at).toLocaleDateString(undefined,{
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  
  return (
    <div className='Github'>
      <center><h1>GitHub <span style={{color: 'red'}}>Profile</span></h1> <br /> <hr style={{ backgroundColor: 'red', height: '2px', width: '100%', border: 'none' }} />      </center>
      <br />
      <div className="github_Container">
      <br />
      <ul className="github-items">
        <li className="github-item">
          <div className="item-front">Github Profile</div>
          <div className="item-back">{data.login}</div>
        </li>
        <li className="github-item">
          <div className="item-front">Name</div>
          <div className="item-back">{data.name}</div>
        </li>
        <li className="github-item">
        <div className="item-front">Repositories</div>
        <div className="item-back">{data.public_repos}</div>
        </li>
        <li className="github-item">
        <div className="item-front">Repository Link</div>
        <div className="item-back"><Link to={data.html_url} target='_blank' style={{color: 'rgb(7, 7, 88)'}}>Link Url</Link></div>
        </li>
        <li className="github-item">
        <div className="item-front">Date of Creation</div>
        <div className="item-back">{formatted_date}</div>
        </li>
      </ul>
      </div>
      <br /><br /><br />
    </div>
  )
}

export default Github