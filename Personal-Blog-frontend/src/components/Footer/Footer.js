import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
      <div>
        <h4>Menu</h4>
        <span>________________</span>
        <div className='menu-footer'>
          <ul>
            <li>
              <Link to="/" className='footer-link'>
                Home
              </Link>
            </li>
            <li>
              <Link to="/newsletters" className='footer-link'>
                Newsletters
              </Link>
            </li>
            <li>
              <Link to="/about" className='footer-link'>
                About us
              </Link>
            </li>
            {/* Rest of the menu items */}
          </ul>
        </div>
      </div>
      <div>
        <h4>Contact</h4>
        <span>________________</span>
        <ul>
          <li>
            <FontAwesomeIcon icon={faPhone} className='fa-icon' /> Phone
          </li>
          <li>
            <FontAwesomeIcon icon={faAddressCard} className='fa-icon' /> Address
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className='fa-icon' /> Email
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
