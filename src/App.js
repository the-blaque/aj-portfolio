import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Roadmap from './components/Roadmap';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Project from './components/Projects';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Landing />
      <Roadmap />
      <AboutMe />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
