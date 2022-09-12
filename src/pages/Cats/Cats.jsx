import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMoviesCats } from '../../api/apiServer';



const Cats = () => {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);

    useEffect(() => {
        getMoviesCats(movieId)
        .then(data => setMovieInfo(data))
    }, [movieId]);

    return (
        <>
            {movieInfo && <ul>
                {movieInfo.cast.map(({ name, id, profile_path, character }) => {
                    return <li key={id}>
                        {profile_path &&<><img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} /><h3>{name}</h3></> }
                     {character && <p>Character: {character}</p>}
                    </li>
                })}
            </ul>
            }
        </>
    )
};

export default Cats;

