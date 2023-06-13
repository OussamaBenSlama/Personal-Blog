import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  return (
    <div className='Categories'>
      <div className='menu-categories'>
        <ul>
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
  );
};

export default Categories;
