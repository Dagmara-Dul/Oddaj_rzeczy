import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MainMenu from './MainMenu';
import LogOrSignIn from './LogOrSignIn';
import ChooseOption from './ChooseOption';


export default class StartSection extends Component{
    render(){
        return(
            <section className="start-section" id="start">
                
                <LogOrSignIn />
                <MainMenu isHome={true}/>
                <ChooseOption />
            </section>
        )
    }
}

