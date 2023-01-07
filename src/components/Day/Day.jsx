import React from 'react'
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../toolkit/slices/todo.slice';
import done from '../../assets/svg/done.icon.svg'
import check from '../../assets/svg/check.icon.svg'
import all from '../../assets/svg/all.icon.svg'
import { useSelector } from 'react-redux';
import { setFilter } from '../../toolkit/slices/filter.slice';



const Day = ({ startDate, children }) => {
  const dispatch = useDispatch();
  const filterName = useSelector(state => state.filterTodos.name)

  function getDay(date) {
    date = new Date(date);
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    return [days[date.getDay()]];
  }

  function getMonth(date) {
    date = new Date(date);
    let months = ['March', 'April', 'May', 'June', 'July', 'jan', 'Feb', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return [date.getDate() + " " + months[date.getMonth()]];
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const datetodo = e.dataTransfer.getData("startDate");
    const newDate = startDate + ',' + datetodo.split(",")[1];
    dispatch(updateTodo({ id: id, "startDate": newDate }))
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver} className='flex flex-col text-center m-2 p-2 rounded-lg bg-sky-900 w-50'>
      <div className='border-white border-solid border-2 rounded-lg p-3 bg-blue-300'>
        <h2>{getMonth(startDate)}</h2>
        <h2 className=''>{getDay(startDate)}</h2>
      </div>
      <div className='mt-2 '>
        <button onClick={()=> dispatch(setFilter("all"))} w-auto className={(filterName === "all" ? 'bg-gray-300 hover:bg-gray-300' : 'bg-gray-700 hover:bg-gray-700') + ' text-white text-sm font-bold rounded m-1 p-1'} >
          <img width="30px" height="30px" src={all} alt="" />
        </button>
        <button onClick={()=> dispatch(setFilter("done"))} w-auto className={(filterName === "done" ? 'bg-green-500 hover:bg-green-500' : 'bg-green-700 hover:bg-green-700') + ' text-white text-sm font-bold rounded m-1 p-1'} >
          <img width="30px" height="30px" src={done} alt="" />
        </button>
        <button onClick={()=> dispatch(setFilter("notDone"))} w-auto className={(filterName === "notDone" ? 'bg-blue-500 hover:bg-blue-500' : 'bg-blue-700 hover:bg-blue-700') + ' text-white text-sm font-bold rounded m-1 p-1'} >
          <img width="30px" height="30px" src={check} alt="" />
        </button>
        <button onClick={()=> dispatch(setFilter("warn"))} w-auto className={(filterName === "warn" ? 'bg-amber-500 hover:bg-amber-500' : 'bg-amber-700 hover:bg-amber-700') + ' text-white text-sm font-bold rounded m-1 p-1'} >
          <img width="30px" height="30px" src={check} alt="" />
        </button>
        <button onClick={()=> dispatch(setFilter("timeout"))} w-auto className={(filterName === "timeout" ? 'bg-red-500 hover:bg-red-500' : 'bg-red-700 hover:bg-red-700') + ' text-white text-sm font-bold rounded m-1 p-1'} >
          <img width="30px" height="30px" src={check} alt="" />
        </button>

      </div>
      {children}
    </div>
  )
}

export default Day