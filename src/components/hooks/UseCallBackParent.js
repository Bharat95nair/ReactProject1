import React, { useCallback, useState } from 'react'
import UseCallbackChild from './UseCallbackChild'

export default function UseCallbackParent() {
    const [count, setCount] = useState(0);
    const [a, setA] = useState(10);

    const increment = () => {
        setCount(count + 1);
    }
    // const f1 = () => {  // f1 variable gats a new function
    //     console.log('I am F1...');
    // }
    const f1 = useCallback(()=>{console.log('I am F1...')},[]);
    
    return <>
        <div className='border border-2 m-2 p-2'>
            <h3>I am parent component</h3>
            <div>Count value is: {count}</div>
            <div>a is {a}</div>
            <button onClick={increment}>Increment</button>
            <button className='mx-2' onClick={() => setA(15)}>Update A value</button>
            <hr />
            <UseCallbackChild a={a} f1={f1} />
        </div >
    </>
}