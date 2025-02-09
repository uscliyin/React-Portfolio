import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt=""/>
      </div>

      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p> Enhanced systems across various industries and Web Development, leveraging C#, ASP.NET MVC Framework, ASP.NET Web API, React, Unit Testing, and SQL Server.</p>
                <p> Enhanced systems across various industries and Web Development, leveraging C#, ASP.NET MVC Framework, ASP.NET Web API, React, Unit Testing, and SQL Server.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Javascrpit</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>C#</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>.Net</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
            <hr/>
        </div>
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
            <hr/>
        </div>
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
            <hr/>
        </div>
      </div>
    </div>
  )
}

export default About
