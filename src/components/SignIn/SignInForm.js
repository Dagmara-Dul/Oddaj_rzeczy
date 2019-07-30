import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';
import {
    HashRouter,
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    NavLink,
  } from 'react-router-dom';

import FormHeading from './../../elements/FormHeading';



export default class SignInForm extends Component{
    state = {
        userEmail: "",
        userEmailError: false,
        password:"",
        reapetedPassword:"",
        passwordError: false
    }

    handleUserEmailChange = (e) =>{
        let valueFromForm = e.target.value;
        // console.log(valueFromForm);
        this.setState({userEmail : valueFromForm})
    }

    handlePasswordChange = (e) =>{
        let valueFromForm = e.target.value;
        this.setState({password : valueFromForm});
        
    }

    handleRepeatedPasswordChange = (e) =>{
        let valueFromForm = e.target.value;
        this.setState({reapetedPassword : valueFromForm});
        
    }

    validData = () =>{
        let valid = true;

        this.setState({
            userEmail: "",
            password: "",
            reapetedPassword:""
        })

        if( this.state.userEmail.indexOf('@') <=-1 || this.state.userEmail.length <=5){ //this.state.userEmail.indexOf("m") != -1 &&  || 
            valid = false
            console.log("Email powinien mieć więcej niż 5 znaków i zawierać @")
            this.setState({userEmailError: "Email powinien mieć więcej niż 5 znaków i zawierać @"})
        } 

        if(this.state.password != this.state.reapetedPassword){
            valid = false
            console.log("podane hasła są różne")
            this.setState({passwordError: "podane hasła nie są takie same"})
        }

        if( this.state.password.length <= 4){
            valid = false;
            this.setState({passwordError: "hasło powinno mieć co najlmniej 5 znaków"})
        }
        
        return valid;
    }

    

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("potwierdzam formularz")

        if(this.validData()){
            const usr ={
                userEmail: this.state.userEmail,
                password: this.state.password
            }
            // fetch(`${window.location.protocol}//${window.location.hostname}:3001/users`,{
                fetch (`https://oddaj-rzeczy-serwer.herokuapp.com/users`,{
                headers:{
                    'Content-Type': 'application/json'
                },

                method: 'POST',
                body:JSON.stringify(usr)
            }).then(() => {console.log("validation")}) //tu mogę dać jakąś informację "dziękuję za przesłanie formularza" lub coś takiego
        }
    }

    render(){
        return(
            // <Router>
                <Row style={{ marginLeft: 0, marginRight: 0 }}>
                    <Col xs={12} lg={{ span:4, offset:4 }} style={{ marginLeft: 0, marginRight: 0 }}>
                        <section className="sign-in-form" >
                            <div className="sign-in-form-div">
                                <FormHeading text={"Załóż konto"}></FormHeading>
                                {/* <h3>
                                    Załóż konto
                                </h3> */}
                                <div className="sign-in-form-image">
                                </div>
                                <form onSubmit = { this.handleFormSubmit }>
                                    <input name="email" type="email" placeholder="Email" value = { this.state.userEmail } onChange = { this.handleUserEmailChange }></input>
                                    <input name="password" type="password" placeholder="Hasło" value = { this.state.password } onChange={ this.handlePasswordChange }></input>
                                    <input name="password" type="password" placeholder="Powtórz hasło" value = { this.state.reapetedPassword } onChange={ this.handleRepeatedPasswordChange }></input><br />
                                    <HashRouter>
                                        <Link  style={{ textDecoration: 'none' }} to="/login">
                                            <button>Zaloguj się</button>
                                        </Link>
                                    </ HashRouter>
                                    {/* <NavLink  style={{ textDecoration: 'none' }} to="/login">
                                            <button>Zaloguj się</button>
                                    </NavLink> */}
                                    <button type="submit">Załóż konto</button>
                                </form>
                                {this.state.userEmailError && <span>{this.state.userEmailError}</span>} <br />
                                {this.state.passwordError && <span>{ this.state.passwordError }</span>}
                            </div>
                        
                        </section>
                    </Col>
                </Row>
            // </Router>
        )
    }
}

