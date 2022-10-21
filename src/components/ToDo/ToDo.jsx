import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeTodo } from '../../toolkit/slices/todo.slice';

const ToDo = ({todo}) =>{
    const dispatch = useDispatch()
    return(
        <div className="flex justify-center items-center w-full flex-row justify-center items-center mb-2 w-full bg-gray-200 p-6">
          <div>
            <h1 className="text-3xl">{todo.title}</h1>
            <p className='text-lg'>{todo.description}</p>
          </div>
          <button className='ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
          <Link to={"/update/"+todo.id} className='ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Update</Link>
        </div>
        );
    }

export default ToDo;