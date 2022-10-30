import React from 'react'

const Day = ({day, month, children}) => {
  return (
    <div className='flex flex-col text-center border-2 p-4'>
        <h2 className='border-2 border-blue-100'>{month}</h2>
        <h2 className='border-2 border-blue-200 bg-gray-300'>{day}</h2>
        {children}
    </div>
  )
}

export default Day