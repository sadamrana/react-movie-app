import React, { useState } from "react";
import './movie.css';

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    // Replace this with your own API key
    const apiKey = "b70ea079";

    // The OMDb API endpoint for searching by title
    const url = `http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

    try {
      // Fetch the data from the API
      const response = await fetch(url);
      const data = await response.json();

      // Set the movies state with the results
      setMovies(data.Search);
    } catch (err) {
      // Handle any errors
      console.error(err);
    }
  };

  return (
    <div className="App">
      <h1 className="main_h1">MovieMania Web App</h1>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="Enter a movie title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies.map((movie) => (
          <div className="card" key={movie.imdbID}>
            <img
              className="card-image"
              src={movie.Poster}
              alt={movie.Title}
            />
            <div className="card-content">
              <h3 className="card-title"><span>Movie Name: </span> {movie.Title} </h3>
              <p>Year Release: {movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
