import moviePoster from '../../images/movie-poster.svg';

function MoviesCard({ altText }) {
  return (
    <li className="movie-card">
      <img src={moviePoster} alt={altText} className="movie-card__image" />
      <button className="movie-card__like-button" type="button"></button>
      <div className="movie-card__info">
        <h2 className="movie-card__title">{'33 слова о дизайне'}</h2>
        <p className="movie-card__subtitle">{'1ч42м'}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
