import React,{useState,useEffect} from 'react';
import axios from 'axios';


export default function HttpDemo4(){

    const [users,setUsers] = useState([]);

    async function fetchUsers(){
        try{

            let response = await axios.get('https://jsonplaceholder.typicode.com/users');  
            setUsers([...response.data]);


        } catch(err){
            console.log('Something went wrong...',err);
        }

    }

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