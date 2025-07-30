import React,{useState,useEffect} from 'react';
import client from '../../api';

export default function Todo(){

    const [todos,setUsers] = useState([]);

    async function fetchUsers(){
        try{

            let response = await client.get('todos');
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
                    {todos.map(todo => {
                    return <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed.toString()}</td>
                    </tr>
                    })}
                </tbody>
                </table>

        </>
    )
}