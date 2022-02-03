import React from "react";

class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count: 0
        }
    }
    // Function for increment 
   incrementFun(){
       this.setState({count:this.state.count+1})
   }
//    Function for decrement
   decrementFun(){
       this.setState({count:this.state.count-1})
   }
//    Function for Reset
   resetFun(){
     this.setState({count:0})
   }
//    Increment counter
incrementCounter(){
    this.setState({currentCount: this.state.count+1}, 1000);
}
    render(){
        return(
            <>
      <button onClick={()=>this.incrementFun()}>Add</button>
      <span>{this.state.count}</span>
      <button onClick={()=>this.decrementFun()}>Subtract</button> 
      <button onClick={()=>this.resetFun()}>Reset</button>
            </>
        )
    }
}
export default Counter;