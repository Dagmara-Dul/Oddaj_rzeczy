import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class MainMenu extends Component{
    render(){
        return(
            <section className="container main-menu">
                <div className="main-menu-div">
                    <ul>
                        <li><a href="#"><span>Start</span></a></li>
                        <li><a href="#"><span>O co chodzi?</span></a></li>
                        <li><a href="#"><span>O nas</span></a></li>
                        <li><a href="#"><span>Fundacje i organizacje</span></a></li>
                        <li><a href="#"><span>Kontakt</span></a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

ReactDOM.render(
    <MainMenu />,
    document.querySelector('#root')
)