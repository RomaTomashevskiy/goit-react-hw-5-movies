import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMoviesReviews } from '../../api/apiServer';

const Reviews = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState(null);
    const [error, setError] = useState(false);


    useEffect(() => {
        getMoviesReviews(movieId)
            .then(data => {
                if (data.total_pages === 0) {
                    return setError(true)
                } else {
                    setError(false)
                    setMovieReviews(data)
                }
            })
        
    },[movieId ]);
    return (
        <>
            {movieReviews && <ul>
                {movieReviews.results.map(({ author, content }) => {
                    return <li key={author}>
                        <h3>Author: {author}</h3>
                        <p>{content}</p>
                    </li>
                })}
            </ul>}
            {error && <h3>We don't have any reviews for this movie.</h3>}

        </>
    )
};

export default Reviews;