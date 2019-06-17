import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import * as Scroll from 'react-scroll';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export default class MainMenu extends Component{



    render(){
        return(
            <section className="container main-menu">
                <div className="main-menu-div">
                    <ul>
                        <li><Link activeClass="active" to="start" spy={true} smooth={true} offset={0} duration={500} ><span>Start</span></Link></li>
                        <li><Link activeClass="active" to="what-is-it-about" spy={true} smooth={true} offset={0} duration={500} ><span>O co chodzi?</span></Link></li>
                        <li><Link activeClass="active" to="about-us" spy={true} smooth={true} offset={0} duration={500} ><span>O nas</span></Link></li>
                        <li><Link activeClass="active" to="fund-and-organ" spy={true} smooth={true} offset={0} duration={500} ><span>Fundacje i organizacje</span></Link></li>
                        <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500} ><span>Kontakt</span></Link></li>
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