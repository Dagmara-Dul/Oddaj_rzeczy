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
        fetch (`https://oddaj-rzeczy-serwer.herokuapp.com/users`)
       // fetch(`${window.location.protocol}//${window.location.hostname}:3001/users`)
            .then((json) => json.json())
            .then((json) => this.setState({ users: JSON.stringify(json) }))
            .catch((err) => this.setState({ users: JSON.stringify(err) }))
    }

    render(){
        console.log(this.state.users)
        return(
            <Container fluid={true} offset={0} style={{ marginLeft: 0, marginRight: 0 }} >
                <div>
                    {this.state.users}
                </div>
                <StartSection />
                <StatSection />
                <StepsInfo />
                <AboutUs />
                <WhoWeHelp />
                {/* <Button text="wcisnij" variant="primary" /> */}
                <Contact />
                <Footer />
            </Container>
        )
    }
}


