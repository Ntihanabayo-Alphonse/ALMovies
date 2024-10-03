import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieCard from './components/MovieCard';
import { useState } from 'react';
import MovieDetails from './components/MovieDetails';

function App() {
  let [movieData, setMovieData] = useState([]);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home movieData={movieData} setMovieData={setMovieData} />} />
          <Route path='/movies' element={<MovieCard movieData={movieData} setMovieData={setMovieData} />} />
          <Route path='/movies/:imdbID' element={<MovieDetails movieData={movieData} setMovieData={setMovieData} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
