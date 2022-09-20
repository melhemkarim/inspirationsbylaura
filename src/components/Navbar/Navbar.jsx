import React from 'react';
import './Navbar.css';
import images from '../../constants/images'
import { Form , Button, Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <Container className='container-nav'>
    <div className='.app__navbar'>
      <div className='wrapper'>
        <div className='left'>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
          </div>
          <div className='center'>
            <div className='logo'>
          <img src={images.logo} alt="app__logo" />
           </div>
          </div>
        <div className='right'>
          <div className='menuItem'> <a href="register.jsx"> REGISTER </a> </div> 
          <div className='menuItem'> <a href="sign.jsx"> SIGN IN</a></div> 
          
          </div>
        </div>
      </div>
      </Container>
  );
};


export default Navbar;
