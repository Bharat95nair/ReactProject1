import { useState } from 'react'
import CounterHOC from '../HOC/CounterHOC';



function CounterDemo2(props) {
    // const [count, setCount] = useState(0);
    // const increment = () => {
    //     setCount(count + 1);
    // }
    return(
      <div className='border border-5 rounded-3 p-2 text-center'>
        
        <h2>Counter example using state</h2>
        <div>Count value is: {props.count}</div>
        <button onClick={props.increment}>Increment</button>
    
      </div>

    ) 
}

export default CounterHOC(CounterDemo2);