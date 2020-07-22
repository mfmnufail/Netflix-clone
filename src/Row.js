import React,{ useState,useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const BASE_URL ="https://image.tmdb.org/t/p/original/";


function Row({title, fetchUrl, isLargeRow}) {
    //Initalizing with empty array 
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

    useEffect(() => {   
        async function fetchData(){
            try{
            const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
                // console.log(request.data.results)
            return request;
            }
          catch(e){
              console.log(e)
            }
        }
        fetchData();
    }, [fetchUrl]) // if it is blank it run once
    
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleClick = (movie) =>
      {
          if(trailerUrl){
              setTrailerUrl("");
          } else {
              movieTrailer(movie.name || "")
              .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
               setTrailerUrl(urlParams.get("v"));
                  
              }).catch((err) => {
                  
              });
          }



      }


    return (
    <div className = 'row'>
        <h1>{title}</h1>
        <div className='row__posters'>
            {movies.map(movie => (
                <img
                    key={movie.id}
                    onClick ={() => handleClick(movie)}
                    className= {`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name} />
            ))}
        </div>  

       {trailerUrl && <YouTube videoId = {trailerUrl} opts={opts}/>  }  
    </div>
    )
}
export default Row;


