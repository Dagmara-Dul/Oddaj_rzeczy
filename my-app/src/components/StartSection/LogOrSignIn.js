import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';
import {
    HashRouter,
    Route,
    Link,
    Redirect,
    Switch,
    NavLink,
  } from 'react-router-dom';


export default class LogOrSignIn extends Component{
    render(){
        return(
            <section className="container log-sign">
                <Row>
                    <Col xs={12} lg={{ span:4, offset:8}}>
                        
                            <div className="log-or-sign">
                                <HashRouter>
                                    <Link  style={{ textDecoration: 'none' }} to="/login">
                                        <span>Zaloguj</span>
                                    </Link>
                                </ HashRouter>
                                <HashRouter>
                                    <Link  style={{ textDecoration: 'none' }} to="/signin">
                                        <span>Załóż konto</span>
                                    </Link>
                                </ HashRouter>
                                {/* <a href="#"><span>Załóż konto</span></a> */}
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