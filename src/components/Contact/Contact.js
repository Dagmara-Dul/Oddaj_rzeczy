import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ContactForm from './ContactForm';
import Footer from '../Footer';




export default class Contact extends Component{
    render(){
        return(
            <section className="contact" id="contact" >
                {/* <Container  >   */}
                {/* <Col lg={{span:2, offset:10}} */}
                    <Row>
                        <Col sm={12} lg={{span:4, offset:8}} >
                             <h2>Skontaktuj się z nami</h2>
                             <div className="contact-form-image"></div>
                             
                             <ContactForm />
                        </Col>
                        
                    </Row>
                    <Row>
                        <Footer />
                    </Row>
                {/* </Container> */}
            </section>
        )
    }
}

