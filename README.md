# Assignment 10: Movie Search Application

## Objective
Create a Movie Search application that fetches data from the OMDB API based on user input, implementing search functionality with debouncing.

## Technologies Used
- React (Vite)
- Custom Hooks (`useDebounce`, `useMovies`)
- OMDB API Integration
- CSS Grid & Flexbox
- Lucide React Icons

## Features
- **Live Search**: Search for movies, series, and episodes in real-time.
- **Debounced Input**: Uses a custom `useDebounce` hook to delay the API request until the user stops typing for 500ms, reducing unnecessary API calls and preventing rate limits.
- **Custom Fetch Hook**: Abstracted the API fetching logic into a reusable `useMovies` hook to separate concerns.
- **Error Handling**: Gracefully handles API errors or "Movie not found" scenarios.
- **Responsive Grid**: Displays search results in a responsive, auto-filling grid layout.
- **Fallback Images**: Provides a placeholder UI if the OMDB API does not return a poster image.

## Folder Structure
```
assignment-10-movie-search/
├── .env                    <-- Environment variables (API Key)
├── src/
│   ├── components/
│   │   ├── MovieSearch.jsx
│   │   ├── MovieList.jsx
│   │   └── MovieCard.jsx
│   ├── hooks/
│   │   ├── useDebounce.js
│   │   └── useMovies.js
│   ├── styles/
│   │   ├── MovieSearch.css
│   │   ├── MovieList.css
│   │   └── MovieCard.css
│   ├── App.jsx
│   └── index.css
```

## How to Install
1. Navigate to the project directory: `cd assignment-10-movie-search`
2. Install dependencies: `npm install`
3. Get an API key from [OMDb API](http://www.omdbapi.com/)
4. Create a `.env` file in the root directory and add your API key:
   `VITE_OMDB_API_KEY=your_api_key_here`

## How to Run
Run the development server:
```bash
npm run dev
```

## Important React Concepts Demonstrated
- **Debouncing**: Implementing a custom hook using `useEffect` and `setTimeout` to throttle user input processing.
- **Environment Variables**: Securely storing API keys outside of source code using Vite's `import.meta.env` system.
- **Separation of Concerns**: Moving complex state and fetching logic out of UI components and into dedicated custom hooks (`useMovies`).
