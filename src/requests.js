const API_KEY = "f498743fd54cb7d026bbd1dcd1efa11e";
//Moesif Orign & CORS Changer
const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres = 28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres = 35`,
    fetchHorAorMovies : ` /discover/movie?api_key=${API_KEY}&with_genres = 27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres = 10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres = 35`,
}
export default requests;