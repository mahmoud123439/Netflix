import React from 'react';
import './HomeScreen.css';
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import Rows from '../Rows/Rows';
import requests from '../Data/Requests';
const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      {/* =NavBar= */}
        <NavBar />
      {/* =Banner= */}
        <Banner />
      {/* =Rows= */}
        <Rows 
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Rows title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Rows title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Rows title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
        <Rows title="Romance Movie" fetchUrl={requests.fetchRomanceMovies}/>
        <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen;