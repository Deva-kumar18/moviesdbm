import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CustomLoader from "../../Component/CustomLoader/CustomLoader";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';



const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieImages, setMovieImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url ,setUrl]= useState([])
  const navigate= useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJhN2Q5MWUxODg2ODZlMWI3ZjIxNDlhNTJmZjZjYSIsInN1YiI6IjY1NDA4ZTRhNmNhOWEwMDBlYmVlMzNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOvZ4Mt87XiIUrtxnNUaD3bNn0ROFXMl6WeWoS-PxSc",
        },
        
      })

      .then((res) => {
        setMovieDetails(res.data);
        console.log(res.data, "kjnjnjnknkjjknkj");
        setLoading(false);
      });
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/images`, {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJhN2Q5MWUxODg2ODZlMWI3ZjIxNDlhNTJmZjZjYSIsInN1YiI6IjY1NDA4ZTRhNmNhOWEwMDBlYmVlMzNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOvZ4Mt87XiIUrtxnNUaD3bNn0ROFXMl6WeWoS-PxSc",
        },
      })
      .then((res) => {
        setMovieImages(res.data.backdrops);
      });
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,{
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJhN2Q5MWUxODg2ODZlMWI3ZjIxNDlhNTJmZjZjYSIsInN1YiI6IjY1NDA4ZTRhNmNhOWEwMDBlYmVlMzNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOvZ4Mt87XiIUrtxnNUaD3bNn0ROFXMl6WeWoS-PxSc'
          }

      })
      .then(res=>{
        setUrl(res.data.results[0].key)
      })
  }, []);
  console.log(movieDetails);
  const navigateYoutube =(navi)=>{
    window.open(
        `https://www.youtube.com/watch?v=${navi}`,
        '_blank'
      );
  }
  return (
    <div className="banner">
      {loading ? <CustomLoader /> : null}
      
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
            <img
              className="banner-img"
              src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
              alt="loading "
            />
            <div className="image-overview">
              {"Story Line: " + movieDetails.overview}
            </div>
            <div className="run-time">
              {"Run Time: " + movieDetails.runtime + " mins"}
            </div>
            <div className="m-title">{movieDetails.title}</div>
            <div className="play-button" ><button className="p-button" onClick={()=>navigateYoutube(url)} >Play Trailer<div className="p-ico"><PlayCircleOutlineIcon/></div></button></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieDetails;
