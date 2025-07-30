import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { UserContext } from '../../context/UserContext';

export default function Home() {
  const {theme,toggleTheme} = useContext(ThemeContext);
  const {user,setLoggedInUser} = useContext(UserContext);
  return (
    <>
         <h3 className='text-center'>This is Home Component</h3>
        <div style={{ padding: 20, background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
            <h2>Welcome, {user.name}</h2>
            <h2>Current Theme : {theme}</h2>
            <button onClick={() => setLoggedInUser("John Doe")}>Login as John Doe</button>
            <br /><br />
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    </>
  )
}
