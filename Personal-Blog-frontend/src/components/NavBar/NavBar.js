import React, { useState } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const ToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className='Container'>
      <div className='NavBar'>
        <div className='menu-icon' onClick={ToggleMenu}>
          <FontAwesomeIcon icon={faBars} style={{ color: 'black', fontSize: '1rem' }} />
        </div>
        <div className='logo'>
          <h1>Oussama</h1>
        </div>
        <div className='menu'>
          <ul>
            <li>
              <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/newsletters" style={{ color: 'black', textDecoration: 'none' }}>
                Newsletters
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>
                About us
              </Link>
            </li>
          </ul>
        </div>
        <div className='icons'>
          <FontAwesomeIcon icon={faFacebook} style={{ color: 'black', fontSize: '1rem', marginLeft: '2rem' }} />
          <FontAwesomeIcon icon={faInstagram} style={{ color: 'black', fontSize: '1rem', marginLeft: '2rem' }} />
          <FontAwesomeIcon icon={faLinkedin} style={{ color: 'black', fontSize: '1rem', marginLeft: '2rem' }} />
        </div>
      </div>
      <div className={` ${menuVisible ? 'show' : 'hide'}`}>
        <div className='menu-icon second' onClick={ToggleMenu}>
          <FontAwesomeIcon icon={faBars} style={{ color: 'black', fontSize: '1rem' }} />
        </div>
        <div className='menu customized'>
          <ul>
            <li>
              <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/newsletters" style={{ color: 'black', textDecoration: 'none' }}>
                Newsletters
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/web-development" style={{ color: 'black', textDecoration: 'none' }}>
                Web development
              </Link>
            </li>
            <li>
              <Link to="/mobile-development" style={{ color: 'black', textDecoration: 'none' }}>
                Mobile development
              </Link>
            </li>
            <li>
              <Link to="/machine-learning" style={{ color: 'black', textDecoration: 'none' }}>
                Machine learning
              </Link>
            </li>
            <li>
              <Link to="/business" style={{ color: 'black', textDecoration: 'none' }}>
                Business
              </Link>

            </li>
          </ul>
        </div>
    </div>
</div> 
  );
}
export default NavBar
