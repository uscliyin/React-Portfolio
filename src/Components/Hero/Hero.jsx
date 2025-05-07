import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile} alt="" />
            <h1><span>I'm Fabio Yin</span>, Software Engineer</h1>
            <p>Software Engineer enhancing systems and building web applications using C#, ASP.NET (Framework/Core, MVC, API), React, Unit Testing, and SQL Server.</p>
            <p>Data Engineer leveraging Python for Data Cleaning, Analysis, and Web Scraping.</p>
        </div>
    )
}

export default Hero
