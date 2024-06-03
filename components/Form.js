import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // service_id, template_id , public key 
    emailjs.send('service_49vxsxu', 'template_4ae7grg', templateParams, 'sHRrQEV9ys1fVAuq0')
      .then((response) => {
        alert('Email sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        alert('Failed to send email. ' + error.text);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </label>
      <br />
      <label>
        Email:
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </label>
      <br />
      <label>
        Message:
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;