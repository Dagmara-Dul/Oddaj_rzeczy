import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LogOrSignIn from './../StartSection/LogOrSignIn';
import MainMenu from './../StartSection/MainMenu';
import SignInForm from './SignInForm';

export default class SignIn extends Component{
    render(){
        return(
            <>
                <LogOrSignIn />
                <MainMenu />
                <SignInForm />
            </>
        )
    }
}

ReactDOM.render(
    <SignIn />,
    document.querySelector('#root')
)