import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-labels">
        <span>[MAIL]</span>
        <span>[LINKEDIN]</span>
      </div>
      <div className="contact-details">
        <a href="mailto:oluwaseeni.ajayi@gmail.com">OLUWASEENI.AJAYI@GMAIL.COM</a>
        <a href="https://www.linkedin.com/in/oluwaseeni-ajayi/">LINKEDIN.COM/IN/OLUWASEENI-AJAYI</a>
      </div>
    </div>
  );
}

export default Contact;
