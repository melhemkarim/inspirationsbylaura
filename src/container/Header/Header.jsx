import React from 'react';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <h1>Find Your Style </h1>
      <h1 className='app__header-h1'>The Key To Great Fashion</h1>
      <button type='button' className='custom__button button__hover'>Explore </button>
    </div>
    <div className='app__wrapper_img'>
        <img src={images.LL} alt='header-img'/>
      </div>
  </div>
);

export default Header;