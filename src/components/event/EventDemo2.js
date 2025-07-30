import React from 'react'

export default function EventDemo2() {
  const f1 = ()=>{
        console.log('I am F1')
    }

    const add =(a,b) =>{
        console.log(`Addition of ${a} & ${b} is ${a+b}`)
    }
  
 return (
    <>
        <h3> This is Event demo -2 Component </h3>
        <button onClick={f1} className='btn btn-primary'>Click Me -f1</button>
        <button onClick={()=>add(10,20)} className='btn btn-success mx-2'>Add</button>
    </>
  )
}
