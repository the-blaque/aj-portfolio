import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/1qTKdvp3K9.json';
import Contact from './Contact';
import '../styles/Landing.css';

function Landing() {
  return (
    <div className="landing-container">
      <div className="title-year">
        <h3>DIGITAL DOSSIER</h3>
        <p>2023</p>
      </div>
      <Lottie animationData={animationData} className="lottie-animation" loop={false} speed={2.5} />
      <h2 className="name">I am Oluwaseeni Ajayi</h2>
      <p className="tagline">Coder. Creator. Adventurer...</p> 
      <p className="tagline"> Building Dreams, One Story at a Time.</p>
      <p className="quote">"It is not how fast, but how well." - Oluwakemi Ajayi</p>
      <p className="instructions">↑ EMBARK ON MY ODYSSEY ↑</p>
      <Contact /> {/* Uses the contact component as "footer"*/}
    </div>
  );
}

export default Landing;
