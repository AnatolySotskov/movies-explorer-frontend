import "../SearchForm/SearchForm.css";
import lupa from "../../images/icon_lupa.png";
import { useState } from "react";

function SearchForm({
  required,
  onSearchForm,
  searchInput,
  SearchChange,
  getSearchImput,
  getSearchImputSaved,
  SearchChangeSave,
  setCheckMovies,
  checkMovies,
}) {
  const [error, setError] = useState(false);

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (searchInput || !required) {
      getSearchImput();
      setError(false);
    } else {
      setError(true);
    }
    // getSearchImput();
  };

  return (
    <div className="search-form">
      <form className="search-form__form-block" onSubmit={handleSubmitSearch}>
        <img className="search-form__icon" src={lupa} alt="Лупа"></img>
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__input"
          name="query"
          value={searchInput || ""}
          onChange={SearchChange}
        />{" "}
        <button className="search-form__button" type="submit">
          Найти
        </button>
        <div className="search-form__button-slider">
          <label className="search-form__switch">
            <input
              className="search-form__checkbox"
              type="checkbox"
              name="miniFilms"
              checked={checkMovies}
              onChange={() =>
                setCheckMovies((prev) => {
                  localStorage.setItem("checkMovies", JSON.stringify(!prev));
                  return !prev;
                })
              }
            />

            <span className="search-form__slider-round"></span>
          </label>
          <p className="search-form__button-slider-name">Короткометражки</p>
        </div>
      </form>
      {error && <p className="search__error">Введите ключевое слово</p>}
    </div>
  );
}

export default SearchForm;
