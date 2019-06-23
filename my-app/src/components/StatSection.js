import React, {Component} from 'react';
import ReactDOM from 'react-dom';



export default class StatSection extends Component{
    render(){
        return(
            <section className="stat-section">
                
                <div className="stat-section-sacks stat">
                    <p className="sack-number stat-nr">10</p>
                    <span>oddanych worków</span>
                    <p className="stat-section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel enim sapien. Ut posuere, neque vitae.</p>
                </div>
                <div className="stat-section-organs stat">
                <p className="organ-number stat-nr">5</p>
                    <span>wspartych organizacji</span>
                    <p className="stat-section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel enim sapien. Ut posuere, neque vitae.</p>
                </div>
                <div className="stat-section-actions stat">
                <p className="sack-number stat-nr">7</p>
                    <span>zorganizowanych zbiórek</span>
                    <p className="stat-section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel enim sapien. Ut posuere, neque vitae.</p>
                </div>
            </section>
        )
    }
}

