import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';




export default class ContactForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email:"",
            message:"",
            userEmailError:"",
            nameError: ""
        }
    }
    

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("potwierdzam formularz")

        if(this.validData()){
            const constactMessage ={
                name: this.state.name,
                email: this.state.email,
                textMessage: this.state.message
            }
            // fetch(`${window.location.protocol}//${window.location.hostname}:3001/contactMessage`,{
                fetch(`${process.env.REACT_APP_BACKEND_URL}/contactMessage`,{
            // fetch (`https://oddaj-rzeczy-serwer.herokuapp.com/contactMessage`,{
                headers:{
                    'Content-Type': 'application/json'
                },

                method: 'POST',
                body:JSON.stringify(usr)
            }).then(() => {console.log("validation")}) //tu mogę dać jakąś informację "dziękuję za przesłanie formularza" lub coś takiego
        }
    }

    handleOnChange = (ev) => {
        // console.log(ev.target.name);
            this.setState({
                [ev.target.name] : ev.target.value
            });
        };
       
    validData = () =>{
        let valid = true;

        this.setState({
            name: "",
            email: "",
            message:""
        })

        if(this.state.name.length <=0){
            valid = false
            console.log("podaj swoje imię")
            this.setState({nameError: "podaj swoje imię"})
        }

        if( this.state.email.indexOf('@') <=-1 || this.state.email.length <=5){ //this.state.userEmail.indexOf("m") != -1 &&  || 
            valid = false
            console.log("Email powinien mieć więcej niż 5 znaków i zawierać @")
            this.setState({userEmailError: "Email powinien mieć więcej niż 5 znaków i zawierać @"})
        } 

        if( this.state.message.length <= 0){
            valid = false;
            console.log("wiadomość jest pusta")
            this.setState({messageError: "wiadomość jest pusta"})
        }
        
        return valid;
    }    

    render(){
        return(
            <section className="contact-form">
            
                <Container  className="contact-form-container">
                    {/* <Row>
                        <Col > */}
                            <form onSubmit = {this.handleFormSubmit}>
                                <div className="contact-form-package">
                                    <h4>Formularz kontaktowy</h4>
                                    <div className="contact-inputs">
                                        <input type="text" name="name" placeholder="Imię" onChange = { this.handleOnChange }></input>
                                        <input type="email" name="email" placeholder="Email" onChange = { this.handleOnChange }></input>
                                    </div>
                                    <textarea name="message" placeholder="Wiadomość" onChange = { this.handleOnChange }></textarea>
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

