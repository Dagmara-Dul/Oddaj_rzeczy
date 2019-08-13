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
            nameError: "",
            messageError:"",
            isValid: ""
        }
    }
    

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("potwierdzam formularz")

        if(this.validData()){
            const contactMess ={
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
                body:JSON.stringify(contactMess)
            }).then(() => {console.log("validation")}) //tu mogę dać jakąś informację "dziękuję za przesłanie formularza" lub coś takiego
            .then((this.setState({isValid:true, name:"", email:"", message:""})))
            // .then(this.setState({name:"", email:"", message:""}))
        }
    }

    componentDidUpdate=()=>{console.log("update")}

    handleOnChange = (ev) => {
        // console.log(ev.target.name);
            this.setState({
                [ev.target.name] : ev.target.value
            });
        };
       
    validData = () =>{
        let valid = true;
        this.setState({//czyszczenie starych bledow
            nameError:"",
            userEmailError: "",
            messageError:"",
            isValid:""
        })
        this.setState({
            name: "",
            email: "",
            message:""
        })

        if(this.state.name.length <=0){
            valid = false
            console.log("podaj swoje imię")
            this.setState({nameError: "podaj swoje imię", isValid: false})
        }

        if( this.state.email.indexOf('@') <=-1 || this.state.email.length <=5){ //this.state.userEmail.indexOf("m") != -1 &&  || 
            valid = false
            console.log("Email powinien mieć więcej niż 5 znaków i zawierać @")
            this.setState({userEmailError: "email powinien mieć więcej niż 5 znaków i zawierać @", isValid: false})
        } 

        if( this.state.message.length <= 0){
            valid = false;
            console.log("wiadomość jest pusta")
            this.setState({messageError: "wiadomość jest pusta", isValid: false})
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
                                        <input value={this.state.name} type="text" name="name" placeholder="Imię" onChange = { this.handleOnChange }></input>
                                        <input value={this.state.email} type="email" name="email" placeholder="Email" onChange = { this.handleOnChange }></input>
                                    </div>
                                    <textarea value={this.state.message} name="message" placeholder="Wiadomość" onChange = { this.handleOnChange }></textarea>
                                    <button type="submit">Wyślij</button>
                                </div>
                            </form>
                            <div>
                                {this.state.nameError && <span className="contact-form-error">{ this.state.nameError }</span>} <br />
                                {this.state.userEmailError && <span className="contact-form-error">{this.state.userEmailError}</span>} <br />
                                {this.state.messageError && <span className="contact-form-error">{this.state.messageError}</span>} <br />
                                {this.state.isValid && <span className="contact-form-message_sent">{"Dziękujemy! Twoja wiadomość została wysłana"}</span>}
                                
                            </div>
                            
                        {/* </Col>
                        
                    </Row> */}
                </Container>
                
            </section>
        )
    }
}

