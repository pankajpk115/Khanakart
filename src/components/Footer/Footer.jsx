// import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} id="logo" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, reprehenderit.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-right">
                <h2>KHANAKART</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-coontent-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+91-1234-567-890</li>
                    <li>khanakart@gmail.com</li>
                </ul>
            </div>
        </div>
            <hr />
            <p className="footer-copyright">Copyright 2024╥&#169; Khanakart.com - All rights are reserved </p>
    </div>
  )
}

export default Footer