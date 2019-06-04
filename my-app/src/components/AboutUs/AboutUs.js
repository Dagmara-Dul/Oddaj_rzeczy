import React, {Component} from 'react';
import ReactDOM from 'react-dom';



export default class AboutUs extends Component{
    render(){
        return(
            <section className="start-section">
                
                <LogOrSignIn />
                <MainMenu />
                <ChooseOption />
            </section>
        )
    }
}

ReactDOM.render(
    <AboutUs />,
    document.querySelector('#root')
)