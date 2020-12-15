import React from 'react';
import './movie.css';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const Movie = ({ title, poster_path, overview, vote_average }) => {
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  };
  return (
    <div className='movie'>
      {/* Movie Image */}
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        }
        alt={title}
      />
      {/* Movie Information */}
      <div className='movie-info'>
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      {/* Movie hover */}
      <div className='movie-hover'>
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
