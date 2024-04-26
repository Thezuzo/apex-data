import React from 'react'
import '../styles/components/Banner.css'
import data from '../assets/data.jpg'

const Banner = () => {
  return (
    <div>
      <div className="Banner" style={{backgroundImage: `url(${data})`, backgroundSize: 'cover'}}>
        <h1 className='title'>Apex</h1>
        <h2 className="subtitle">Os melhores serviços de hospedagens nuvem</h2>
      </div>
    </div>
  )
}

export default Banner