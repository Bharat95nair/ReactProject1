import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyErrorBoundary from '../errorBoundary/MyErrorBoundary';


export default function Aboutus() {
    const navigate = useNavigate();

    // const contextInfo = useContext(contextData);

    const doSomethingAndNavigate = () => {
        console.log('Execute Logic here...')
        navigate('/home');
    }
    return <>
        <h3 className='text-center'>This is Aboutus Component</h3>
        <hr />
        <a href='home' className='mx-2'>Home Page</a>
        <Link to='home' className='mx-2'>Home Page</Link>
        <button onClick={doSomethingAndNavigate}>Click Me</button>
        <hr />
        {/* <MyErrorBoundary>
            <BuddyCounter />
        </MyErrorBoundary> */}
        <hr/>
        {/* <div>
                Current user: {contextInfo.loggedInUser} | Theme: {contextInfo.currentTheme} | Language: {contextInfo.language}
        </div> */}


    </>
}