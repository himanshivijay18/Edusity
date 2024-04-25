import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'



const Hero = () => {
  return (
    <div className = 'hero container'>
        <div className="herotext">
            <h1>We ensure a better education for better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with  the knowledge, skills, and  experiences needed to excel in the dynamic fields of education</p>
            <button className="btn">Explore more <img src = {dark_arrow} alt = ""/></button>
        </div>

    </div>
  )
}

export default Hero;