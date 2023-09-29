import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState(''); // State to track the email input

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update the email state as the user types
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!email) {
      alert('Please enter your email address.'); // Display an alert if email is empty
      return;
    }

    emailjs.sendForm('service_et42o9g', 'template_eusm1zq', e.target, 'ReI6lkAzmx4u48TwG')
      .then((result) => {
        console.log(result.text);
        alert('Thank you for subscribing to our newsletter!');
      }, (error) => {
        console.log(error.text);
        alert('Oh no, Something went wrong!');
      });

    e.target.reset();
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <form onSubmit={sendEmail}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={email} // Bind the input value to the email state
            onChange={handleEmailChange} // Update email state on change
          />
          <button type="submit" className="custom__button">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
