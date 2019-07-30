import React, {Component} from 'react';
// import {Container, Row, Col} from 'react-bootstrap';
import {
    HashRouter,
    Route,
    Link,
    Redirect,
    Switch,
    NavLink,
  } from 'react-router-dom';

export default class MasterForm extends Component {
constructor(props) {
    super(props);
    this.state = {
        step: 1,
        form:[
            {
                name: "clothesToWear",
                type: "checkbox",
                value: true,
                // checked: true,
                label: "ubrania, które nadają się do ponownego użycia",
                step: 1,

            },
            {
                name: "clothesToBin",
                type: "checkbox",
                // checked: false,
                value: false,
                label: "ubrania, do wyrzucenia",
                step: 1,
            },
            {
                name: "toys",
                type: "checkbox",
                // checked: false,
                value: false,
                label: "zabawki",
                step: 1,
            },
            {
                name: "books",
                type: "checkbox",
                // checked: false,
                value: false,
                label: "książki",
                step: 1,
            },
            {   name: "other",
                type: "checkbox",
                // checked: false,
                value: true,
                label: "inne",
                step: 1,
            },
            {
                name: "bags",
                type: "select",
                value: null,
                label: "Wybierz worki",
                step: 2,
            },
        ],
    }
}

        

    handleOnChange = (name, value) => {
    console.log(name, value)
        const item = this.state.form.find((input) => input.name === name );
        item.value = value;
        this.setState(prevState => ({
            form: [...prevState.form]
        }))
    };

    handleStepChange = step => this.setState({ step })

    handleSubmit = (event) => {
        event.preventDefault();
        
       console.log(this.state.form)
    }

    render(){
        const { step } = this.state;
        return(
            <>
                <h2>form</h2>
                <p>Step {this.state.step }</p>

                <form onSubmit={this.handleSubmit} >
                    {(() => {
                        switch(step) {
                            case 1:
                                return (
                                    <Step1
                                        form = {this.state.form}
                                        handleOnChange={ this.handleOnChange}
                                        handleStepChange={this.handleStepChange}
                                    />
                                );
                            case 2:
                                return (
                                    <Step2
                                        form = {this.state.form}
                                        handleOnChange={ this.handleOnChange}
                                        handleStepChange={this.handleStepChange}
                                    />
                                );
                            case 3:
                                return <div />;
                            default:
                                return null;
                        }
                    })()}

                </form>
            </>
        )
    }
    
}

 class Step1  extends Component{
    getInputs(){
        const inputs = this.props.form.filter(input => input.step === 1)
        return inputs.map(input => (
            <>
                <input 
                    type={input.type}  
                    name={input.name} 
                    checked={input.value}
                    onChange={(event)=> this.props.handleOnChange(input.name, event.target.checked)}
                />
                {input.label} <br />
            </>
        ))
    }

     handleStepChange = () => this.props.handleStepChange(2);

    render(){
        return(
            <>
                <section className="form1-instruction">
                    <h3>Ważne!</h3>
                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </section> 
                <section className="form1-choose">
                    <p>Krok 1/4</p>
                    <form id="form-donate" onSubmit={this.handleSubmit}>
                        <div className="form-group"> 
                            <legend>Zaznacz co chcesz oddać</legend>
                            {this.getInputs()}
                        </div>
                        <div>
                            <button onClick={this.handleStepChange}>Dalej</button>
                        </div>
                    </form>
                </section> 
            </>

        )
    }
}

class Step2 extends Component{
    state = {
        control: this.props.form.find(el => el.step === 2)
    }

    handleNumberChange = (e) => this.props.handleOnChange(this.state.control.name, e.target.value);
    prevStep = () => this.props.handleStepChange(1);
    nextStep = () => this.props.handleStepChange(3);

    render(){
        const { control } = this.state;
        console.log(control)
        return(
            <>
                <div className="form-group">
                Podaj liczbę 60 l worków, w które spakowałeś/aś rzeczy:
                    <label>
                        { control.label}
                        <select value={control.value} onChange={this.handleNumberChange}>
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
                <div>
                    <button onClick={this.prevStep}>Prev</button>
                    <button onClick={this.nextStep}>Next</button>
                    <button type='submit'>Next</button>
                </div>
            </>
        )
    }
}