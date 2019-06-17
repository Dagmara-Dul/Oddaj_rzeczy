import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';
import WhoWeHelpDesc from './WhoWeHelpDesc';




export default class WhoWeHelp extends Component{
    render(){
        return(
            <section className="who-we-help" id="fund-and-organ">
                
                <Container  className="who-we-help-container">
                    <Row>
                        <Col >
                             <WhoWeHelpDesc />
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col>
                            <div>nazwy fundacji</div>
                        </Col>
                        <Col>
                            <div>opis działalności</div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

ReactDOM.render(
    <WhoWeHelp/>,
    document.querySelector('#root')
)