import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class LogOrSignIn extends Component{
    render(){
        return(
            <section className="container log-sign">
                <div className="log-or-sign">
                    <a href="#"><span>Zaloguj</span></a>
                    <a href="#"><span>Załóż konto</span></a>
                </div>
            </section>
        )
    }
}

ReactDOM.render(
    <LogOrSignIn />,
    document.querySelector('#root')
)