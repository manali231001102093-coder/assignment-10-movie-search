import React, { useState } from 'react';
import { Search, Loader } from 'lucide-react';
import { useDebounce } from '../hooks/useDebounce';
import { useMovies } from '../hooks/useMovies';
import MovieList from './MovieList';
import '../styles/MovieSearch.css';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  // Debounce the search query by 500ms to prevent excessive API calls
  const debouncedQuery = useDebounce(query, 500);
  
  // Custom hook to fetch movies based on the debounced query
  const { movies, loading, error } = useMovies(debouncedQuery);

  return (
    <div className="search-container">
      <div className="search-bar-wrapper">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies, series..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {loading && <Loader className="loading-icon spin" size={20} />}
      </div>

      <div className="search-results">
        {error ? (
          <div className="error-message">
            <p>{error}</p>
          </div>
        ) : query && !loading && movies.length === 0 ? (
          <div className="empty-state">
            <p>No results found for "{debouncedQuery}"</p>
          </div>
        ) : !query ? (
          <div className="empty-state initial">
            <p>Start typing to search for movies...</p>
          </div>
        ) : (
          <MovieList movies={movies} />
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
