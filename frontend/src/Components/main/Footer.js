import React from 'react'
import './FooterStyle.css'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (
        <div  className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>RDSO Lucknow</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className='Phone'>
                        <h4 className='txt1'><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />318370285 </h4>
                    </div>
                    <div className='Email'>
                        <h4 className='txt1'><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />panditshivam9565@gmail.com </h4>
                    </div>


                </div>
                <div className='right'>
                    <h4 className='txt1'>My name is shivam pandey</h4>
                    <p>I am from varanasi and pursuing BCA from babu banarasi dass university</p>
                    <div className='social'>
                        <FaFacebook size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaTwitter size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer