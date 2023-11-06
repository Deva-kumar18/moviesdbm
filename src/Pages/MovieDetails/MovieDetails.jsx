import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { FaStar } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";

const MovieDetails = () => {
    const {id} = useParams();
    const [movieDetails, setMovieDetails] = useState([])
    const [movieImages, setMovieImages] = useState([])
    
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,{
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJhN2Q5MWUxODg2ODZlMWI3ZjIxNDlhNTJmZjZjYSIsInN1YiI6IjY1NDA4ZTRhNmNhOWEwMDBlYmVlMzNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOvZ4Mt87XiIUrtxnNUaD3bNn0ROFXMl6WeWoS-PxSc'
              }
        })
        .then(res=>{
            setMovieDetails(res.data)
            console.log(res.data,"kjnjnjnknkjjknkj");
        })
        axios.get(`https://api.themoviedb.org/3/movie/${id}/images`,{
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJhN2Q5MWUxODg2ODZlMWI3ZjIxNDlhNTJmZjZjYSIsInN1YiI6IjY1NDA4ZTRhNmNhOWEwMDBlYmVlMzNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOvZ4Mt87XiIUrtxnNUaD3bNn0ROFXMl6WeWoS-PxSc'
              }
        })
        .then(res=>{
            
            setMovieImages(res.data.backdrops)
            

        })

    },[])
    console.log(movieDetails);
  return (
    <div className='banner'>
         <Carousel
          className="carousel"
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {movieImages.map((img) => (
              <div className="poster">
                <img className='banner-img'
                  src={`https://image.tmdb.org/t/p/w500${
                    img.file_path
                  }`}
                  alt="loading "
                />
               <div className='image-overview'>{"Story Line: "+movieDetails.overview}</div>
               <div className='run-time'>{"Run Time: "+movieDetails.runtime+" mins"}</div>
               <div className='m-title'>{movieDetails.title}</div>
              </div>
              
          ))}
        </Carousel>
    </div>
  )
}

export default MovieDetails