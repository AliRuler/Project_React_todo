import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeTodo } from '../../toolkit/slices/todo.slice';
import './todo.css'
const ToDo = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDragStart = (e) => {
    e.dataTransfer.setData("id",todo.id);
    e.dataTransfer.setData("startDate",todo.startDate);
  };
  return (
    <div draggable onDragStart={handleDragStart} >
      <div className="flex flex-col bg-gray-200 mb-2 p-6 ">
        <div>
          <h1 className="text-xl text-left">{todo.title}</h1>
          <p className='text-base text-left'>{todo.description}</p>
        </div>
        <div className='flex flex-col '>
          <button className='bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold rounded m-1' onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
          <Link to={"/update/" + todo.id} className='bg-blue-500 hover:bg-blue-700 text-white tex-sm m-1 font-bold rounded'>Update</Link>
        </div>
      </div>
    </div>
  );
}

export default ToDo;