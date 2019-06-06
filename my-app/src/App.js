import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.scss';
import './components/LogOrSignIn';

import StartSection from './components/StartSection';
import StatSection from './components/StatSection';
import StepsInfo from './components/StepsInfo';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <StartSection />
      <StatSection />
      <StepsInfo />
      <AboutUs />
    </>
  );
}

export default App;
