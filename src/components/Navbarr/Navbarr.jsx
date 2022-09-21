import React from 'react';
import './Navbarr.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbarr = () => {
  return (
    <Nav className="justify-content-center navv" activeKey="/home">
        <Nav.Item>
         <a href=""> <Nav.Link href="/home">Home</Nav.Link></a>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Categories</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
        
      </Nav>
  );
};


export default Navbarr;
