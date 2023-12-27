function FilterCheckbox({ shortMovie, setShortMovie }) {
  const onChangeCheckbox = e => {
    e.target.checked ? setShortMovie(true) : setShortMovie(false);
  };

  return (
    <div className="filter__checkbox">
      <label className="filter__checkbox-switch">
        <input
          type="checkbox"
          className="filter__checkbox-input"
          name="checkbox"
          checked={shortMovie}
          onChange={onChangeCheckbox}
        />
        <span className="filter__checkbox-slider"></span>
      </label>
      <p className="filter__checkbox-text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
