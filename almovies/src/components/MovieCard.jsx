import React from 'react'
import SearchBar from './SearchBar'
import '../App.css'

const MovieCard = ({ movieData }) => {
    // bg-gradient-to-b from-[#00043566] via-[#00008066] to-[#00043566]

    return (
        <>
            <div className='banner h-full'>
                <div className="banner_img -z-10"></div>
                <div className='movie_container min-h-[100vh] absolute top-[40%] left-0 w-full px-16 md:px-24 grid grid-cols-4 gap-4 sm:top-[20%]'>
                    {movieData && movieData.map(movie => (
                        <div key={movie.imdbID} className="movie_card my-0 mx-auto bg-purple-700">
                            <div className="movie_image">
                                <img src={movie.Poster} alt="Movie Poster" />
                            </div>
                            <div className="movie_txt">
                                <h3 className=''>{movie.Title}</h3>
                                <p>{movie.Year}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default MovieCard