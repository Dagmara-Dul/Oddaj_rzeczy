import React, {Component} from 'react';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentStep: 1,
            isClothesToWear: false,
            isClothesToBin: false,
            isToys: false,
            isBooks: false,
            isOther: false,

            numberOfSacks: 0,
        };
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange (event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log("test submit");
        
        const donation = {
            numberOfSacks: this.state.numberOfSacks,
            isClothesToWear: this.state.isClothesToWear,
            isClothesToBin: this.state.isClothesToBin,
            isToys: this.state.isToys,
            isBooks: this.state.isBooks,
            isOther: this.state.isOther,
            
        }

        fetch(`${window.location.protocol}//${window.location.hostname}:3001/donation`,{
            headers:{
                'Content-Type':'application/json'
            },
            method:'POST',
            body:JSON.stringify(donation)
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log('koniec post', resp)
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                {/* Step1 */}
                <div className="step-one">
                    <legend>Zaznacz co chcesz oddać</legend>
                    <label> 
                        
                        <input type="checkbox"  name="isClothesToWear" checked={this.state.isClothesToWear} onChange={this.handleInputChange} />
                        ubrania, które nadają się do ponownego użycia 
                    </label>
                    <br />
                    <label>
                        
                        <input type="checkbox"  name="isClothesToBin" checked={this.state.isClothesToBin} onChange={this.handleInputChange}/>
                        ubrania, do wyrzucenia
                    </label>
                    < br />
                    <label>
                        
                        <input type="checkbox"  name="isToys" checked={this.state.isToys} onChange={this.handleInputChange}/>
                        zabawki
                    </label>
                    < br />
                    <label>
                    
                        <input type="checkbox"  name="isBooks" checked={this.state.isBooks} onChange={this.handleInputChange} />
                        książki
                    </label>
                    < br />
                    <label>
                        
                        <input type="checkbox"  name="isOther" checked={this.state.isOther} onChange={this.handleInputChange}/>
                        inne
                    </label>
                </div>

                {/* Step2 */}
                <div className="step-two">
                    <legend>Podaj liczbę 60 l worków, w które spakowałeś/aś rzeczy: </legend>
                        <label>
                            Liczba 60 l worków:
                            <select name="numberOfSacks" value={this.state.numberOfSacks} onChange={this.handleInputChange}>
                                <option value="0">0</option>
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
                <button type="submit">zatwierdź</button>
            </form>
        )
    }
}



                    
                    
                    
                    