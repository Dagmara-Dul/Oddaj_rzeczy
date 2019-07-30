import React, {Component} from 'react';
import { Row, Col} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const settingsIcon = <FontAwesomeIcon icon={ faCog }  /> //className="fa-2x"

export default class HelloUser extends Component{
    render(){
        return(
            <Row className="container">
                <Col lg={{span:2, offset:10}}>
                    <section className="hello-user">
                        <span className="hello-user-span">Witaj User</span>
                        <a href="#"> <span className="hello-user-span">{ settingsIcon } </span></a>

                    </ section>
                </Col>
            </Row>
        )
    }
}