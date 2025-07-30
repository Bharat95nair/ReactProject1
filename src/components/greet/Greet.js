import React from 'react';



// export default function Greet(props){
//     return <h2>Hello {props.name}, {props.msg} </h2>
// }

/// parent component can have 10 state variable but all are not passing into a child component ,
//  react.memo() helps the child component to render only when the props passed to it changes otherwise it doesnt renders

 function Greet({name,msg='GM'}){
    return <>
     {/* <h2>Hello {name}, {msg}, </h2> */}
                {/* {children} */}
                {console.log("Greet render....")}
                <h2> Hello {name} ,{msg}</h2>
            </>
}

export default React.memo(Greet);

