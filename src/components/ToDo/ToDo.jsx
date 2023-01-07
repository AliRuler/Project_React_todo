import React from 'react';
import { useDispatch } from 'react-redux';
import { doneTodo, removeTodo } from '../../toolkit/slices/todo.slice';
import RemoveIcon from '../../assets/svg/remove.icon.svg'
import EditIcon from '../../assets/svg/edit.icon.svg'
import check from '../../assets/svg/check.icon.svg'
import done from '../../assets/svg/done.icon.svg'


import './todo.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ToDo = ({ todo }) => {
  const filter = useSelector(state => state.filter.name)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDragStart = (e) => {
    e.dataTransfer.setData("id", todo.id);
    e.dataTransfer.setData("startDate", todo.startDate);
  };
  const diffDays = Math.floor(((new Date(todo.endDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24)));
  const diffHours = Math.floor(((new Date(todo.endDate).getTime() - new Date().getTime()) / (1000 * 3600)));
  const diffmin = Math.floor(((new Date(todo.endDate).getTime() - new Date().getTime()) / (1000 * 60)));

  const timeUp = diffDays <= 1 && diffHours <= 1 && diffmin <= 1;
  const warnnig = diffDays <= 1 && (diffHours >= 1 || diffmin >= 1);

  return (
    <div draggable onDragStart={handleDragStart}
      className={
        (
          filter === "warn" ? warnnig ? "block" : "hidden" :
            filter === "notDone" ? todo.isDone || timeUp || warnnig ? "hidden" : "block" :
              filter === "timeout" ? timeUp ? todo.isDone? "hidden": "block" : "hidden" :
                filter === "done" ? todo.isDone ? "block" : "hidden" : "block"
        )
        + " m-2"}>
      <div className={(timeUp ? todo.isDone ? "border-green-400 " : "border-red-400 " : todo.isDone ? "border-green-400 " : warnnig ? "border-amber-400 " : "border-blue-400 ") + " border-2 m-2 border-solid"}>
        <div className='m-4'>
          <div className='flex flex-row justify-start w-full mb-2'>
            <p className='text-xs text-white mr-1'>Time start: </p>
            <p className='text-sm text-green-400 text-bold'>{todo.startDate.split(",")[1]}</p>
          </div>
          <div className='flex flex-row justify-start w-full'>
            <p className='text-xs text-white mr-1'>{diffDays ? "Days remind: " : "Time remind:"}</p>
            <div>
              {diffDays >= 1 ? <p className='d-inline text-sm text-red-400 font-bold'>{diffDays + " days"}</p> :
                diffHours >= 1 ? <p className='d-inline text-sm text-red-400 font-bold'>{diffHours + " hours"}</p> :
                  diffmin >= 1 ? <p className='d-inline text-sm text-red-400 font-bold'>{diffmin + " minutes"}</p> : <p className='d-inline text-sm text-red-400 font-bold'>Time's up</p>}
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gray-200 p-auto bg-sky-100">
          <div className='p-4 bg-white'>
            <h1 className="text-xl text-left">{todo.title}</h1>
            <p className='text-base text-left'>{todo.description}</p>
          </div>
          <div className='flex flex-row' >
            <button w-auto className='bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold rounded m-1 p-1' onClick={() => dispatch(removeTodo(todo.id))}>
              <img width="30px" height="30px" src={RemoveIcon} alt="" />
            </button>
            <button w-auto className='bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold rounded m-1 p-1' onClick={() => navigate("/update/" + todo.id)}>
              <img width="30px" height="30px" src={EditIcon} alt="" />
            </button>
            <button onClick={() => dispatch(doneTodo({ id: todo.id }))} className={(todo.isDone ? 'bg-green-500 hover:bg-green-700' : timeUp ? 'bg-red-500 hover:bg-red-700' : warnnig ? 'bg-amber-500 hover:bg-amber-700' : 'bg-blue-500 hover:bg-blue-700') + ' text-white text-sm font-bold rounded m-1 p-1'}>
              <img width="30px" height="30px" src={todo.isDone ? done : check} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;