import { useEffect } from "react";
import './App.css';
import SearchIcon from './searchIcon.svg';
import MovieCard from "./MovieCard";

//omdbi api url
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=1e723a75"

function App() {

  //function to search movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
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

      <div className="container">
       <MovieCard movie1={movie1} />
      </div>
    </div>
  );
}

export default App;
