import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';





export default class LogInPage extends Component{
    render(){
        return(
            <section className="log-in-page" >
                
               panel logowania
            </section>
        )
    }
}

ReactDOM.render(
    <LogInPage/>,
    document.querySelector('#root')
)