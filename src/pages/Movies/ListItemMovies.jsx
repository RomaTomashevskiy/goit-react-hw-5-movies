import { Item, Link } from './Movies.styled';
import { useLocation } from 'react-router-dom';
import PropTypes, { shape } from 'prop-types';
const ListItemMovies = ({ movies }) => {

    const location = useLocation();
     return (
        <ul>
            {movies.map(({ id, title }) => {
                return <Item key={id}>
                    <Link to={`/movies/${id}`} state={{from:location}}> {title}</Link>
                </Item>
            })}
        </ul>
    );
};

ListItemMovies.prototype = {
    movies: PropTypes.array(shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }))
};

export default ListItemMovies;