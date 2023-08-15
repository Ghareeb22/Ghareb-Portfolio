import "./footer.css";

import React from 'react'

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#FFF", marginRight:"2rem" }}/>
                
                <div>
                    <p>5th Settlement <br/> The Garden Compound</p>
                    <p>Cairo, Egypt</p>
                    </div>
                    </div>
                    <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#FFF", marginRight:"2rem" }}/>
                    01145776860</h4>
                    </div>  
                    <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#FFF", marginRight:"2rem" }}/>
                    moghareb22@gmail.com</h4>
                   
                    </div>
            </div>
            <div className="right">
            <h4>About me</h4>
            <p>My name is Mohamed and I got graduated in August 2022. <br/>
                I love coding and I am willing to be perfect at my field always,<br/>
                also I am a react developer.
            </p>
            <div className="social">
            <FaFacebook size={20} style={{color: "#FFF", marginRight:"2rem" }}/>
            <FaLinkedin size={20} style={{color: "#FFF", marginRight:"2rem" }}/>
            <FaTwitter size={20} style={{color: "#FFF", marginRight:"2rem" }}/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default footer