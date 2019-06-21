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





export default class SignInForm extends Component{
    render(){
        return(
            <Row style={{ marginLeft: 0, marginRight: 0 }}>
                <Col xs={12} lg={{ span:4, offset:4 }} style={{ marginLeft: 0, marginRight: 0 }}>
                    <section className="sign-in-form" >
                        <div className="sign-in-form-div">
                            <h3>
                                Załóż konto
                            </h3>
                            <div className="sign-in-form-image">
                            </div>
                            <form>
                                <input name="email" type="email" placeholder="Email"></input>
                                <input name="password" type="password" placeholder="Hasło"></input>
                                <input name="password" type="password" placeholder="Powtórz hasło"></input>
                            </form>
                        </div>
                    
                    </section>
                </Col>
            </Row>
        )
    }
}

ReactDOM.render(
    <SignInForm />,
    document.querySelector('#root')
)