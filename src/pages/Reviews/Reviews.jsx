import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";

const Reviews = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState(null);
    const [error, setError] = useState(false);


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=5f571a4f42cbc72c71a468bda3f0da23&language=en-US&page=1`)
            .then(res => res.json())
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