import React from 'react'
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../toolkit/slices/todo.slice';

const Day = ({startDate, children}) => {
  const dispatch = useDispatch();
  function getDay(date) {
    date = new Date(date);
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    return [days[date.getDay()]];
  }

  function getMonth(date) {
    date = new Date(date);
    let months = ['March', 'April', 'May', 'June', 'July','jan','Feb','Aug','Sept','Oct','Nov','Dec'];
    return [date.getDate() + " " + months[date.getMonth()]];
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const datetodo = e.dataTransfer.getData("startDate");
    const newDate = startDate + ',' + datetodo.split(",")[1];
    dispatch(updateTodo({id:id,"startDate":newDate}))
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver} className='flex flex-col text-center border-2 p-4'>
        <h2 className='border-2 border-blue-100'>{getMonth(startDate)}</h2>
        <h2 className='border-2 border-blue-200 bg-gray-300'>{getDay(startDate)}</h2>
        {children}
    </div>
  )
}

export default Day