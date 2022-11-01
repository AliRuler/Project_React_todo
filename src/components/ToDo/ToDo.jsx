import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeTodo } from '../../toolkit/slices/todo.slice';
import './todo.css'
const ToDo = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDragStart = (e) => {
    e.dataTransfer.setData("id", todo.id);
    e.dataTransfer.setData("startDate", todo.startDate);
  };
  const [remTime, setremTime] = useState(todo.startDate.split(",")[1]);
  return (

    <div draggable onDragStart={handleDragStart} >
      <div className="border-2 border-blue-400 m-2">
        <div className='m-4'>
          <div className='flex flex-row justify-around w-full'>
            <label className='text-sm text-gray-600'>Time start: </label>
            <p className='text-sm text-blue-400'>{todo.startDate.split(",")[1]}</p>
          </div>
          <div className='flex flex-row justify-around w-full'>
            <label className='text-sm text-gray-600'>Time end: </label>
            <p className='text-sm text-blue-400'>{todo.endDate.split(",")[1]}</p>
          </div>
        </div>
        <div className="flex flex-col bg-gray-200 p-6 ">
          <div>
            <h1 className="text-xl text-left">{todo.title}</h1>
            <p className='text-base text-left'>{todo.description}</p>
          </div>
          <div className='flex flex-col mt-4'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold rounded my-1' onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
            <Link to={"/update/" + todo.id} className='bg-blue-500 hover:bg-blue-700 text-white tex-sm font-bold rounded'>Update</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;