import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from '../Trends/ListItem';
import './ListPostes.css';

const ListPostes = () => {
  const [listPostes, setListPostes] = useState([]);

  useEffect(() => {
    getPostes();
  }, []);

  const getPostes = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/');
      if (response.status === 200) {
        const data = response.data;
        setListPostes(data.slice(3)); 
      } else {
        throw new Error('Failed to fetch featured posts');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Postes">
        <h1>All Postes</h1>
        <div className='listPostes'>
            {/* Render the list of post items here */}
            {listPostes.map((post, index) => (
                <ListItem key={index} post={post} />
            ))}
        </div>
    </div>
  );
};

export default ListPostes;
