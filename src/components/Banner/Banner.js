import {React, useEffect, useState} from 'react';
import './Banner.css';
import axios from '../Data/axios';
import requests from '../Data/Requests';

function Banner (){


  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    
    fetchData();
  }, []);
  console.log(movie);



  function truncate (string, n) {
      return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
  return (
    
    <header className="Banner"
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="Banner-content">
        <h1 className="Banner-title">
          {movie?.title || movie?.original_name}
        </h1>
        <div ClassName="Banner-Buttons">
          <button className="Banner-Button">Play</button>
          <button className="Banner-Button">My List</button>
        </div>
        <h1 className="Banner-Description">{truncate(movie?.overview, 150)} 
        </h1>
      </div>
      <div className="banner--fadeBottom"/>
    </header>
  )
}

export default Banner