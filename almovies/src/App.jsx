import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieCard from './components/MovieCard';
import { useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const [movieData, setMovieData] = useState([]);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={(
            <>
              <SearchBar setMovieData={setMovieData} />
              {/* <Home /> */}
              <MovieCard movieData={movieData} />
            </>
          )} />
          {/* <Route path='/' element={<MovieCard movieData={movieData} />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
