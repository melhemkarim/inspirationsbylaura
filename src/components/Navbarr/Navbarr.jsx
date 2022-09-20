import React from 'react';
import './Navbarr.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Navbarr = () => {
  return (
    <div className='.app__navbar'>
      <div className='wrapper'>
        <div className="left"></div>
        <div className='center'>
          <div className='menuItem-nav2'> <a href="register.jsx"> Home </a> </div> 
          <div className='menuItem-nav2'> <a href="sign.jsx"> About</a></div> 
          <div className='menuItem-nav2'> <a href="sign.jsx"> Categories</a></div> 
          
          </div>
          <div className='right'>
          <div className="app__footer-links_icons">
          <a href="www.facebook.com"><FiFacebook/></a>
          <FiTwitter />
          <FiInstagram />
          
          </div>
        </div>
        </div>
      </div>
  );
};


export default Navbarr;
