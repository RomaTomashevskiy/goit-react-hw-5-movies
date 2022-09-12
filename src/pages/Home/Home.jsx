import { useState  , useEffect} from "react";
import ListMovies from "./ListMovies";
import { getPopularMovies } from '../../api/apiServer';
 
const Home = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        getPopularMovies()
            .then(data => {
                const result = data.results.map(({ id, title }) => ({ id, title}));
                setFilms(result);
          });
    }, []);

    return (
        <>
            <h1> Trending today</h1>
            <ListMovies films={films} />
        </>
    );
};


export default Home;