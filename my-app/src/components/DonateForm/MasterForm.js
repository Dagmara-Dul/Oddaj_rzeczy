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

export default class MasterForm extends Component{
    constructor(props){
        super(props)

        this.state={
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
    
    handleOnChange = (name, value,i) =>{ //zakładm, że dobrze jest napisane - zobaczymy jak jest przy wysyłaniu danych na json server
        // const { name, value } = event.target
        
        

        const item = this.state.form.find((input) => input.name === name );
        // value = target.type ==="checkbox" ? target.checked : target.value;
        // let form = this.state.form;//to jest jako undefined
        console.log(item, name, value)
        
        
        // const stateCopy = Object.assign({}, this.state);
        // stateCopy.form = stateCopy.form.slice();
        // console.log("stateCopy tutaj", stateCopy);
        // stateCopy.form.value = Object.assign({}, stateCopy.form.value);
        // stateCopy.form.value = value;
        // this.setState(stateCopy);


    
            
            
            // this.setState(state => {
            // const form = state.form.map((elem) => {
            // if (elem.id === i) {
            // return {...form, value:item.value+1}
            // } else {
            // return elem;
            // }
            // });
            
            // return {
            // form,
            // };
            // });
            

        // if(value ==="false")


        //  this.setState({
        //     [form.name]: value // - zakomentowałam i dalej działa - nie mam pojecia dlaczego
        //     // [name]:value
        // })



        // console.log(item, name,value);
        
        // this.state.form.map((element) => {
        //     return (
        //         // console.log(element)
        //         this.setState ({
        //             [element.name]: value
        //         })
        //         )});
        

        
    }


  



    componentDidUpdate = () =>{console.log(this.state.form[0].value)}

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
                        form = {this.state.form}
                        // currentStep={this.state.currentStep}
                        handleOnChange={ this.handleOnChange}
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
        console.log(input)
        
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
                            {/* <input type="checkbox"  name="clothesToWear" checked={this.state.isClothesToWear} onChange={this.props.handleClothesToWearChange} />ubrania, które nadają się do ponownego użycia
                            <input type="checkbox"  name="clothesToBin" checked={this.state.isClothesToBin} onChange={this.props.handleChange}/>ubrania, do wyrzucenia
                            <input type="checkbox"  name="toys" checked={this.state.isToys} onChange={this.props.handleChange} />zabawki
                            <input type="checkbox"  name="books" checked={this.state.isBooks} onChange={this.props.handleChange} />książki
                            <input type="checkbox"  name="other" checked={this.state.isOther} onChange={this.props.handleChange} />inne */}
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