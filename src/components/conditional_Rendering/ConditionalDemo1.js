import React from 'react'

export default function ConditionalDemo1() {
    let num =5;
    let isLoggedIn = true;
    // if (num%2 == 0){
    //     return <div> {num }is Even</div>
    // }else{
    //     return <div> {num} is odd</div>
    // }


//     return (
//     // <>
//     //     <h2>{num%2 == 0 ? `${num} is Even` :`${num} is Odd`}</h2>                      {/* Ternary  operator  */}




//     // </>

    

    
//   )


    // switch(num){
    //     case 1: return <div>Monday</div>
    //     case 2: return <div>Tuesday</div>
    //     case 3: return <div>Wednesday</div>
    //     case 4: return <div>Thursday</div>
    //     case 5: return <div>Friday</div>
    //     case 6: return <div>Saturday</div>
    //     case 7: return <div>Sunday</div>
    //     default: return <div>Not a valid number</div>
    // }

    return <div>{isLoggedIn && <button className='btn btn-danger'>LogOut</button>}</div>

}
