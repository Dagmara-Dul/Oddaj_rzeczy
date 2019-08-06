import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';





export default class Footer extends Component{
    render(){
        return(
            <Col sm={{span:6, offset:5}} lg={{span:2, offset:10}}>
                <section className="footer" id="footer">
                    <div className="social-media">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i> 
                    </div>
                </section>
            </Col>
        )
    }
}

