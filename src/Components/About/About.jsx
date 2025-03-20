import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-myskills">
        <h2>My Skills</h2>
        <ul>
          <li>
            <strong>Programming & Frameworks:</strong> C#, Python, SQL; ASP.NET (MVC, Razor Pages, Web API, Web Services, WCF), React, LINQ
          </li>
          <li>
            <strong>Design & Architecture:</strong> OOP, SOLID, Microservices
          </li>
          <li>
            <strong>Database & Data Management:</strong> SQL Server, MySQL, Database Design, Normalization, Stored Procedures
          </li>
          <li>
            <strong>Cloud & DevOps:</strong> Azure, Windows Server, IIS; CI/CD (GitHub Actions), Containerization (Docker)
          </li>
          <li>
            <strong>Tools & Methodologies:</strong> Agile/Scrum, SVN, GitHub, Unit Testing, TDD
          </li>
          <li>
            <strong>Data & Analytics:</strong> Python (Pandas, NumPy), Excel, ETL, Machine Learning, Data Cleaning
          </li>
        </ul>
      </div>
      <div className="about-myexperience">
        <h2>Work Experience</h2>

        <div className="experience-item">
          <h3>MES Engineer | Jing-Jin Electric North America, MI, USA</h3>
          <p><em>Feb 2024 - Present</em></p>
          <ul>
            <li>
              Developed advanced MES features with <strong>C#, ASP.NET (Web API, WCF, Web Services, MVC), and SQL Server</strong>, effectively blocking 100% of defective inverters from shipping to customers and achieving a <strong>15% increase in production efficiency</strong>.
            </li>
            <li>
              Extracted and visualized critical production data, <strong>eliminating manual data logging</strong> and enabling leadership to make timely, data-driven decisions.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Full Stack Developer | Antra, VA, USA</h3>
          <p><em>Mar 2023 - Feb 2024</em></p>
          <ul>
            <li>
              Developed a HR system using <strong>ASP.NET Core Web API</strong> and <strong>React</strong> on a microservices architecture deployed on <strong>Azure</strong>.
            </li>
            <li>
              Automated onboarding, leave management, and performance reviews—eliminating manual data entry and improving HR efficiency by <strong>40%</strong>.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Data Engineer Intern | MetaNovas Biotech, CA, USA (Remote)</h3>
          <p><em>Mar 2022 - Dec 2022</em></p>
          <ul>
            <li>
              Developed a web scraping pipeline using Python (lxml, XPath, Multithreading, Apache Airflow) to automate extraction, cleaning, and upload of medicine data to AWS S3, providing high-quality data that enabled the data science team to train predictive models.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Software Developer | Chongqing Chaomei Advanced Lubricating Oil, Chongqing, China</h3>
          <p><em>Jan 2020 - Dec 2020</em></p>
          <ul>
            <li>
            Developed a full-stack CRM system using C#, ASP.NET MVC Core, enhancing functionality with JavaScript.
            Implemented sophisticated user interface designs with Razor Page, HTML and CSS, using Partial Views for reusable UI components. Improved data management efficiency with SQL Server. Ensured application reliability through unit testing using xUnit and FakeItEasy.
            </li>
          </ul>
        </div>
      </div>

      <div className="about-myeducation">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Master of Science, Analytics</h3>
          <p>University of Southern California, CA, USA</p>
          <p><em>Jan 2021 - Dec 2022</em></p>
        </div>
        <div className="education-item">
          <h3>Bachelor of Engineering, Software and Engineering</h3>
          <p>Chongqing University of Posts and Telecommunications, Chongqing, China</p>
          <p><em>Sep 2016 - Jun 2020</em></p>
        </div>
      </div>

      <div className="about-myresume">
        <a href="/fabioyin_resume.pdf" download>
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default About
