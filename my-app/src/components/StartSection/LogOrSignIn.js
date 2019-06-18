import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';


export default class LogOrSignIn extends Component{
    render(){
        return(
            <section className="container log-sign">
                <Row>
                    <Col xs={12} lg={{ span:4, offset:8}}>
                        
                            <div className="log-or-sign">
                                <a href="#"><span>Zaloguj</span></a>
                                <a href="#"><span>Załóż konto</span></a>
                            </div>
                       
                    </Col>
                    
                </Row>
            </section>
        )
    }
}

ReactDOM.render(
    <LogOrSignIn />,
    document.querySelector('#root')
)