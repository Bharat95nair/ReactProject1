import React,{useState,useEffect} from 'react';
import client from '../../api';

export default function PostList(){

    const [posts,setUsers] = useState([]);

    async function fetchUsers(){
        try{

            let response = await client.get('posts');
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
                    {posts.map(post => {
                    return <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                    })}
                </tbody>
                </table>

        </>
    )
}