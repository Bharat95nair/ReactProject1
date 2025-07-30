import React,{useState} from 'react'

export default function StateAssignment5() {
  

  const [inputType, setInputType] = useState('password');

  const toggleType = () => {
    setInputType(prevType => (prevType === 'password' ? 'text' : 'password'));};
    return (
        <>
        <input
            type={inputType}
            className="form-control w-50 mb-2"
            placeholder="Enter something"
        />

        <button className="btn btn-secondary" onClick={toggleType}>
            Change
        </button>
        </>
    );

}
