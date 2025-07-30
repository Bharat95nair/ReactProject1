//rcc
import React, { Component,PureComponent } from 'react'

export default class PureDemo1 extends PureComponent {              /// this extends component class 
  ///rconst -- to create a constructor
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Virat'
      }
    }

    updateName = ()=>{
        this.setState({name:"Virat"});
    }

    render() {
        console.log("render called")
        return (
        <>
            <h3>This is Pure component Example</h3>
            <div> Name is :{this.state.name}</div>
            <button onClick={this.updateName}>Update Name</button>

        </>
        )
  }
}
