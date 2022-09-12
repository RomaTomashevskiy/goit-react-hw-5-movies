



const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '5f571a4f42cbc72c71a468bda3f0da23';

const params = {
    movie: 'trending/movie/day?',
    searcMovies: 'search/movie?', 
    movieDetalis: 'movie/',

};

const { movie, searcMovies  ,movieDetalis} = params;

export const getPopularMovies = () => {
   return fetch(`${BASE_URL}${movie}api_key=${KEY}`)
        .then(res => res.json())
};


export const searchMoviesOnDemand = (query) => {
    return fetch(`${BASE_URL}${searcMovies}api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false&`)
        .then(res => res.json());
};


export const getMoviesDetalis = (id) => {
    return fetch(`${BASE_URL}${movieDetalis}${id}?api_key=${KEY}&language=en-US`).
        then(res => res.json());
};

export const getMoviesCats = (id) => {
    return fetch(`${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US&page=1`)
        .then(res => res.json());
};

export const getMoviesReviews = (id) => {
    return fetch(``)
}


