import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile} alt="" />
            <h1><span>I'm Fabio Yin</span>, Software Engineer</h1>
            <p>Software Engineer (2+ years) enhancing systems and building web applications using C#, ASP.NET (Framework/Core, MVC, API), React, Unit Testing, and SQL Server.</p>
            <p>Data Engineer (1+ year) leveraging Python for Data Cleaning, Analysis, and Web Scraping.</p>
            <div className="hero-aciton">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={100} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">
                    <a href="/fabioyin_resume.pdf" download>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
