import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container contact-fade-in">
      <div className="contact-labels">
        <a href="mailto:oluwaseeni.ajayi@gmail.com">[MAIL]</a>
        <a href="https://www.linkedin.com/in/oluwaseeni-ajayi/" target="_blank" rel="noopener noreferrer">[LINKEDIN]</a>
      </div>
      <div className="contact-details">
        <a href="mailto:oluwaseeni.ajayi@gmail.com">OLUWASEENI.AJAYI@GMAIL.COM</a>
        <a href="https://www.linkedin.com/in/oluwaseeni-ajayi/" target="_blank" rel="noopener noreferrer">LINKEDIN.COM/IN/OLUWASEENI-AJAYI</a>
      </div>
    </div>
  );
}

export default Contact;
