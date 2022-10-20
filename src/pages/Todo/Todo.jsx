import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ToDo from '../../components/ToDo/ToDo';
import { removeTodo } from '../../toolkit/slices/todo.slice';

const Todo = () => {
    const todos = useSelector(state => state.todos);
    console.log(todos);
    const dispatch = useDispatch();
  return (
    <div>
        {todos.map(user =>(
              <ToDo 
              key={user.id}
              title={user.title} 
              description={user.description}
              Delete = {()=>dispatch(removeTodo(user.id))}
              // update = {()=>handleUpdate(user)}
              />
        ))}
    </div>
  )
}

export default Todo