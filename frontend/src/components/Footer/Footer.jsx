// import React from 'react'
// import './Footer.css'
// import { assets } from '../../assets/frontend_assets/assets'

// const Footer = () => {
//   return (
//     <div className='footer' id='footer'>
//       <div className="footer-content">
//         <div className="footer-content-left">
//           <img src={assets.logo} alt="" />
//           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut tenetur corrupti labore nostrum vero, optio rem totam aliquid corporis vitae tempora. Consectetur qui eius pariatur cum, quo minus rerum expedita doloribus mollitia vel consequatur odio accusamus iure exercitationem ad dolores aut illo itaque voluptate similique impedit eos quasi consequuntur ipsam?</p>
//           <div className="footer-social-icons">
//             <img src={assets.facebook_icon} alt="" />
//             <img src={assets.twitter_icon} alt="" />
//             <img src={assets.linkedin_icon} alt="" />
//           </div>

//         </div>
//         <div className="footer-content-center">
//           <h2>COMPANY</h2>
//           <ul>
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy Policy</li>
//           </ul>

//         </div>
//         <div className="footer-content-right">
//           <h2>GET IN TOUCH</h2>
//           <ul>
//             <li>+91 7525970404</li>
//             <li>contact@tomato.com</li>
//           </ul>

//         </div>
//       </div>
//       <hr />
//       <p className="footer-copyright">Copyright 2025 @ Tomato.com - All Right Reserved.</p>
      
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import './Footer.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        
        {/* Left Section */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="Tomato Logo" className="footer-logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur
            corrupti labore nostrum vero, optio rem totam aliquid corporis vitae
            tempora. Consectetur qui eius pariatur cum, quo minus rerum expedita.
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/delivery">Delivery</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li><a href="tel:+917525970404">+91 7525970404</a></li>
            <li><a href="mailto:contact@tomato.com">contact@tomato.com</a></li>
          </ul>
        </div>
      </div>
      
      <hr />
      <p className="footer-copyright">
        Copyright {new Date().getFullYear()} @ Tomato.com - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

