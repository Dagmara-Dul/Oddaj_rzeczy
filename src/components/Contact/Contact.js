import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ContactForm from './ContactForm';




export default class Contact extends Component{
    render(){
        return(
            <section className="contact" id="contact">
                <Container  className="contact-container">
                    <Row>
                        <Col sm={12} lg={4} >
                             <h3>Skontaktuj się z nami</h3>
                             <div className="contact-image">
                             </div>
                             <ContactForm />
                        </Col>
                        
                    </Row>
                </Container>
                Kontakt
            </section>
        )
    }
}

