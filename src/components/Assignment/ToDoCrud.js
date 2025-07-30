import React,{useState} from 'react'

export default function ToDoCrud() {
    
    const[todos,setTodos] = useState([]);
    const[newTodo,setNewTodo] =useState('');

    const addTodo=()=>{
        if(newTodo.trim()==='')
            return;
        const nextId = todos.length? Math.max(...todos.map(todo=>todo.id))+1:1;

        const newItem ={
            id:nextId,
            text:newTodo,
            completed:false
        }
        setTodos([...todos,newItem]);
        setNewTodo('');

    };

    const toggleCompletion = (id) =>{
        setTodos(todos.map(todo=>
            todo.id === id?{...todo,completed:!todo.completed}:todo
        ));

    };

    const deleteTodo = (id)=>{
        setTodos(todos.filter(todo=>todo.id!== id));
    };

    const completedCount = todos.filter(todo => todo.completed).length;


  return (
    <>
        <div className='container mt-5'>
            
            <h3 className='mb-3'> Todo list </h3>
            <div className='input-group'>
               
                <input type='text' className='form-control' placeholder='Enter new task' value={newTodo} onChange={(evt)=>setNewTodo(evt.target.value)}/>
                <button className='btn btn-primary' onClick={addTodo}>Add</button> 

            </div>


        

            <ul className='list-group'>
                {todos.map(todo=>(
                    <li key={todo.id} className='list-group-item d-flex justify-content-between  align-items-center'>
                        <div className='d-flex align-items-center'>

                            <input type='checkbox' className='form-check-input me-2' checked={todo.completed} onChange={()=>toggleCompletion(todo.id)}/>
                            <span style={{textDecoration:todo.completed?'line-through':'none'}}> {todo.text} </span>

                        </div>

                        <button className='btn btn-sm btn-danger' onClick={()=>deleteTodo(todo.id)}>Delete</button>

                    </li>
                ))}

            </ul>

            <p className='mt-3'>
                {completedCount} out of {todos.length} task completed
            </p>

        </div>

    </>
  )
}
