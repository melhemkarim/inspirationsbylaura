import React from 'react'
import L from './L.png';
import './Products.css';
import { Container , Row , Col } from 'react-bootstrap';


function products() {
  return (
    <Container>
    <div className='products'> 

    <div className='best-sellings'>
        <h1>Best Sellings</h1>
    </div>
    
    <Row>
    <Col xs={6} md={4}>
        <img src={L} alt="" />
        </Col>
        <Col xs={6} md={4}>
        <img src={L} alt="" />
        </Col>
        <Col xs={6} md={4}>
        <img src={L} alt="" />
        </Col>
    </Row>
   
  </div>
  </Container>
  )
}

export default products