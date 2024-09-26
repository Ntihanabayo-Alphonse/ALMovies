import React from 'react'
import SearchBar from './SearchBar'
import '../App.css'

const Home = () => {
  return (
    <>
        <SearchBar />
        <div className='banner h-full relative'>
            <div className="banner_img"></div>
            <div className="banner_details absolute top-2/3 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center px-4">
                <h1 className='banner_heading text-3xl text-white'>Find your best movies and series here</h1>
                <p className='text-lg text-white'>Explore the latest releases and trending films tailored to your tastes.</p>
            </div>
        </div>
    </>
  )
}

export default Home