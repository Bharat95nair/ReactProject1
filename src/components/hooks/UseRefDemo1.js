import React,{useRef} from 'react'

export default function UseRefDemo1() {
  
    const myRef1 = useRef('');
    const myRef2 = useRef('');

    const submitMyform = (e) =>{                // uncontrolled form
        e.preventDefault();
        const val1 = myRef1.current.value;
        const val2 = myRef2.current.value;
        console.log(`Addition of ${val1} and ${val2} is ${+val1 + +val2}`)
    }

  
    return (
    < div className='text-center col-sm-4'>
        
        <h3> Lets learn useRef Hook </h3>

        <form className='border border-3 rounded-3 p-3 ' onSubmit={submitMyform}>
            Num1:
            <input name='fname' ref={myRef1}/>
            Num2:
            <input name='lname' ref={myRef2}/>
            <br></br>
            <button>Submit</button>
        </form>
    
    </div>
  )
}


//controlled form every key up when the statevariable changes then it is controlled form 