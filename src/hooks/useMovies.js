import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY || '';

export const useMovies = (searchTerm) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchTerm) {
        setMovies([]);
        setError(null);
        return;
      }

      if (!API_KEY || API_KEY === 'your_omdb_api_key_here') {
        setError('API Key is missing. Please add VITE_OMDB_API_KEY to your .env file.');
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
        const data = await response.json();

        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setMovies([]);
          // Only show error if they actually searched something long enough
          if (searchTerm.length > 2) {
            setError(data.Error);
          }
        }
      } catch (err) {
        setError('Failed to fetch data. Check your network connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return { movies, loading, error };
};
