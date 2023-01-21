import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './searchIcon.svg';
import MovieCard from "./MovieCard";

//omdbi api url
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=1e723a75"

function App() {

  //state of movies
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  //function to search movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(searchValue);
  }, []);

  return (
    <div className="app">
      <h1>MovieLando</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search icon"
          onClick={() => searchMovies(searchValue)}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              {
                movies.map((movie) => (
                  <MovieCard movie={movie} />
                ))} 
            </div>
          ) :
          (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )

      }

    </div>
  );
}

export default App;
