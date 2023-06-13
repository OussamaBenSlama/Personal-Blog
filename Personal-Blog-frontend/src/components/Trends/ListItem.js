import React from 'react';
import './ListItem.css';

const ListItem = ({ post }) => {
  const backendURL = 'http://127.0.0.1:8000';

  return (
    <div className='post-card'>
      <img src={`${backendURL}${post.cover}`} alt={post.title} />
      <div className="post-content">
        <div className="post-details">
          <span className="post-category">{post.category}</span>
          <span> - </span>
          <span className="post-date">{new Date(post.date_created).toDateString()}</span>
        </div>
        <h2 className="post-title">{post.title}</h2>
        <p className="post-summary">{post.summary}</p> <span>see more ...</span>
      </div>
      
    </div>
  );
};

export default ListItem;
