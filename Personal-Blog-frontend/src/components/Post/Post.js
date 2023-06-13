import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Post = ({ match }) => {
  const { postId } = match.params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPostContent = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/post/${postId}`);
        if (response.status === 200) {
          const data = response.data;
          setPost(data);
        } else {
          throw new Error('Failed to fetch post content');
        }
      } catch (error) {
        console.error(error);
      }
    };

    getPostContent();
  }, [postId]);

  if (!post) {
    return <div>Loading post...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
