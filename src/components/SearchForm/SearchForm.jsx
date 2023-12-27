import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className="search-form" name="searchForm" noValidate>
      <div className="search-form__container">
        <input
          name="search"
          type="search"
          placeholder="Фильм"
          className="search-form__input"
          required
        />
        <button className="search-form__button" aria-label="Искать" type="submit"></button>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
