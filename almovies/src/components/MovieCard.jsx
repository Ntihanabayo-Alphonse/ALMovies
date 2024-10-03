import React from 'react'
import SearchBar from './SearchBar'
import '../App.css'
import { Link } from 'react-router-dom'

const MovieCard = ({ movieData, setMovieData }) => {
    // bg-gradient-to-b from-[#00043566] via-[#00008066] to-[#00043566]

    return (
        <>
            <SearchBar setMovieData={setMovieData} />
            {movieData && (
                <div className='movie_bg relative'>
                    <div className='movie_container absolute top-[0%] left-0 w-full min-h-full px-16 pt-28 pb-16 grid grid-cols-4 gap-4'>
                        {movieData.map(movie => (
                            <Link to={`/movies/${movie.imdbID}`} >
                                <div key={movie.imdbID} className="movie_card bg-purple-700 my-0 mx-auto relative w-[270px] h-[400] rounded-lg overflow-hidden">
                                    <div className="movie_image w-[270px] h-[400] rounded-lg bg-green-700">
                                        <img src={movie.Poster} alt="Movie Poster" className='w-full h-full object-cover' />
                                    </div>
                                    <div className="movie_txt absolute bottom-0 left-0 px-5 bg-[rgba(0,0,0,0.4)] w-full py-4">
                                        <h3 className='font-bold text-[17px]'>{movie.Title}</h3>
                                        <p className='font-bold text-sm'>{movie.Year}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            )}
        </>
    )
}

export default MovieCard