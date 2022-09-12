import {
    Box,
    Title,
    Data,
    UserScore,
    OverviewTitle,
    Overview,
    BoxOverview,
    GenresList,
    Item,
    Information
} from './MovieDetails.styled';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MovieDetailsMarkur = ({ movie }) => {
    const { title,
        poster_path,
        release_date,
        vote_average,
        overview,
    } = movie;

    const location = useLocation();

    console.log(location.state)
    return (
        <>
            <Box>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} width='300px' />
                <BoxOverview>
                    <Title> {title} <Data> ({release_date}) </Data> </Title>
                    <UserScore>User Score : {vote_average} %</UserScore>
                    <OverviewTitle>Overview :</OverviewTitle>
                    <Overview>{overview}</Overview>
                    <h3>Genres:</h3>
                    <GenresList>
                        {movie.genres.map(({ id, name }) => (
                            <Item key={id}>{name}</Item>
                        ))}
                    </GenresList>
                </BoxOverview>
            </Box>
            <h2>Additional information</h2>
            <Information to={`cats`}  state={location.state}>Cast</Information>
            <Information to={`reviews`}  state={location.state}>Reviews</Information>
            <Outlet />
        </>
       
    )
};

export default MovieDetailsMarkur;