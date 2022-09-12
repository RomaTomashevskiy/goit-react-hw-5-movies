import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getMoviesDetalis } from '../../api/apiServer';
import MovieDetailsMarkur from "./MovieDetailsMarkur";





const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation()




    useEffect(() => {
        getMoviesDetalis(movieId)
            .then(data => setMovie(data))
    }, [movieId]);


    const backLink = location.state?.from ?? '/movies';

    

    return (  
        <>
            <Link to={backLink} >Go to back</Link>
            {movie && <MovieDetailsMarkur movie={movie} />}
        </>
    )
};


export default MovieDetails;
