import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

 class MasterForm extends Component{
    constructor(props){
        super(props)

        this.state={
            currentStep:1,
            isClothesToWear: false,
            isClothesToBin: false,
            isToys: false,
            isBooks: false,
            isOther: false,
            numberOfSacks: 0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClothesToWearChange = this.handleClothesToWearChange.bind(this);
    }
    // handleClothesToWearChange (e){
    //     const { }
    // }
    handleChange(event) {
        const { name, checked } = event.target
        this.setState({
            [name]: checked
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
       //wysyłanie danych na json server
    }

    render(){
        return(
            <>
                <h2>form</h2>
                <p>Step {this.state.currentStep }</p>

                <form onSubmit={this.handleSubmit} >
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={ this.handleChange}
                        isClothesToWear={this.isClothesToWear} 
                        isClothesToBin = { this.isClothesToBin}
                        isToys = {this.isToys}
                        isBooks = {this.isBooks}
                        isOther = {this.isOther}

                        />

                    <Step2
                        currentStep={this.state.currentStep}
                        />
                </form>
            </>
        )
    }
    
}

 class Step1  extends Component{
    
    render(){
        if (this.props.currentStep !== 1) {
            return null
        }
        return(
            <>
                { <section className="form1-instruction">
                    <h3>Ważne!</h3>
                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </section> }
                { <section className="form1-choose">
                    <p>Krok 1/4</p>
                    <form id="form-donate">

                    </form>
                </section> }

                <div className="form-group"> 
                    <legend>Zaznacz co chcesz oddać</legend>
                    <input type="checkbox"  name="clothesToWear" checked={this.state.isClothesToWear} onChange={this.props.handleClothesToWearChange} />ubrania, które nadają się do ponownego użycia
                    <input type="checkbox"  name="clothesToBin" checked={this.state.isClothesToBin} onChange={this.props.handleChange}/>ubrania, do wyrzucenia
                    <input type="checkbox"  name="toys" checked={this.state.isToys} onChange={this.props.handleChange} />zabawki
                    <input type="checkbox"  name="books" checked={this.state.isBooks} onChange={this.props.handleChange} />książki
                    <input type="checkbox"  name="other" checked={this.state.isOther} onChange={this.props.handleChange} />inne
                </div>
            </>

        )
    }
}

class Step2 extends Component{
    handleNumberChange = (e) => {
        let valueFromForm = e.target.value;
        this.setState({numberOfSacks: valueFromForm})
    }
    render(){
        if (this.props.currentStep !== 2){
            return null
        }
        return(
            <>
                <div className="form-group">
                Podaj liczbę 60 l worków, w które spakowałeś/aś rzeczy:
                    <label>
                        Liczba 60 l worków:
                        <select value={this.state.number} onChange={this.handleNumberChange}>
                            <option value="0">1</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </label>
                </div>
            </>
        )
    }
}