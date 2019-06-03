import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import './components/LogOrSignIn';

import StartSection from './components/StartSection';
import StatSection from './components/StatSection';
import StepsInfo from './components/StepsInfo';

function App() {
  return (
    <>
      <StartSection />
      <StatSection />
      <StepsInfo />
    </>
  );
}

export default App;
