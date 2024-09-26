const fetchMovieData = async ({title}) => {

    const movieApiKey = import.meta.env.VITE_OMDB_API_KEY;
    const url = `https://www.omdbapi.com/?s=${title}&apikey=${movieApiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default fetchMovieData