import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
