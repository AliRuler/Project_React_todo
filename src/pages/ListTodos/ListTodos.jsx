import React from 'react'
import { useSelector } from 'react-redux';
import ToDo from '../../components/ToDo/ToDo';
import Day from '../../components/Day/Day';

const Todo = () => {
    const todos = useSelector(state => state.todos);
    let dates = []; 
    todos.map( item =>{
      console.log(item);
      let data = item.startDate.split(",")[0];
      if(!dates.includes(data)){
        dates.push(data);
      }
    });
    function getDay(date) {
      date = new Date(date);
      let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
      return [days[date.getDay()]];
    }

    function getMonth(date) {
      date = new Date(date);
      let months = ['March', 'April', 'May', 'June', 'July','jan','Feb','Aug','Sept','Oct','Nov','Dec'];
      return [date.getDate() + " " + months[4]];
    }

  return (
    <div className='flex'>
      {dates.map(date =>(
        <Day day = {getDay(date)} month = {getMonth(date)}>
        {todos.filter(item =>(item.startDate.split(",")[0] === date)).map(item =>(
            <ToDo 
              todo = {item}
              />
        )
        )
        }
          </Day>
        ))}
    </div>
  )}
export default Todo