import { useEffect } from "react";
import './App.css';

//omdbi api url
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=1e723a75"

function App() {

  //function to search movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(()=> {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
     <h1>MovieLando</h1>
    </div>
  );
}

export default App;
