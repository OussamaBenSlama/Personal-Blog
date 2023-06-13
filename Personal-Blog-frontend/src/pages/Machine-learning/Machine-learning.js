import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ListItem from '../../components/Trends/ListItem'
const Machine = () => {
    const [listPostes, setListPostes] = useState([]);

  useEffect(() => {
    getPostes();
  }, []);

  const getPostes = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/categories/machine learning/');
      if (response.status === 200) {
        const data = response.data;
        setListPostes(data); 
      } else {
        throw new Error('Failed to fetch featured posts');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='Postes'>
        <h1>Machine learning</h1>
        <div className='listPostes'>
            
            {listPostes.map((post, index) => (
                <ListItem key={index} post={post} />
            ))}
        </div>
    </div>
  )
}

export default Machine