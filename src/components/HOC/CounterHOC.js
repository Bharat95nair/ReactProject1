import React, { useState,useEffect, useRef} from 'react'

const CounterHOC = (InputComponent)=>{
    const EnhancedComponent = (props)=>{

        const [count,setCount] = useState(0);
    
        const increment = ()=>{
            setCount(count+1);
        }
        const isFirstRender = useRef(true);

        useEffect(()=>{
                    console.log(`${InputComponent.name} Mounted`);
                    return ()=>{
                        console.log(`${InputComponent.name} UnMounted`);
                    }
                },[]);
        useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        } else {
            console.log(`${InputComponent.name} Updated`);
        }
        });
        return <InputComponent count={count} increment={increment}/>
    }
    
    return EnhancedComponent;
}


export default CounterHOC;
