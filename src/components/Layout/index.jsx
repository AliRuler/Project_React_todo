import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
const index = () => {
  return (
    <React.Fragment>
      <Header />
      <main className='flex flex-row top-16 absolute'>
        <Sidebar />
        <Outlet />
      </main>
    </React.Fragment>
  )
}

export default index