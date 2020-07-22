import React, { Component } from 'react';
import Row from './Row.js'
import './App.css';
import requests from './requests'
import Banner from './Banner';
import Nav from './Nav'


class App extends Component {
  render() {
    return (
      //TODO: NavBar
      <div className="app"> 
        <Nav/>
         <Banner /> 
        <Row 
        title= 'NETFLIX ORIGINALS' 
        fetchUrl = {requests.fetchNetflixOriginals} 
        isLargeRow
        />
        <Row title= 'Trending Now' fetchUrl = {requests.fetchTrending} />
        <Row title= 'Top Rated' fetchUrl = {requests.fetchTopRated} />
        <Row title= 'Action Movies' fetchUrl = {requests.fetchActionMovies} />
        <Row title= 'Comedy Movies' fetchUrl = {requests.fetchComedyMovies} />
        <Row title= 'Horror Movies' fetchUrl = {requests.fetchHorAorMovies} />
        <Row title= 'Romance Movies' fetchUrl = {requests.fetchRomanceMovies} />
        <Row title= 'Documentaries' fetchUrl = {requests.fetchDocumentaries} />
        {/* <Row title= 'Trending Now'  fetchUrl= {requests.fetchTrending}/> */}
      </div>
    );
  }
}

export default App;
