import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';




export default class ContactForm extends Component{
    render(){
        return(
            <section className="contact-form">
            Formularz kontaktowy
                {/* <Container  className="contact-container">
                    <Row>
                        <Col sm={12} lg={4} >
                             <h3>Skontaktuj się z nami</h3>
                             <div className="contact-image">
                             </div>
                             <ContactForm />
                        </Col>
                        
                    </Row>
                </Container> */}
                
            </section>
        )
    }
}

ReactDOM.render(
    <ContactForm/>,
    document.querySelector('#root')
)