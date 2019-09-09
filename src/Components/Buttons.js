import React,{Component}from 'react';


class Button extends Component{
    // functio to get the value and if its not a number it returns false
        isOperator = val=> {
            return !isNaN(val) || val === "." || val === "=";
        };
  render(){
    return(
       
      <div
    //   when the number button is clicked run the functio
       onClick = {()=> this.props.handleClick(this.props.children)} 
       // if button is number change class name to operator
        className = "text-center button">
          {/* button */}
          {this.props.children}
      </div>
    );
  }
}
export default Button;
