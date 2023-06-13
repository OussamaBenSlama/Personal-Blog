import React from 'react';
import { Link } from 'react-router-dom';
import ImgSrc from './metaverse.png';
import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
      <div className='header-content'>
        <h1>Exploring the World of Technology</h1>
        <p>Insights, News, and Trends for Tech Enthusiasts</p>
        <div className='btn'>
          <Link to='/newsletters'>
            <button id='sub'>Subscribe</button>
          </Link>
          <button>Contact Us</button>
        </div>
      </div>
      <img src={ImgSrc} alt="metaverse" />
    </div>
  );
}

export default Header;
