import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { filterShotMovies, filterAllMovies } from '../../utils/constants';

function SavedMovies({
  handleSaveMovie,
  saveMovies,
  isSearch,
  setSearch,
  disabled,
  errorFront,
  setErrorFront,
  handleDeleteMovie
}) {
  const [showMovies, setShowMovies] = React.useState(saveMovies); // Фильмы
  const [isMoviesCheckbox, setIsMoviesCheckbox] = React.useState(false); // Короткометражки

  // Фильтр сохраненных фильмов
  React.useEffect(() => {
    const filterSaveMovies = () => {
      let filterRequestMovies;
      filterRequestMovies = filterAllMovies(isSearch, saveMovies);

      // Фильтр короткометражек
      if (isMoviesCheckbox) {
        filterRequestMovies = filterShotMovies(filterRequestMovies);
      }
      return filterRequestMovies;
    };

    setShowMovies(filterSaveMovies);
  }, [isSearch, saveMovies, isMoviesCheckbox]);

  //Очистка поиска
  React.useEffect(() => {
    setSearch('');
  }, []);

  return (
    <section className="movies">
      <SearchForm
        isMoviesCheckbox={isMoviesCheckbox}
        setIsMoviesCheckbox={setIsMoviesCheckbox}
        isSearch={isSearch}
        setSearch={setSearch}
        errorFront={errorFront}
        setErrorFront={setErrorFront}
      />

      {(isSearch && showMovies.length === 0) || (isMoviesCheckbox && showMovies.length === 0) ? (
        <p className="movies__not-found">{`${errorFront ? errorFront : 'Ничего не найдено'}`}</p>
      ) : (
        showMovies.length > 0 && (
          <MoviesCardList
            handleSaveMovie={handleSaveMovie}
            disabled={disabled}
            saveMovies={showMovies}
            handleDeleteMovie={handleDeleteMovie}
          />
        )
      )}
    </section>
  );
}

export default SavedMovies;
