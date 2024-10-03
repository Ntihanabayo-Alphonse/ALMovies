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
                    <div className='movie_container absolute left-0 w-full min-h-full px-8 sm:px-16 pt-48 sm:pt-28 pb-16 grid xl:grid-cols-4 xl:px-10 lg:px-20 md:px-6 gap-4 lg:grid-cols-3 md:grid-cols-2'>
                        {movieData.map(movie => (
                            <Link to={`/movies/${movie.imdbID}`} >
                                <div key={movie.imdbID} className="movie_card my-0 mx-auto relative  max-[400px]:w-[270px] w-[340px] lg:w-[270px] h-[400] rounded-lg overflow-hidden">
                                    <div className="movie_image max-[400px]:w-[270px] w-[340px] lg:w-[270px] h-[400] rounded-lg bg-green-700">
                                        <img src={movie.Poster} alt="Movie Poster" className='w-full h-full object-cover' />
                                    </div>
                                    <div className="movie_txt absolute bottom-0 left-0 bg-[rgba(0,0,0)] w-full">
                                        <div className="movie_txt absolute bottom-0 left-0 px-5 bg-[rgba(0,0,0,0.1)] w-full py-4 backdrop-blur-[2px]">
                                            <h3 className='font-bold text-[17px] text-white'>{movie.Title}</h3>
                                            <p className='font-bold text-sm'>{movie.Year}</p>
                                        </div>
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