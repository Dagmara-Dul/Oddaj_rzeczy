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





export default class LogInPage extends Component{
    render(){
        return(
            <section className="log-in-page" >
                
               panel logowania <br></br>

               <HashRouter>
                    <Link  style={{ textDecoration: 'none' }} to="/signin">
                        <span>zarejestruj się </span>
                    </Link>
                </ HashRouter>
            </section>
        )
    }
}

ReactDOM.render(
    <LogInPage/>,
    document.querySelector('#root')
)