import React,{Component}from 'react';

class Clear extends Component{
   
  render(){
    return(
        
      <div className ="clear-btn text-ceneter"
    //   adding clear button function to be called by the handle clera in App js
      onClick = {()=> this.props.handleClear()}>
          {/* content in the clear component in app js */}
         {this.props.children}
      </div>
    );
  }
}
export default Clear;
