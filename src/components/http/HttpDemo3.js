import React, { useEffect, useState } from "react";


export default function HttpDemo3(){

    const [users,setUsers] = useState([]);

    async function fetchUsers(){
        try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users');   // await here till the response is received from the server
        let finalResponse = await response.json();
        setUsers([...finalResponse]);
        } catch(err){
            console.log('Something went wrong...',err);
        }

    }
// await : 
// promise : eventual result of an asynchronous operation 
    useEffect(()=>{
        fetchUsers()
    },[]);

    return(

        <>
            <h3>Fetch data from API using javascript's fetch() and async-await</h3>
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