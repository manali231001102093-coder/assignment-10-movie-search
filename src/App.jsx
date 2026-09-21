import React from 'react';
import MovieSearch from './components/MovieSearch';
import { Film } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-container">
          <Film size={32} className="logo-icon" />
          <h1 className="logo-text">CineSearch</h1>
        </div>
        <p className="app-subtitle">Discover your favorite movies, series, and episodes.</p>
      </header>

      <main className="main-content">
        <MovieSearch />
      </main>

      <footer className="app-footer">
        <p>Data provided by OMDb API</p>
      </footer>
    </div>
  );
}

export default App;
