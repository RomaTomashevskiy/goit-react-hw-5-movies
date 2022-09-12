import axios from 'axios';


const API_KEY = '5f571a4f42cbc72c71a468bda3f0da23';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// const BASE_URL = 'https://api.themoviedb.org/3/';
// const KEY = '5f571a4f42cbc72c71a468bda3f0da23';

const params = {
    movie: 'trending/movie/day?',
    searcMovies: 'search/movie?', 
    movieDetalis: 'movie/',

};
// const END_POINTS = {
//   trending: '/trending/movie/week',
//   querySearch: '/search/movie',
//   movieDetails: '/movie',
//   movieCredits: '/credits',
//   movieReviews: '/reviews',
// };


const { movie, searcMovies ,movieDetalis  } = params;

export const getPopularMovies = async () => {
    
    const res = await axios.get(`${movie}api_key=${API_KEY}&language=en-US&include_adult=false`)
    
    return res.data
};

export const searchMoviesOnDemand = async(query) => {

    const res = await axios.get(`${searcMovies}api_key=${API_KEY}&query=${query}&language=en-US&include_adult=false`)
    
    return res.data
  
};



export const getMoviesDetalis = async(id) => {
    const res = await axios.get(`${movieDetalis}${id}?api_key=${API_KEY}&language=en-US`)
    return res.data
};


export const getMoviesCats = async(id) => {
    const res = await axios.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US&page=1`)
    return res.data
};



export const getMoviesReviews = async(id) => {
    const res = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    return res.data
};



