// eslint-disable-next-line no-unused-vars
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <main className="main">
      <div className="movies">
        <SearchForm />
        <MoviesCardList />
      </div>
    </main>
  );
}

export default Movies;
