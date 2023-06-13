import React, { useState, useEffect } from 'react';
import './Trends.css';
import ListItem from './ListItem';
import axios from 'axios';

const Trends = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/trends/');
      if (response.status === 200) {
        const data = response.data;
        setFeatured(data);
      } else {
        throw new Error('Failed to fetch featured posts');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='Trends'>
      <h1>Trending</h1>
      <div className='post-list'>
        {featured.slice(0, 3).map((post, index) => (
          <ListItem key={index} post={post} />
        ))}
      </div>


    </div>
  );
};

export default Trends;
