import React from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from "react-toastify";

const LayoutPage = () => {
    const logoutToast = () => {
        toast.success("Logout success", {
          position: "top-right",
          autoClose: 3000,
        });
      };
  return (
    <div className='Layout-container'>
        <div className='header'>
        <NavLink onClick={logoutToast} to={'/login'}><button className='logout-btn'>Logout</button></NavLink>   
        </div>
    </div>
  )
}

export default LayoutPage