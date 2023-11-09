import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CustomLoader from "../../Component/CustomLoader/CustomLoader";
import "./LandingPage.css";
import SearchIcon from "@mui/icons-material/Search";

const LandingPage = () => {
  const [moviesList, setMoviesList] = useState([""]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [change, setPageChange] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
 
  

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJhN2Q5MWUxODg2ODZlMWI3ZjIxNDlhNTJmZjZjYSIsInN1YiI6IjY1NDA4ZTRhNmNhOWEwMDBlYmVlMzNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOvZ4Mt87XiIUrtxnNUaD3bNn0ROFXMl6WeWoS-PxSc",
          },
          params: { page:currentIndex}

          
        },
        setLoading(true)
      )
      .then((res) => {
        setMoviesList(res.data.results);
        console.log(res.data, "jj");
        console.log(res.data.page);

        setLoading(false);
      });
  }, [change,currentIndex]);

  const handleMovieDetails = (id) => {
    navigate(`/moviedetails/${id}`);
  };
  const searchMovie = (e) => {
    if (e !== "") {
      const moviefilter = moviesList.filter((movie) =>
        movie.title.toLowerCase().includes(e.toLowerCase())
      );
      setMoviesList(moviefilter);
    } else {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJhN2Q5MWUxODg2ODZlMWI3ZjIxNDlhNTJmZjZjYSIsInN1YiI6IjY1NDA4ZTRhNmNhOWEwMDBlYmVlMzNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOvZ4Mt87XiIUrtxnNUaD3bNn0ROFXMl6WeWoS-PxSc",
            },
            params: { page:currentIndex}
          }
        )
        .then((res) => {
          setMoviesList(res.data.results);
          
        });
    }
  };
  const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };
  
  
  

  return (
    <div>
      {loading ? <CustomLoader /> : null}
      <div className="search-field">
      {/* <div>
          <button onClick={() => setPageChange(change + 1)}>Next Page</button>
        </div>
        <div>
          <button onClick={() => setPageChange(change - 1)}>
            previous Page
          </button>
        </div> */}
        <div className="input-search">
          <input
            className="movie-search"
            type="text"
            onChange={(e) => {
              searchMovie(e.target.value);
            }}
            placeholder="search movies"
          />
        </div>
        <div className="search-icon">
          <SearchIcon className="s-icon" />
        </div>
       
      </div>
      <ul className="movie-container">
        {moviesList.map((item) => (
          <li
            className="movie-list"
            onClick={() => handleMovieDetails(item.id)}
            key={item.id}
          >
            <div className="movie-flex">
              <img
                className="movie-images"
                src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path}
              />
              <div className="movie-title">{item.title}</div>
              <div className="movie-vote">Votes: {item.vote_count}</div>
              <div className="m-rating">Rating: {item.vote_average}</div>
            </div>
          </li>
        ))}
      </ul>
      <div>
      {numbers.map((number,index) => (
          <button className="page-btn" key={number} onClick={() => handleButtonClick(number)}>
            {number}
          </button>
      ))}
    </div>
    
    </div>
  );
};

export default LandingPage;
