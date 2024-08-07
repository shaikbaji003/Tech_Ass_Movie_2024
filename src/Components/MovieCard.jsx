import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './MovieCard.css'; // Make sure to create this CSS file for styling

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <Link to={`/movie/${movie.id}`}>
      <img src={movie.Poster} alt={movie.Title} className="movie-image" />
    </Link>
    <p className="movie-name">{movie.Title}</p>
    <p className="movie-year">{movie.Year}</p>
    <p className="movie-type">{movie.Type}</p>
    <div className="movie-rating">
      {[...Array(movie.rating)].map((_, idx) => (
        <FontAwesomeIcon key={idx} icon={faStar} style={{ color: 'gold' }} />
      ))}
      {[...Array(5 - movie.rating)].map((_, idx) => (
        <FontAwesomeIcon key={idx} icon={faStar} style={{ color: 'grey' }} />
      ))}
    </div>
  </div>
);

export default MovieCard;
