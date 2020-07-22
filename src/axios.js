import axios from 'axios';


const instance = axios.create({
    //TODO:https://api.themoviedb.org/3
    //https://cors-anywhere.herokuapp.com/
    baseURL : "https://api.themoviedb.org/3",
});

export default instance;