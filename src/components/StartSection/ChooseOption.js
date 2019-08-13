import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';
// import { Link } from 'react';
import {
    HashRouter,
    Route,
    Link,
    Redirect,
    Switch,
    NavLink,
    withRouter,
  } from 'react-router-dom';

 class ChooseOption extends Component{
    render(){
        return(
            <Row style={{ marginLeft: 0, marginRight: 0 }} >
                <Col xs={12} lg={{ span:5, offset:7}}  >
                <section className="choose-option">
                    <div className="choose-option-div-xs">
                        <h3>Masz w domu rzeczy, z którymi nie wiesz co zrobić?</h3>
                        <p><span>Oddaj je potrzebującym</span> <br></br><span>- szybko i w zaufane ręce</span></p>
                        <a href="#"><span>Załóż konto</span></a>
                    </div>
                    <div className="choose-option-div">
                        <p><span>Zacznij pomagać!</span><span>Oddaj niechciane rzeczy w zaufane ręce</span></p>
                        <div className="choose-option-border"></div>
                        <div className="give-or-organise">
                            
                                <Link  style={{ textDecoration: 'none' }} to="/logged">
                                    <span>oddaj <br></br> rzeczy</span>
                                </Link>
                            
                            
                                <Link  style={{ textDecoration: 'none' }} to="/login">
                                    <span>zorganizuj <br></br> zbiórkę</span>
                                </Link>
                            
                            
                        </div>
                    </div>
                </section>
                </Col>
            </Row>
        )
    }
}

export default withRouter ( ChooseOption );