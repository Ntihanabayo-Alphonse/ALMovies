import React from 'react'
import SearchBar from './SearchBar'
import '../App.css'
import { Link } from 'react-router-dom'

// MovieCard component
const MovieCard = ({ movieData, setMovieData, err}) => {

    return (
        <>
        {/* Import Reusable SearchBar Component */}
            <SearchBar setMovieData={setMovieData} />

            {/* Display the movie cards if the movieData is available and throw an error otherwise */}
            {movieData ? (
                <div className='movie_bg relative'>
                    <div className='movie_container absolute left-0 w-full min-h-full px-8 sm:px-16 pt-48 sm:pt-28 pb-16 grid xl:grid-cols-4 xl:px-10 lg:px-20 md:px-6 gap-4 lg:grid-cols-3 md:grid-cols-2'>
                        {movieData.map(movie => (
                            <Link to={`/movies/${movie.imdbID}`} >
                                <div key={movie.imdbID} className="movie_card my-0 mx-auto relative  max-[400px]:w-[270px] w-[340px] lg:w-[270px] h-[400] rounded-lg overflow-hidden">
                                    <div className="movie_image max-[400px]:w-[270px] w-[340px] lg:w-[270px] h-[400] rounded-lg">
                                        <img src={movie.Poster} alt="Movie Poster" className='w-full h-full object-cover' />
                                    </div>
                                    <div className="movie_txt absolute bottom-0 left-0 bg-[rgba(0,0,0)] w-full">
                                        <div className="movie_txt absolute bottom-0 left-0 px-5 bg-[rgba(0,0,0,0.1)] w-full py-4 backdrop-blur-[2px]">
                                            <h3 className='font-bold text-[18px] text-white font-[philosopher]'>{movie.Title}</h3>
                                            <p className='font-bold text-sm'>{movie.Year}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            ) : (<div className='error_page h-full'>
                    <div className="error_page_bg"></div>
                    <div className="err_container w-10/12 sm:w-1/2 h-40 absolute top-2/3 sm:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[2px_3px_6px_5px_rgba(221,221,221,0.42)] rounded-lg flex justify-center items-center p-2">
                        <p className='font-bold font-[philosopher] text-lg inline-block max-[400px]:text-[17px]'>{err}</p>
                    </div>
                </div>)
            }
        </>
    )
}

export default MovieCard