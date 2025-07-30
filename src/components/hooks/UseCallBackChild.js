
import React from 'react'

function UseCallbackChild(props) {
    return <>
        {console.log('child rendered...')}
        <h3>Use callback child</h3>
        <div>a is {props.a}</div>
    </>
}
export default React.memo(UseCallbackChild);
