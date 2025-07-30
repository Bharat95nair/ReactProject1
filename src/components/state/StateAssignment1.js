import React, { useState } from 'react';

export default function StateAssignment1() {
    const [flag, setFlag] = useState(true);

    const toggleFlag = () => {
        setFlag(!flag);
    };

    return (
        <>
            {flag ? (
                <h1>Hello, Good Morning</h1>
            ) : null}

            <button className='btn btn-primary' onClick={toggleFlag}>
                Show/Hide
            </button>
        </>
    );
}