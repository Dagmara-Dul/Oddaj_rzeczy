import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class ChooseOption extends Component{
    render(){
        return(
            <section className="choose-option">
                <div className="choose-option-div">
                    <p><span>Zacznij pomagać!</span><span>Oddaj niechciane rzeczy w zaufane ręce</span></p>
                    <div className="choose-option-border"></div>
                    <div className="give-or-organise">
                        <a href="#"><span>oddaj rzeczy</span></a>
                        <a href="#"><span>zorganizuj zbiórkę</span></a>
                    </div>
                </div>
            </section>
        )
    }
}

ReactDOM.render(
    <ChooseOption />,
    document.querySelector('#root')
)