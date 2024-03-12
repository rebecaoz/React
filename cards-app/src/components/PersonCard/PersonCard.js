import React, { Component } from 'react';
import './PersonCard.css';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state={
            age: parseInt(props.age)
        };
    }
    addAge=()=>{
        this.setState((initialValue)=>({age: (initialValue.age+1) }))
    }

    render(){
        const{firstName, lastName, age, hairColor}= this.props;
        return(
            <div className='card'>
                <div className='data'>
                    <h1>{lastName}, {firstName} </h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor} </p>
                </div>
                
                <button onClick={this.addAge}>Birthday Button for {firstName} {lastName} </button>
            </div>
        );
    }
}

export default PersonCard;