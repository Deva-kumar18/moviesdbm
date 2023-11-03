import React, { useEffect } from 'react'
import { NavLink, redirect,} from 'react-router-dom'
import { toast } from "react-toastify";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';





const LayoutPage = () => {
  const redirector = redirect();
  const location = useLocation();
  const navigate = useNavigate();


    const logoutToast = () => {
      localStorage.clear();
        toast.success("Logout success", {
          position: "top-right",
          autoClose: 3000,
        });
      };   
      
      

    
  return (
    <div className='Layout-container'>
        <div className='header'>
        <NavLink onClick={logoutToast}  to={'/login'}><button className='logout-btn'>Logout</button></NavLink>   
        </div>
    </div>
  )
}

export default LayoutPage