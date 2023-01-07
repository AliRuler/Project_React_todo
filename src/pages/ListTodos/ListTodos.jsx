import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import ToDo from '../../components/ToDo/ToDo';
import Day from '../../components/Day/Day';
import 'swiper/css';
import "swiper/css/bundle"
import { useDispatch } from 'react-redux';
import { setFilter } from '../../toolkit/slices/filter.slice';



const ListTodos = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();
  let dates = [];

  useEffect(()=>{
    console.log("UseEffect")
    dates.map((item) => dispatch(setFilter({startDate:item, name:"all"})))
  },[dates])
  
  todos.map(item => {
    let data = item.startDate.split(",")[0];
    if (!dates.includes(data)) {
      dates.push(data);
    }
    return dates
  });
  console.log("dates",dates)

  return (
    <div className='flex '>
        {dates.map(date => (
            <Day startDate={date}>
              {todos.filter(item => (item.startDate.split(",")[0] === date)).map(item => (
                <ToDo
                  key={item.id}
                  todo={item}
                  startDate = {date}
                />
              )
              )
              }
            </Day>
        ))}
      </div>
  )
}
export default ListTodos


// Import Swiper styles

