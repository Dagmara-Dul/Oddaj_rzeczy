import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';





export default class Footer extends Component{
    render(){
        return(
            <section className="footer" id="footer">
                
               stopka tutaj sobie jest 
            </section>
        )
    }
}

ReactDOM.render(
    <Footer/>,
    document.querySelector('#root')
)