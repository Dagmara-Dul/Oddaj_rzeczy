import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';




export default class ContactForm extends Component{
    render(){
        return(
            <section className="contact-form">
            
                <Container  className="contact-form-container">
                    {/* <Row>
                        <Col > */}
                            <form>
                                <div className="contact-form-package">
                                    <h4>Formularz kontaktowy</h4>
                                    <div className="contact-inputs">
                                        <input type="text" name="name" placeholder="Imię"></input>
                                        <input type="email" name="email" placeholder="Email"></input>
                                    </div>
                                    <textarea placeholder="Wiadomość"></textarea>
                                    <button type="submit">Wyślij</button>
                                </div>
                            </form>
                            
                        {/* </Col>
                        
                    </Row> */}
                </Container>
                
            </section>
        )
    }
}

