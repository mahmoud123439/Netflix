import {useEffect, useState} from 'react';
import './Rows.css';
import axios from  '../Data/axios';

function Rows  ({title, fetchUrl, isLargeRow = false}){

  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect (() => {
    async function fetchData() {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  }
  fetchData();
}, [fetchUrl]);
  // console.log(movies)
  
  return (
    <div className="Rows">
      <h2>{title}</h2>
      <div className="Row-posters">
        {movies.map(movie => (
          ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                <img
                  // ref={ref}
                  // noClick = {() => handleClick(movie)}
                  className={`Row-poster ${isLargeRow && "Row-posterLarge"}`} 
                  key={movie.id} 
                  src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} 
            alt ={movie.name}
            />
          )
        
        
      ))}
      </div>
      
    </div>
  )
}

export default Rows