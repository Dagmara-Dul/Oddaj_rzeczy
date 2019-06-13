import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';


export default class LogOrSignIn extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={4}>
                        <section className="container log-sign">
                            <div className="log-or-sign">
                                <a href="#"><span>Zaloguj</span></a>
                                <a href="#"><span>Załóż konto</span></a>
                            </div>
                        </section>
                    </Col>
                    
                </Row>
            </Container>
        )
    }
}

ReactDOM.render(
    <LogOrSignIn />,
    document.querySelector('#root')
)