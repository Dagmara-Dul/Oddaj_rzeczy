import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import { NavLink } from 'react-router-dom';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';


const hamburger = <FontAwesomeIcon icon={ faBars } className="fa-2x" />
const tShirt = <FontAwesomeIcon icon= { faTshirt } className="fa-2x" />
const options = { spy:true, smooth:true, offset:0, duration:600, activeClass:"active" }

const menuItem = [
    {
        to: "start",
        path: "/",
        name: "Start"
      },
      {
        to: "what-is-it-about",
        path: "/",
        name: "O co chodzi?"
      },
      {
          to: "about-us",
          path:'/',
          name: "O nas "
      },
      {
        to: "fund-and-organ",
        path:'/',
        name: "Fundacje i organizacje"
    },
    {
        to: "contact",
        path:'/',
        name: "Kontakt"
    },

]
export default class MainMenu extends Component{

    getList (){
        return menuItem.map((item)=>{
            const Component = this.props.isHome ? Link : NavLink;
            return( 
            <li><Component to={this.props.isHome ? item.to : item.path} {...options} ><span> {item.name}</span></Component></li>
            )
        }) 
    }

    render(){
       
        return(
            <Row>
            <section className="container main-menu">
                <div className="main-menu-div" >
                {/* <span className="fas fa-bars mobile-menu" id="main-menu-hamburger"></span> */}
                    <div className="main-menu-div-sm">
                        <span id='main-menu-logo'>{ tShirt }</span>
                        <span id="main-menu-hamburger">{hamburger}</span>
                    </div>
                    <ul className="main-menu-navbar">
                        {this.getList()}
                        {/* <li><Component activeClass="active" to="start" {...options} ><span>Start</span></Component></li>
                        <li><Component activeClass="active" to="what-is-it-about" {...options} ><span>O co chodzi?</span></Component></li>
                        <li><Component activeClass="active" to="about-us" spy={true} smooth={true} offset={0} duration={600} ><span>O nas</span></Component></li>
                        <li><Component activeClass="active" to="fund-and-organ" spy={true} smooth={true} offset={0} duration={600} ><span>Fundacje i organizacje</span></Component></li>
                        <li><Component activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={600} ><span>Kontakt</span></Component></li> */}
                    </ul>
                </div>
            </section>
            </Row>
        )
    }
}

