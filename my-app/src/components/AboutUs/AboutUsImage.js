
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {aboutUsImg} from './../../images/about.jpg';



export default class AboutUsImage extends Component{
    render(){
        return(
            <section className="about-us-image">
                <Image src={aboutUsImg} className="about-us-img"/>
                {/* <div className="about-us-img">
                
                    
                </div> */}
            </section>
        )
    }
}



