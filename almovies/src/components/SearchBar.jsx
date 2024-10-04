import React, { useEffect, useState } from 'react'
import fetchMovieData from '../getMovies';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// SearchBar Component
const SearchBar = ({ setMovieData, setError }) => {
    const [ title, setTitle ] = useState('')
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    const [ scrolling, setScrolling ] = useState(false)


// Handle change in the input search bar
    const handleChange = (e) => {
        const inputValue = e.target.value;
        setTitle(inputValue);
    }

// Submit the form to fetch data
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const data = await fetchMovieData({ title });
            setMovieData(data.Search)
            setTitle('')
        } catch (error) {
            setError("FAILURE TO FETCH!!!")
        } finally {
            setLoading(false)
        }

        // If not on /movies, navigate to it
        if (location.pathname !== '/movies') {
            navigate('/movies');
        }
    }

    // Handle the scroll event on the window
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // The scroll handling function on the y-axis
    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true)
        } else {
            setScrolling(false)
        }
    }

    return (
        <>
        {/* Loading screen if the data is being fetched */}
            {loading && (
                <div className='loading_page h-full'>
                    <div className="loading_page_bg"></div>
                    <div className="loading_container w-10/12 sm:w-1/2 h-40 absolute top-2/3 sm:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[2px_3px_6px_5px_rgba(221,221,221,0.42)] rounded-lg flex justify-center items-center p-2">
                        <p className='font-bold font-[philosopher] text-lg inline-block'>LOADING...</p>
                    </div>
                </div>
            )}

            {/* Navigation bar */}
            <nav className={scrolling ? 'bg-[#000435] flex justify-between items-center flex-col sm:flex-row py-1 px-10 sm:px-12 fixed w-full top-0 z-10 md:px-24' : "border-b-[#dddddd6b] border-b flex justify-between items-center flex-col sm:flex-row py-1 px-10 sm:px-12 fixed w-full top-0 z-10 md:px-24"}>
                <div className="image w-14 h-14">
                    <Link to="/"><img className="w-full h-full object-cover" src="/images/ALMovies_Logo.png" alt="ALMovies Logo" /></Link>
                </div>
                {/* Submission Form */}
                <form className="w-full sm:w-auto" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Movie title"
                        onChange={handleChange}
                        value={title}
                        className="py-[6px] px-4 bg-transparent border rounded-lg border-[#dddddd6b] w-full sm:w-auto outline-none"
                    />
                    <button type="submit" className="bg-white w-full sm:w-auto py-[6px] border-none cursor-pointer text-center rounded-lg text-[#000080] font-bold text-lg my-2 sm:px-5 sm:ml-3">Search</button>
                </form>
            </nav>
        </>
    )
}

export default SearchBar