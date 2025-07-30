import React, { useEffect, useState } from "react";


export default function HttpDemo2(){

    const [users,setUsers] = useState([]);

    function fetchUsers(){
        fetch('https://jsonplaceholder.typicode.com/users').then(
            (response)=>{
                response.json().then(finalResponse =>{
                    setUsers([...finalResponse]);
                })
            }
        )
        
    }
// promise : eventual result of an asynchronous operation 
    useEffect(()=>{
        fetchUsers()
    },[]);

    return(

        <>
            <h3>Fetch data from API using javascript's fetch()</h3>
            <table className='table table-bordered table striped mt-2'>
                <tbody>
                    {users.map(user => {
                    return <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                          </tr>
                    })}
                </tbody>
                </table>

        </>
    )
}