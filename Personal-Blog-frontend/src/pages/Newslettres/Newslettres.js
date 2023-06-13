import React, { useState } from 'react';
import './Newslettres.css'
const Newsletters = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/newslettres', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from Django backend
        alert('you are successfully subscribed')
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='Newsletters'>
      <form className='Form' onSubmit={handleSubmit} method='POST'>
        <div className='form-field'>
          <label htmlFor='name'>Name:</label> <br />
          <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} />
        </div>
        <div className='form-field'>
          <label htmlFor='email'>Email:</label> <br />
          <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} />
        </div>
        <button type='submit' className='SubmitButton'>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletters;
