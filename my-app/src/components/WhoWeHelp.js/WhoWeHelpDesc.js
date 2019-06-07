import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';




export default class WhoWeHelpDesc extends Component{
    render(){
        return(
            <div>
                <h2>
                    Komu pomagamy?
                </h2>
                <div className="who-we-help-desc-image">
                </div>
                <div className="who-we-help-desc-org">
                <span>Fundacjom</span>
                <span>Organizacjom pozarządowym</span>
                <span>Lokalnym zbiórkom</span>
                </div>
                <p>
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </p>
            </div>
        )
    }
}

ReactDOM.render(
    <WhoWeHelpDesc/>,
    document.querySelector('#root')
)