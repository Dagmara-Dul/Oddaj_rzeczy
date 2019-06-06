import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';

import AboutUsDesc from './AboutUsDesc';
import AboutUsImage from './AboutUsImage';



export default class AboutUs extends Component{
    render(){
        return(
            <section className="about-us">
                
                <Container fluid={true} className="about-us-container">
                    <Row>
                        <Col xs={12} lg={6}>
                             <AboutUsDesc />
                        </Col>
                        <Col xs={12} lg={6}>
                            <AboutUsImage />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

ReactDOM.render(
    <AboutUs />,
    document.querySelector('#root')
)