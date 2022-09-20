import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <Container>
    <div className="app__footer-links">
      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <div className="app__footer-links_icons">
          
          <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">+1 212-555-1230</p>
        <a href="www.facebook.com"><FiFacebook/></a>
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

    </div>
    </Container>
  </div>
);

export default Footer;