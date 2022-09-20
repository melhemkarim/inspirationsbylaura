import React from 'react'
import images from '../../constants/images';
import './Arrivals.css';
import { MDBContainer, MDBRow, MDBCol, } from 'mdb-react-ui-kit';
import { BsCart} from 'react-icons/bs';
import { Container } from 'react-bootstrap';


function Arrivals() {
  return (
    <Container>
    <div className='arrivals'> 

    <div className='title-products'>
        <h1>New Arrivals</h1>
    </div>
   <MDBRow>
        <MDBCol md='4'>
            <div className='product-box'>
            <div className="app__gallery-images_container arrivals-img" >
          {[images.tshirt].map((image, index) => (
            <div className="app__gallery-images_card-arrival flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <a className="gallery__image-icon" href="#home">View Collection</a>
            </div>
          ))}
        </div>
          </div>
        </MDBCol>
        <MDBCol md='4'>
            <div className='product-box'>
            <div className="app__gallery-images_container arrivals-img" >
          {[images.pants].map((image, index) => (
            <div className="app__gallery-images_card-arrival flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <a className="gallery__image-icon" href="#home">View Collection</a>
            </div>
          ))}
        </div>
          </div>
        </MDBCol>
        <MDBCol md='4'>
            <div className='product-box'>
            <div className="app__gallery-images_container arrivals-img" >
          {[images.shoes].map((image, index) => (
            <div className="app__gallery-images_card-arrival flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <a className="gallery__image-icon" href="#home">View Collection</a>
            </div>
          ))}
        </div>
          </div>
        </MDBCol>
    
      </MDBRow>
   
  </div>
  </Container>
  )
}

export default Arrivals