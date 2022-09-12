import { Item, Link } from './Home.styled';
import { useLocation } from 'react-router-dom';

const ListMovies = ({ films }) => {
    const location = useLocation();
    return (
        <ul>
            {films.map(({ id, title}) => {
                return <Item key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>
                        {title}
                    </Link>
                </Item>
            })}
        </ul>
    )
};


export default ListMovies;