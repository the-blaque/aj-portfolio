import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/1qTKdvp3K9.json';
import '../styles/Landing.css';

function Landing() {
  return (
    <div className="landing-container">
      <Lottie animationData={animationData} className="lottie-animation" loop={false} speed={2.5} />
      <h2 className="name">I am Oluwaseeni Ajayi</h2>
      <p className="instructions">Please scroll to explore</p>
    </div>
  );
}

export default Landing;
