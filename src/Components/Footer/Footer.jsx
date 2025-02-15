import React from 'react'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import './Footer.css'
import linkedin from '../../assets/linkedin.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <p>I'm Fabio Yin, Software Engineer in USA</p>
                </div>

                <div className="footer-top-right">
                <a
                    href="https://www.linkedin.com/in/uscliyin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img src={linkedin} alt="LinkedIn" />
                </a>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>@ 2025 Fabio Yin. All rights reserved.</p>
                </div>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
