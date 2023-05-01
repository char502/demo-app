import React from 'react';
import { Link } from 'react-router-dom';

function Contact(){
  return (
    <div>
      <p>This is the Contact Page</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Contact;