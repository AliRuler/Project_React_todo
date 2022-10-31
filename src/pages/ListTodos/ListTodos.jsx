import React from 'react'
import { useSelector } from 'react-redux';
import ToDo from '../../components/ToDo/ToDo';
import Day from '../../components/Day/Day';

const Todo = () => {
    const todos = useSelector(state => state.todos);
    let dates = []; 
    todos.map( item =>{
      let data = item.startDate.split(",")[0];
      if(!dates.includes(data)){
        dates.push(data);
      }
    });

  return (
    <div className='flex'>
      {dates.map(date =>(
        <Day startDate = {date}>
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