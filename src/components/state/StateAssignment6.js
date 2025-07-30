import React,{useState} from 'react'

export default function StateAssignment6() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <h3>Counter: {count}</h3>
      <button className="btn btn-success me-2" onClick={increment}>
        Increment
      </button>

      <button className="btn btn-danger me-2" onClick={decrement}>
        Decrement
      </button>

      <button className="btn btn-secondary" onClick={reset}>
        Reset
      </button>
    </>
  );
}
