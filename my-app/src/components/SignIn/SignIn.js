import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SignIn extends Component{
    render(){
        return(
            <h1>
                zarejestruj się!
            </h1>
        )
    }
}

ReactDOM.render(
    <SignIn />,
    document.querySelector('#root')
)