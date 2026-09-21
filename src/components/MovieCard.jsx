import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  const { Title, Year, Poster, Type } = movie;

  const hasPoster = Poster && Poster !== 'N/A';

  return (
    <div className="movie-card">
      <div className="movie-poster-container">
        {hasPoster ? (
          <img src={Poster} alt={Title} className="movie-poster" loading="lazy" />
        ) : (
          <div className="movie-poster-fallback">
            <ImageIcon size={48} className="fallback-icon" />
            <span>No Image</span>
          </div>
        )}
        <div className="movie-type-badge">{Type}</div>
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title" title={Title}>{Title}</h3>
        <p className="movie-year">{Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
