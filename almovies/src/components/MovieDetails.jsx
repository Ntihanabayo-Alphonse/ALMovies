import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SearchBar from './SearchBar'

const MovieDetails = ({ movieData, setMovieData }) => {
    const [detail, setDetail] = useState(null)
    const { imdbID } = useParams();
    const movie = movieData.find(movie => movie.imdbID === imdbID)
    console.log(movie)

    const fetchMovieDetails = async () => {

        const movieApiKey = import.meta.env.VITE_OMDB_API_KEY;
        const url = `https://www.omdbapi.com/?i=${movie?.imdbID}&apikey=${movieApiKey}`;

        const response = await fetch(url);
        const data = await response.json();
        setDetail(data)
    }

    useEffect(() => {
        // if(imdbID) {
            fetchMovieDetails()
        // }
    }, [])

    // console.log(detail)

    return (
        <>
            <SearchBar setMovieData={setMovieData} />
            <div className='banner h-full relative'>
                <div className="detail_banner"></div>
                <div key={detail?.imdbID} className='detail_card absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-[70%] w-[75%] sm:top-[55%] rounded-xl font-bold'>
                    <div className="detail_background w-full h-full relative rounded-xl">
                        <img src={detail?.Poster} alt="" className='w-1/2 h-full absolute right-0 rounded-xl object-cover' />
                        <div className="gradient-overlay w-full h-full absolute top-0 left-0 rounded-xl"></div>
                    </div>
                    <div className="details w-full pr-10 h-full rounded-tl-xl rounded-bl-xl overflow-hidden absolute top-0 left-0 grid grid-cols-2">
                        <div className="details-img h-full w-10/12">
                            <img src={detail?.Poster} alt="" className='h-full object-cover w-full' />
                        </div>
                        <div className="detail_info py-6 w-full">
                            <h3 className='font-bold text-3xl font-[philosopher] text-white'>{detail?.Title}</h3>
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