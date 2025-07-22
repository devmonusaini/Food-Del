import React from 'react'
import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
   <div className="footer" id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro ad tempora inventore quidem, labore commodi cupiditate, eligendi omnis necessitatibus iure? Odio, totam magni?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyright">Copyright 2024 &copy; Tomato.com - All Right Reserved.
 </p>
   </div>
  )
}

export default Footer