import { useState, useEffect } from "react";
import SearchBar from "components/SearchBar";
import ListItemMovies from "./ListItemMovies";
import { searchMoviesOnDemand } from '../../api/apiServer';
import { useSearchParams } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParams = searchParams.get('query') ?? '';

    useEffect(() => {
        if (!queryParams) return;
        
        searchMoviesOnDemand(queryParams)
            .then(data => {
                const result = data.results.map(({ id, title }) => ({ id, title }));
                if ( data.results.length === 0) {
                    return alert("We didn't find any movie with this title")
                } else {
                    setMovies(result); 
                };
            });
    }, [queryParams]);

    const querySubmitForm = newQuery => {
        setSearchParams(newQuery ? { query: newQuery } : {});
    };



    return (
        <>
            <SearchBar onSubmit={querySubmitForm} />
            <ListItemMovies movies={movies} />
        </>
    );
};


export default Movies;




