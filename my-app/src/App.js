import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import './components/LogOrSignIn';
import LogOrSignIn from './components/LogOrSignIn';
import MainMenu from './components/MainMenu';

function App() {
  return (
    <>
      <LogOrSignIn />
      <MainMenu />
    </>
  );
}

export default App;
