import React from 'react';

const ToDo = ({title,description,Delete,update}) =>{
    return(
        <div className="flex justify-center items-center w-full flex-row justify-center items-center mb-2 w-full bg-gray-200 p-6">
          <div>
            <h1 className="text-3xl">{title}</h1>
            <p className='text-lg'>{description}</p>
          </div>
          <button className='ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={Delete}>Delete</button>
          <button className='ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={update}>Update</button>
        </div>
        );
    }

export default ToDo;