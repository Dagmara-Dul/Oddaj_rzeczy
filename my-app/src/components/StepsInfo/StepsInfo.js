import React, {Component} from 'react';
import ReactDOM from 'react-dom';



export default class StepsInfo extends Component{
    render(){
        return(
            <section className="steps-info-section" id="what-is-it-about">
                
                <div className="steps-info-section-package container">
                    <p>Wystarczą 4 proste kroki</p>
                    <div className="steps-info-image"></div>
                    <div className="steps-info-instructions">
                        <div className="steps-info-single-instruction">
                            <i class="fas fa-hands"></i>
                            <p className="quick-info">wybierz rzeczy</p>
                            <p className='steps-more-info'>ubrania,zabawki,sprzęt i inne</p>
                            {/* <p className={classNames('steps-more-info')}>ubrania,zabawki,sprzęt i inne</p> */}
                        </div>
                        <div className="steps-info-single-instruction">
                            <i class="fas fa-arrow-down"></i>
                            <p className="quick-info">spakuj je</p>
                            <p className="steps-more-info">skorzystaj z worków na śmieci</p>
                        </div>
                        <div className="steps-info-single-instruction">
                            <i class="fas fa-binoculars"></i>
                            <p className="quick-info">Zdecyduj komu chcesz pomóc</p>
                            <p className="steps-more-info">wybierz zaufane miejsce</p>
                        </div>
                        <div className="steps-info-single-instruction">
                            <i class="fas fa-sync"></i>
                            <p className="quick-info">Zamów kuriera</p>
                            <p className="steps-more-info">kurier przyjedzie w dogodnym terminie</p>
                        </div>
                    </div>
                    <a className="steps-sign-in" href="#"><span>Załóż konto</span></a>
                </div>
            </section>
        )
    }
}

ReactDOM.render(
    <StepsInfo/>,
    document.querySelector('#root')
)