import { Routes, Route } from 'react-router-dom';
import { lazy  , Suspense} from 'react';
import Header from "./AppBar";

import Cats from 'pages/Cats/Cats';
import Reviews from 'pages/Reviews/Reviews';
// import NotFound from '../pages/NotFound/NotFound'


const Home = lazy(() =>import('../pages/Home/Home' ));

const Movies = lazy(() => import('../pages/Movies/Movies' ));

const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

const NotFound = lazy(() =>import('../pages/NotFound/NotFound'));


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
