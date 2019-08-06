import React, {Component} from 'react';
import {
    HashRouter,
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';
  import {Row, Col} from 'react-bootstrap';

import FormHeading from './../../elements/FormHeading';

export default class LogInForm extends Component{
    constructor(props){
        super(props)

        this.state={
            email: "",
            password:"",
        }
    }
    
    
    
    render(){
        return(
            <>
                <Row style={{ marginLeft: 0, marginRight: 0 }}>
                    <Col xs={12} lg={{ span:6, offset:3 }}>
                        <div className='log-in-section'>
                            <FormHeading text={"Zaloguj się"}></FormHeading>
                            <div className="log-in-form-image"></div>
                            <form onSubmit = { this.handleLogInFormSubmit }>
                                <input name="email" type="email" placeholder="Email" value = { this.state.email } onChange = { this.handleEmail }></input><br />
                                <input name="password" type="password" placeholder="Hasło" value = { this.state.passwordCheck } onChange={ this.handlePassword }></input> <br />
                                <div className='btns'>
                                    <HashRouter>
                                        <Link  style={{ textDecoration: 'none' }} to="/signin">
                                            <button>Załóż konto</button>
                                        </Link>
                                    </ HashRouter>
                                    <button type="submit">Zaloguj się</button>
                                    {/* <NavLink  style={{ textDecoration: 'none' }} to="/login">
                                            <button>Zaloguj się</button>
                                    </NavLink> */}
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
}
