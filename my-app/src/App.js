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
// import './LogOrSignIn';

// import StartSection from './components/StartSection';
// import StatSection from './components/StatSection';
// import StepsInfo from './components/StepsInfo';
// import AboutUs from './components/AboutUs';
// import WhoWeHelp from './components/WhoWeHelp.js';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Button from './elements/Button';
// import { Container } from 'react-bootstrap';
import MainPage from './components/MainPage';
import LogInPage from './components/LogInPage';
import SignIn from './components/SignIn';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={ MainPage } />
        <Route exact path='/login' component={ LogInPage } />
        <Route exact path='/signin' component={ SignIn } />
      </Switch>
    </HashRouter>
    // <>
    //   <Container fluid={true} offset={0} style={{ marginLeft: 0, marginRight: 0 }} >
    //     <StartSection />
    //     <StatSection />
    //     <StepsInfo />
    //     <AboutUs />
    //     <WhoWeHelp />
    //     {/* <Button text="wcisnij" variant="primary" /> */}
    //     <Contact />
    //     <Footer />
    //   </Container>
    // </>
  );
}

export default App;
