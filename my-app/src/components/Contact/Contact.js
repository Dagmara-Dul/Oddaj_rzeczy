import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';





export default class Contact extends Component{
    render(){
        return(
            <section className="contact">
                
                Kontakt
            </section>
        )
    }
}

ReactDOM.render(
    <Contact/>,
    document.querySelector('#root')
)