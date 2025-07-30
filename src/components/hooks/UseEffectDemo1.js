import React, { useEffect, useState } from 'react'

export default function UseEffectDemo1() {
    const [count, setCount] = useState(0);
    const [a, setA] = useState(10);
    const [b, setB] = useState(20);
    const [c, setC] = useState(30);

    const increment = () => {
        setCount(count + 1);
    }
    useEffect(
        () => {
            console.log('useEffect Called...');

            return ()=>{
                console.log('component will unmount')
            }
        },[count]
    );
    return <div className='border border-5 rounded-3 p-2 text-center'>
        {console.log('Render...')}
        <h2>Counter example using state</h2>
        <div>Count value is: {count}</div>
        <div>A value is: {a}</div>
        <div>B value is: {b}</div>
        <div>C value is: {c}</div>
        <button onClick={increment}>Increment</button>
        <button className='mx-2' onClick={() => setA(15)}>Update A value</button>
        <button className='mx-2' onClick={() => setB(25)}>Update B value</button>
        <button onClick={() => setC(35)}>Update C value</button>
    </div>
}

/// useEffect has only one callBack function it will called everytime any data updates and on load 
///  useEffect has  callBack function and array /empty array it will be called only on load and when the array data changes