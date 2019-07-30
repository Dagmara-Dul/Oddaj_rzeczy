import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import logo from './logo.svg';
import './App.scss';

// import Button from './elements/Button';
// import { Container } from 'react-bootstrap';
import MainPage from './components/MainPage';
import LogInPage from './components/LogInPage';
import SignIn from './components/SignIn';
import LoggedSite from './components/LoggedSite/LoggedSite';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={ MainPage } />
        <Route exact path='/login' component={ LogInPage } />
        <Route exact path='/signin' component={ SignIn } />
        <Route exact path='/logged' component={ LoggedSite } />
      </Switch>
    </HashRouter>
    
  );
}

export default App;
