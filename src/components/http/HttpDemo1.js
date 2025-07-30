import React, { useEffect, useState } from "react";


export default function HttpDemo1(){

    const [users,setUsers] = useState([]);

    function fetchUsers(){
        let userPromise = fetch('https://jsonplaceholder.typicode.com/users');
        userPromise.then(
            (response)=>{
                console.log(response);
                let responsePromise = response.json();
                responsePromise.then(
                    (finalData) =>{
                        console.log(finalData)
                        setUsers([...finalData])
                    },
                    (err)=>{
                        console.log(err)
                    }
                )                
            },
            (error) =>{
                console.log(error);
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