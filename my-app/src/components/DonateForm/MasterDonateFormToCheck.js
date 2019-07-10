import React, {Component} from 'react';
// import {Container, Row, Col} from 'react-bootstrap';

export default class MasterForm extends Component{
    constructor(props){
        super(props)

        this.state={
            form:[
                 {
                    name: "clothesToWear",
                    type: "checkbox",
                    // value: true,
                    checked: true,
                    label: "ubrania, które nadają się do ponownego użycia",
                    step: 1,
        
                },
                {
                    name: "clothesToBin",
                    type: "checkbox",
                    checked: false,
                    // value: false,
                    label: "ubrania, do wyrzucenia",
                    step: 1,
                },
                {
                    name: "toys",
                    type: "checkbox",
                    checked: false,
                    // value: false,
                    label: "zabawki",
                    step: 1, 
                },
            ],
            
        }

        
    }
    
    handleOnChange = (name, value) =>{ 
     
        const item = this.state.form.find((input) => input.name === name );
         this.setState({     
            [name]:value
        })        
    }

    componentDidUpdate = () =>{console.log(this.state.form[1].checked)}

    render(){
        return(
            <>
                <h2>form</h2>
                <p>Step {this.state.currentStep }</p>
                <form onSubmit={this.handleSubmit} >
                    <Step1
                        form = {this.state.form}                  
                        handleOnChange={ this.handleOnChange}
                        />
                </form>
            </>
        )
    }
    
}

 class Step1  extends Component{
    getInputs(){
        const inputs = this.props.form.filter(input => input.step === 1) 
        return inputs.map(input => {      
          return  (
            <>
                <input 
                    type={input.type}  
                    name={input.name} 
                    
                    value={input.value}
                    // checked={input.value}
                    // checked={input.checked} 
                    onChange={(event)=> { 
                        let value = event.target.type ==="checkbox" ? event.target.checked : event.target.value;
                        return this.props.handleOnChange(input.name, value)}} 
                />
                {input.label} <br />
            </>
        )
            }
        )

    }
    render(){
       
        return(
            <>
            
                <div className="form-group"> 
                    <legend>Zaznacz co chcesz oddać</legend>
                    {this.getInputs()}
                    
                </div>
            </>

        )
    }
}