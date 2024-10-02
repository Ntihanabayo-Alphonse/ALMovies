import React, { useState } from 'react'
import fetchMovieData from '../getMovies';
import { Link } from 'react-router-dom';

// SearchBar Component
const SearchBar = ({ movieData, setMovieData }) => {
    const [title, setTitle] = useState('')
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState('')



    const handleChange = (e) => {
        const inputValue = e.target.value;
        setTitle(inputValue);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const data = await fetchMovieData({ title });
            setMovieData(data.Search)
            setTitle('')
        } catch (error) {
            setError("COULDN'T FIND YOUR SEARCH!!!")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {loading && (
                <div className='error_page h-full'>
                    <div className="error_page_bg"></div>
                    <div className="err_container w-1/2 h-40 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[2px_3px_6px_5px_rgba(221,221,221,0.42)] rounded-lg flex justify-center items-center p-2">
                        <p className='font-bold font-[philosopher] text-lg inline-block'>LOADING...</p>
                    </div>
                </div>
            )}

            {err && (
                <div className='error_page h-full'>
                    <div className="error_page_bg"></div>
                    <div className="err_container w-1/2 h-40 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[2px_3px_6px_5px_rgba(221,221,221,0.42)] rounded-lg flex justify-center items-center p-2">
                        <p className='font-bold font-[philosopher] text-lg inline-block'>{err}</p>
                    </div>
                </div>
            )}

            <nav className="border-b-[#dddddd6b] border-b flex justify-between items-center flex-col sm:flex-row py-1 px-10 sm:px-12 fixed w-full top-0 z-10 md:px-24">
                <div className="image w-14 h-14">
                    <Link to="/"><img className="w-full h-full object-cover" src="/images/ALMovies_Logo.png" alt="ALMovies Logo" /></Link>
                </div>
                <form className="w-full sm:w-auto" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Movie title"
                        onChange={handleChange}
                        value={title}
                        className="py-[6px] px-4 bg-transparent border rounded-lg border-[#dddddd6b] w-full sm:w-auto outline-none"
                    />
                    {/* <Link to={'./movies'}> */}
                        <button type="submit" className="bg-white w-full sm:w-auto py-[6px] border-none cursor-pointer text-center rounded-lg text-[#000080] font-bold text-lg my-2 sm:px-5 sm:ml-3">Search</button>
                    {/* </Link> */}

                </form>
            </nav>
        </>
    )
}

export default SearchBar