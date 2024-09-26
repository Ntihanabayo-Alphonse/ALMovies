import { useState } from 'react'
import fetchMovieData from '../getMovies';

// SearchBar Component
const SearchBar = ({ setMovieData }) => {
    const [ title, setTitle] = useState('')

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setTitle(inputValue);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await fetchMovieData({title});
            setMovieData(data.Search)
            setTitle('')
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
        <nav className="border-b-[#dddddd6b] border-b flex justify-between items-center flex-col sm:flex-row py-1 px-10 sm:px-12 fixed w-full top-0 z-10 md:px-24">
            <div className="image w-14 h-14">
                <a href="#"><img className="w-full h-full object-cover" src="/images/ALMovies_Logo.png" alt="ALMovies Logo" /></a>
            </div>
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