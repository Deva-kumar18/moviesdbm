import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';


const LandingPage = () => {
    const [moviesList, setMoviesList]= useState([""]);
    const location =useLocation();
    
   
  const LandPage = ()=>{ useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',{
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJhN2Q5MWUxODg2ODZlMWI3ZjIxNDlhNTJmZjZjYSIsInN1YiI6IjY1NDA4ZTRhNmNhOWEwMDBlYmVlMzNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOvZ4Mt87XiIUrtxnNUaD3bNn0ROFXMl6WeWoS-PxSc'
          }
    })
    .then(res=>{
        setMoviesList(res.data.results)
        
        

    })
  },[])
}

if(location.pathname==='/'){
  LandPage();
}

  return (
    <div>
      <ul className='movie-container'>
       {moviesList.map((item)=>(
      <li className='movie-list' key={item.id}><div className='movie-flex'><img className='movie-images' src ={"https://image.tmdb.org/t/p/w500"+item.backdrop_path}/><div className='movie-title'>{item.title}</div><div className='movie-vote'>Votes: {item.vote_count}</div></div></li>
       ))}
      </ul>
    </div>
  );
}


export default LandingPage