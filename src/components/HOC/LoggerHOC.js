import React from 'react'
import { useEffect } from 'react';

const LoggerHOC = (InputComponent) => {
    const EnhancedComponent = (props) => {
        useEffect(() => {
            console.log(`${InputComponent.name} Mounted`);
            console.log(`Props : ${InputComponent.props}`);
            return () => {
                console.log(`${InputComponent.name} UnMounted`);
            }
        }, []);
        useEffect(() => {
            console.log(`${InputComponent.name} Updated`,props);
        }, [props]);
        console.log(`${InputComponent.name} Renderred: `, props);
        return <InputComponent {...props} />
    }
    return EnhancedComponent;
}
export default LoggerHOC;