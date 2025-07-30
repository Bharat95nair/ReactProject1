import React from 'react'

export default function StateDemo1() {
//   let name = 'Virat Kohli';  // local variable
  let count = 0;             // local variable


  const increment = ()=>{
    count++;
    console.log(count);
  }
    return (
    <>
        <h2> State Demo 1</h2>
        <div>Count value is {count} </div>
        <button onClick={increment}>Increament</button>
    </>
  )
}
