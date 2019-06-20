import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react';


export default class ChooseOption extends Component{
    render(){
        return(
            <Row style={{ marginLeft: 0, marginRight: 0 }} >
                <Col xs={12} lg={{ span:5, offset:7}} style={{ marginLeft: 0, marginRight: 0 }} >
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
                            <a href="#"><span> oddaj <br></br> rzeczy </span></a>
                            <a href="#"><span> zorganizuj <br></br> zbiórkę</span></a>
                        </div>
                    </div>
                </section>
                </Col>
            </Row>
        )
    }
}

ReactDOM.render(
    <ChooseOption />,
    document.querySelector('#root')
)