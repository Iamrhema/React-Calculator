import React,{Component}from 'react';

class Input extends Component{
   
  render(){
    return(
        <div className = "inputWrapper">
           <div className ="input text-center">
        {/* numbers and results show */}
         {this.props.children}
      </div>
        </div>
    );
  }
}
export default Input;
