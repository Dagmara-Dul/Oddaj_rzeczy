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
            userEmail: false,
            password: false
        })

        if( this.state.userEmail.length <=6 ){ //this.state.userEmail.indexOf("m") != -1 &&
            valid = false
            console.log("Email powinien mieć więcej niż 4 znaki i zawierać @")
            this.setState({userEmailError: "Email powinien mieć więcej niż 4 znaki i zawierać @"})
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
            fetch(`http://localhost:3001/users`,{
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
            <Router>
                <Row style={{ marginLeft: 0, marginRight: 0 }}>
                    <Col xs={12} lg={{ span:4, offset:4 }} style={{ marginLeft: 0, marginRight: 0 }}>
                        <section className="sign-in-form" >
                            <div className="sign-in-form-div">
                                <h3>
                                    Załóż konto
                                </h3>
                                <div className="sign-in-form-image">
                                </div>
                                <form onSubmit = { this.handleFormSubmit }>
                                    <input name="email" type="email" placeholder="Email" value = { this.state.userEmail } onChange = { this.handleUserEmailChange }></input>

                                    {this.state.userEmailError && <span>{this.state.userEmailError}</span>}

                                    <input name="password" type="password" placeholder="Hasło" value = { this.state.password } onChange={ this.handlePasswordChange }></input>
                                    <input name="password" type="password" placeholder="Powtórz hasło" value = { this.state.reapetedPassword } onChange={ this.handleRepeatedPasswordChange }></input><br />
                                    {/* <HashRouter> */}
                                        <NavLink  style={{ textDecoration: 'none' }} to="/login">
                                            <button>Zaloguj się</button>
                                        </NavLink>
                                    {/* </ HashRouter> */}
                                    
                                    <button type="submit">Załóż konto</button>
                                </form>
                            </div>
                        
                        </section>
                    </Col>
                </Row>
            </Router>
        )
    }
}

