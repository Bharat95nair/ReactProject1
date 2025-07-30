
import React, { Component } from 'react'

export default class EventDemo1 extends Component {
 

  constructor(props){
    super(props)
    this.state ={
      count:0
      
    }
    this.increamet = this.increamet.bind(this);
  }
//   increment = ()=>{   // this = decided from where it is declared .. here it is pointing the object of EventDemo1 hence this = EventDemo1
//     console.log(this)
//     this.setState({count:this.state.count + 1})
//   }



  increamet(){
    // console.log(this)
    this.setState({count:this.state.count + 1})
  }


  render() {
    return (
      <div className='border border-5 rounded-3 p-2 text-center'>
        <h3>Counter Example using state </h3>
        <h4>Count : {this.state.count} </h4>
        <button onClick={this.increamet}>Increament</button>
      </div>

    )
  }
}


/// normal function the this= undefined
// 1. use arrow function
// 2. use bind() to explicitly set  this = EventDemo1
