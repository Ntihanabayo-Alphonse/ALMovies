import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SearchBar from './SearchBar'

// Movie details component 
const MovieDetails = ({ movieData, setMovieData }) => {
    const [detail, setDetail] = useState(null)
    const { imdbID } = useParams();
    const movie = movieData.find(movie => movie.imdbID === imdbID)

    // Fetch movie details using a unique imdbID of the card
    const fetchMovieDetails = async () => {
        const movieApiKey = import.meta.env.VITE_OMDB_API_KEY;
        const url = `https://www.omdbapi.com/?i=${movie?.imdbID}&apikey=${movieApiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        setDetail(data)
    }

    // Call or import the fetched movie details
    useEffect(() => {
            fetchMovieDetails()
    }, [])

    return (
        <>
        {/* Import Reusable SearchBar Component */}
            <SearchBar setMovieData={setMovieData} />

            {/* Display the clicked movie card details depending on imdbID of the card */}
            <div className='detail_banner relative'>
                <div key={detail?.imdbID} className='detail_card absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-[100%]  sm:h-[80%] md:h-[75%] sm:w-[95%] md:w-[80%]  xl:h-[70%] xl:w-[75%] sm:top-[55%] rounded-xl font-bold'>
                    <div className="detail_background w-full h-full relative rounded-xl max-[640px]:min-h-[190%]">
                        <img src={detail?.Poster} alt="" className='sm:w-1/2 w-full h-full absolute sm:right-0 bottom-0 rounded-xl object-cover' />
                        <div className="gradient-overlay h-full w-full absolute top-0 left-0 rounded-xl"></div>
                    </div>
                    <div className="details w-full sm:pr-10 sm:h-full rounded-xl overflow-hidden sm:rounded-tl-xl sm:rounded-bl-xl sm:overflow-hidden absolute top-0 left-0 grid grid-cols-1 sm:grid-cols-2 max-[640px]:px-16 max-[400px]:px-8 max-[640px]:py-10">
                        <div className="details-img h-full w-full sm:w-[85%] md:w-[75%] xl:w-[55%] max-[640px]:rounded-xl overflow-hidden">
                            <img src={detail?.Poster} alt="" className='h-full object-cover w-full' />
                        </div>
                        <div className="detail_info py-6 px-6 w-full sm:w-[60%] xl:w-[70%] sm:h-full sm:absolute sm:right-0 sm:overflow-y-auto">
                            <h3 className='font-bold text-3xl font-[philosopher] text-white max-[400px]:text-2xl'>{detail?.Title}</h3>
                            <p className='font-bold mb-8 text-[rgba(221,221,221,0.6)]'>{detail?.Year}</p>
                            <p>{detail?.Genre}</p>
                            <p>{detail?.Country}</p>
                            {detail?.Ratings?.map((rating, index) => (
                                <span key={index} className='mr-5'>
                                    {rating.Source === 'Internet Movie Database' ? 'IDBM' : <span>{rating.Source}</span>}: <span className='text-[#FF005C] font-bold'>{rating.Value}</span>
                                </span>
                            ))}
                            {detail && <h4 className='font-bold mt-8 text-white'>Casts</h4>}
                            {detail && <ul><li className='list-disc ml-8'>{detail?.Actors}</li></ul>}
                            {detail && <h4 className='font-bold mt-8 text-white'>Overview</h4>}
                            <p className='ml-4'>{detail?.Plot}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default MovieDetails