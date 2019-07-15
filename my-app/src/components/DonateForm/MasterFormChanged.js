import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class MasterForm extends Component{
    constructor(props){
        super(props)

        this.state={
            form:[
                 {
                    name: "clothesToWear",
                    type: "checkbox",
                    // value: false,
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
                {
                    name: "books",
                    type: "checkbox",
                    checked: false,
                    // value: false,
                    label: "książki",
                    step: 1,
                },
                {   name: "other",
                    type: "checkbox",
                    checked: false,
                    // value: true,
                    label: "inne",
                    step: 1,
                },
                

            ],
            
        }

        
    }
    
    // handleChange(event) {
    //     const { name, checked } = event.target
    //     this.setState({
    //         [name]: checked
    //     })
    // }
    // handleOnChecked = () => {

    // }
    
    handleOnChange = (event) =>{ 
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.name;
        
        console.log(target, value, name);

        // this.setState({
        //     [name]:value
        // })
    }


  



    // componentDidUpdate = () =>{console.log(this.state.form[0].value)} //to będzie działać dopiero jak np. zienię stan

    handleSubmit = (event) => {
        event.preventDefault();
        
       //wysyłanie danych na json server
    }

    render(){
        return(
            <>
                <h2>form</h2>
                <p>Step { this.state.currentStep }</p>

                <form onSubmit={ this.handleSubmit } >
                    <Step1
                        form = { this.state.form }
                        // currentStep={this.state.currentStep}
                        handleOnChange={ this.handleOnChange }
                        // isClothesToWear={this.isClothesToWear} 
                        // isClothesToBin = { this.isClothesToBin}
                        // isToys = {this.isToys}
                        // isBooks = {this.isBooks}
                        // isOther = {this.isOther}

                        />

                    {/* <Step2
                        currentStep={this.state.currentStep}
                        /> */}
                </form>
            </>
        )
    }
    
}

 class Step1  extends Component{
    getInputs(){
        const inputs = this.props.form.filter(input => input.step === 1) //wyjdą wszystkie inputy, które są w step1
        return inputs.map(input => {
        // console.log(input)
        
          return  (
            <>
                <input 
                    type={input.type}  
                    name={input.name} 

                    // value={input.value}
                    // checked={input.value}
                    checked={input.checked} 

                    // onChange={(event)=> { 
                    //     let value = event.target.type ==="checkbox" ? event.target.checked : event.target.value; //czy to tuja jest ok? Czy to coś daje? co?
                    //     return this.props.handleOnChange(input.name, value)}} 

                    onChange = { this.handleOnChange }
                />
                {input.label} <br />
            </>
        )
            }
        )

    }
    render(){
        // if (this.props.currentStep !== 1) {
        //     return null
        // }
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
                            <Link  style={{ textDecoration: 'none', color: 'white' }} to="/logged/step2">
                                <button onClick={this.handleStepChange}>dalej</button>
                            </ Link>
                        </div>
                    </form>
                </section> 
            </>

        )
    }
}

