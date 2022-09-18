import React from 'react';

const ToDo = ({title,description,Delete,update}) =>{
    return(
        <div>
          <h1 text-2xl>{title}</h1>
          <p>{description}</p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={Delete}>Delete</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={update}>Update</button>
        </div>
        );
    }

export default ToDo;