import React from 'react'
import { useSelector } from 'react-redux';
import ToDo from '../../components/ToDo/ToDo';
import Day from '../../components/Day/Day';
import 'swiper/css';
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import "swiper/css/bundle"

SwiperCore.use([Pagination, EffectCoverflow]);

const Todo = () => {
  const todos = useSelector(state => state.todo.todos);
  let dates = [];
  console.log("dates",todos)
  todos.map(item => {
    let data = item.startDate.split(",")[0];
    if (!dates.includes(data)) {
      dates.push(data);
    }
    return dates
  });

  return (
    <div className='flex '>
        {dates.map(date => (
            <Day startDate={date}>
              {todos.filter(item => (item.startDate.split(",")[0] === date)).map(item => (
                <ToDo
                  key={item.id}
                  todo={item}
                />
              )
              )
              }
            </Day>
        ))}
      </div>
  )
}
export default Todo


// Import Swiper styles

