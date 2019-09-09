import React,{Component}from 'react';
import './App.css';
import "./bootstrap-4.0.0-dist/css/bootstrap.css";
import Button from "./Components/Buttons";
import Input from "./Components/Input";
import Clear from "./Components/Clear";
class App extends Component{
  // constructor function with states that the input isadded to 
  constructor(props){
    super(props);
    this.state = {
        input: "",
        previousNumber: "",
        currentNumber: "",
        operator: "",
    };
  }
  // add the values of numbers in the button the input
  addToInput = val =>{
     this.setState({input: this.state.input + val});
  };

  addZeroInput = val =>{
    // if this state which is the input is empty dont addzero but if its not empty add zero
    if (this.state.input !== ""){
      this.setState({input: this.state.input +val})
    }
    
  }
  // if theres nothing in state dont add decimal but if theres something add decimal
  // only allow user to add one decimal
  addDecimal = val=>{
    if (this.state.input.indexOf(".") === -1){
      this.setState({input: this.state.input +val})
    }
    
  }
  clearInput = ()=>{
    this.setState({input: ""})
  }

  add = () => {
    // add number wich is inputed first as previous number
    this.setState({previousNumber : this.state.input})
    // empty the input section
    this.setState({input: ""});
    this.setState({operator:"plus"})
  }
  minus = () => {
    // add number wich is inputed first as previous number
    this.setState({previousNumber : this.state.input});
    this.setState({input: ""});
    this.setState({operator : "minus"})
  }
  divide = ()=>{
    this.setState({previousNumber : this.state.input});
    this.setState({input: ""});
    this.setState({operator : "divide"});
  }
  multiply = ()=> {
    this.setState({previousNumber : this.state.input});
    this.setState({input:""});
    this.setState({operator : "multiply"})
  }
  equal = ()=>{
    this.setState({currentNumber : this.state.input});
    // plus sign added function to show result
    if (this.state.operator === "plus"){
      this.setState({
        input: parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber)
      })
    }
    
    // if the user minuses
    else if (this.state.operator === "minus"){
      this.setState({
        input: parseFloat(this.state.previousNumber) - parseFloat(this.state.currentNumber)
      })
    }
    // if the user divides
    else if  (this.state.operator === "divide"){
      this.setState({
        input: parseFloat(this.state.previousNumber) / parseFloat(this.state.currentNumber)
      })
    }
    // // if the user multiplys
    else if(this.state.operator === "multiply"){
      this.setState({
        input: parseFloat(this.state.previousNumber) * parseFloat(this.state.currentNumber)
      }
      )
    }
    // the user multiplys does an operator more than once 
    else{
      this.setState({
        input: "Add numbers first"
      })
    }
  }
  render(){
    return(
      <div className = "App">
          
        <div className ="calculator">
          <div className = "row">
            {/* show the number clicked on */}
            <Input>{this.state.input}</Input>
          </div>
        <div className = "row">
          {/* Buttons with dom function to call them */}
            <Button handleClick = {this.addToInput}>7</Button>
            <Button handleClick = {this.addToInput}>8</Button>
            <Button handleClick = {this.addToInput}>9</Button>
            <Button handleClick = {this.divide}>/</Button>
          </div>
          <div className = "row">
            <Button handleClick = {this.addToInput}>4</Button>
            <Button handleClick = {this.addToInput}>5</Button>
            <Button handleClick = {this.addToInput}>6</Button>
            <Button handleClick = {this.multiply}>x</Button>
          </div>
          <div className = "row">
            <Button handleClick = {this.addToInput}>1</Button>
            <Button handleClick = {this.addToInput}>2</Button>
            <Button handleClick = {this.addToInput}>3</Button>
            <Button handleClick = {this.add}>+</Button>
          </div>
          <div className = "row">
            <Button handleClick = {this.addDecimal} >.</Button>
            <Button handleClick = {this.addZeroInput}>0</Button>
            <Button handleClick = {this.equal}>=</Button>
            <Button handleClick = {this.minus}>-</Button>
          </div>
          <div className = "row">
            <Clear handleClear = {this.clearInput}>Clear</Clear>
          </div>
        </div>
       

      </div>
    );
  }
}
export default App;
