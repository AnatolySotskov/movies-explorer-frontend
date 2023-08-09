import "../SearchForm/SearchForm.css";
import  lupa from "../../images/icon_lupa.png"

function SearchForm() {
  return (
    <div className="search-form">
      <form className="search-form__form-block">
      <img className="search-form__icon" src={lupa} alt="Лупа"></img>
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__input"
          name="query"
          required
        />
        <button className="search-form__button" type="submit">
          Найти
        </button>

        <div className="search-form__button-slider">
          <label className="search-form__switch">
            <input
              className="search-form__checkbox"
              type="checkbox"
              name="miniFilms"
            />
            <span className="search-form__slider-round"></span>
          </label>
          <p className="search-form__button-slider-name">Короткометражки</p>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
