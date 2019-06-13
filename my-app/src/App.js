import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.scss';
import './components/LogOrSignIn';

import StartSection from './components/StartSection';
import StatSection from './components/StatSection';
import StepsInfo from './components/StepsInfo';
import AboutUs from './components/AboutUs';
import WhoWeHelp from './components/WhoWeHelp.js';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Button from './elements/Button';

function App() {
  return (
    <>
      <StartSection />
      <StatSection />
      <StepsInfo />
      <AboutUs />
      <WhoWeHelp />
      <Button text="wcisnij" variant="primary" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
