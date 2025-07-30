import React, { useState } from 'react'

export default function FormDemo1() {
    const[num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const sayHello = () =>{

        console.log('Hello')

    }

    sayHello();
    
    const changeHandler = (e)=>{
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        if( fieldName === 'num1'){
            setNum1(fieldValue)
        }else{
            setNum2(fieldValue)
        }
        console.log("change Handler")
        console.log(`Addition of ${num1} and ${num2} is ${+num1 + +num2}`)
    }

    return (
    <>
        <h3> Lets learn useRef Hook </h3>

        <form className='border border-3 rounded-3 p-3 '>
            Num1:
            <input name='num1' value={num1} onChange={changeHandler}/><br/>
            Num2:
            <input name='num2' value={num2} onChange={changeHandler}/>
            <br></br>
            <button>Submit</button>
        </form>

    </>
  )
}
