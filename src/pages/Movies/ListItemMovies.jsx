import { Item, Link } from './Movies.styled';
import { useLocation } from 'react-router-dom';
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


export default ListItemMovies;