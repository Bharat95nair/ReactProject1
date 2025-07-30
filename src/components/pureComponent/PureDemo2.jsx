import React,{useState} from 'react'


//by default every functional component is pure component 
export default function PureDemo2() {
  //using  useState method 
  const [name,setName] = useState('virat');

  const updateName = () =>{
    setName('sachin');
  };

    return (
    <>
        {console.log("Render..")}
        <h3>Pure component Example</h3>
        <div>Name is :{name}</div>
        <button onClick={updateName}>Update Name</button>
    </>
  )
}
