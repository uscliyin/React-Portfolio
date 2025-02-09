import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import file from '../../assets/file.svg'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile} alt="" />
            <h1><span>I'm Fabio Yin</span>, Software Engineer</h1>
            <p>Software Engineer (2year+) Enhanced systems across various industries and Web Development, leveraging C#, ASP.NET MVC Framework, ASP.NET Web API, React, Unit Testing, and SQL Server.Data Engineer (1 year) Applied Python for data cleaning, data analysis, and web scraping</p>
            <div className="hero-aciton">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={100} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">
                    <a href="src/assets/fabioyin_resume.pdf" download>
                        My resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
