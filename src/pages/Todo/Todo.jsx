import React from 'react'
import { useSelector } from 'react-redux';
import ToDo from '../../components/ToDo/ToDo';

const Todo = () => {
    const todos = useSelector(state => state.todos);
  return (
    <div>
        {todos.map(item =>(
              <ToDo 
              todo = {item}
              />
        ))}
    </div>
  )
}

export default Todo