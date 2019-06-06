import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';



export default class AboutUsDesc extends Component{
    render(){
        return(
            <section className="about-us-desc">
                
                <div>
                    <p className="about-us-title">O nas</p>
                    <div className="about-us-desc-image"></div>
                    <p className="about-us-desc-desc">Nori egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis.</p>
                    <p className="name">Annie Ronlaj</p>
                </div>
            </section>
        )
    }
}

ReactDOM.render(
    <AboutUsDesc />,
    document.querySelector('#root')
)