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
  const [loading, setLoading] = useState(true);

  //function to search movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  //dummy data
  const movie1 =
  {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
  };

  const movie2 =
  {
    "Title": " Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLando</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value="superman"
          onChange={() => { }}
        />
        <img
          src={SearchIcon}
          alt="search icon"
          onClick={() => { }}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              <MovieCard movie1={movie1} />

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
