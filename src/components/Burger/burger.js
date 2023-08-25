import userIcon from "../../images/userIcon.svg";
import "../Burger/burger.css";
import { Link, useLocation } from "react-router-dom";


function Burger({ burgerOpened, setBurgerOpened }) {
  if (burgerOpened) {
    document.body.style.position = "fixed";
  } else {
    document.body.style.position = "";
  }

  const { pathname } = useLocation();

  return (
    <section className={burgerOpened ? "burger burger__active" : "burger"}>
      <div className="burger__wrapper"></div>
      <div className="burger__content">
        <nav className="burger__menu">
          <Link
            to="/"
            className={`burger__link ${
              pathname !== "/" ? "" : "burger__link_focus"
            }`}
          >
            Главная
          </Link>
          <Link to="/movies" className={`burger__link ${
              pathname !== "/movies" ? "" : "burger__link_focus"
            }`}>
            Фильмы
          </Link>
          <Link to="/saved-movies" className={`burger__link ${
              pathname !== "/saved-movies" ? "" : "burger__link_focus"
            }`}>
            Сохранённые фильмы
          </Link>
        </nav>
        <Link to="/profile" className="burger__profile">
          <p className="burger__profile-text">Аккаунт</p>
          <div className="burger__profile-block">
            <img className="burger__user-icon" src={userIcon}></img>
          </div>
        </Link>
      </div>
      <button
        className="burger__button burger__button_close"
        onClick={() => {
          setBurgerOpened(false);
        }}
      ></button>
    </section>
  );
}

export default Burger;
