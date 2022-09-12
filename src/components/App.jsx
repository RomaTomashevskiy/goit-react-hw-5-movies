import { Routes, Route } from 'react-router-dom';
import { lazy  , Suspense} from 'react';
import Header from "./AppBar";
// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Cats from 'pages/Cats/Cats';
import Reviews from 'pages/Reviews/Reviews';
// import NotFound from '../pages/NotFound/NotFound'


const Home = lazy(() =>
  import('../pages/Home/Home' /* webpackChunkName: "HomePage" */),
);

const Movies = lazy(() =>
  import('../pages/Movies/Movies' /* webpackChunkName: "MoviesPage" */),
);

const MovieDetails = lazy(() =>
  import(
    '../pages/MovieDetails/MovieDetails' /* webpackChunkName: "Movie-details-page"*/
  ),
);
const NotFound = lazy(() =>
  import('../pages/NotFound/NotFound' /* webpackChunkName: "Not-found-view"*/),
);


const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Home' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<MovieDetails />}>
            <Route path='cats' element={<Cats />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>

      </Suspense>
    </>
  );
    
};

export default App;
