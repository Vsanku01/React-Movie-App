import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import './App.css';

const FEATURED_API =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2935bd72924416707a95cb5ee4e719ea';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=2935bd72924416707a95cb5ee4e719ea&query=';

const App = () => {
  // Setting the inital state of the movies
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch the data
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovies(data.results);
        });
      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          {/* Need to use value for input and state to track changes to the input field */}
          <input
            type='text'
            placeholder='Search..'
            name='search'
            className='search'
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className='movie-container'>
        {/* Conditional rendering */}
        {movies.length > 0 &&
          movies.map((movie) => {
            // Spreading for rest of the props
            return <Movie key={movie.id} {...movie} />;
          })}
      </div>
    </>
  );
};

export default App;
