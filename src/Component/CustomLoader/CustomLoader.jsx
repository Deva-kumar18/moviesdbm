import React from 'react';
import './CustomLoader.css'; 
import movieloader from '../../Assets/movieloader.gif'

function CustomLoader() {
  return (
    <div className="custom-loader">
      
      <div className="loader-animation"><img className='m-loader-gif' src={movieloader}/></div>
      <div className="loader-text">Loading...</div>
    </div>
  );
}

export default CustomLoader;
