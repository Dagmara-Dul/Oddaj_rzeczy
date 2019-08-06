import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import StartSection from './../StartSection'
import StatSection from './../StatSection';
import StepsInfo from './../StepsInfo';
import AboutUs from './../AboutUs';
import WhoWeHelp from './../WhoWeHelp.js';
import Contact from './../Contact';
import Footer from './../Footer';
// import Button from './elements/Button';
import { Container } from 'react-bootstrap';

export default class MainPage extends Component{

    constructor() {
        super()
        this.state = { users: "Asd" }
    }

    componentWillMount = () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/users`)
       // fetch(`${window.location.protocol}//${window.location.hostname}:3001/users`) //to można sobie podejrzeć/odnaleźć w consoli
            .then((json) => json.json()) //w ten sposób lekko opóźniamy działanie fetcha i dzięki temu działa i nie wyskakuje błąd
            .then((json) => this.setState({ users: JSON.stringify(json) }))
            .catch((err) => this.setState({ users: JSON.stringify(err) }))
    }

    render(){
        console.log(this.state.users)
        return(
            <Container fluid={true} offset={0} style={{ marginLeft: 0, marginRight: 0 }} >
                {/* <div> do sprawdzenia bazy danych
                    {this.state.users}
                    {process.env.REACT_APP_BACKEND_URL || "error"}
                </div> */}
                <StartSection />
                <StatSection />
                <StepsInfo />
                <AboutUs />
                <WhoWeHelp />
                {/* <Button text="wcisnij" variant="primary" /> */}
                <Contact />
                {/* <Footer /> */}
            </Container>
        )
    }
}


