import { Link } from "react-router-dom";
import userIcon from "../../images/userIcon.svg";
import "../Burger/burger.css";

function Burger({ burgerOpened, setBurgerOpened }) {
  if (burgerOpened) {
    document.body.style.position = "fixed";
  } else {
    document.body.style.position = "";
  }

  return (
    <section className={burgerOpened ? "burger burger__active" : "burger"}>
      <div className="burger__wrapper"></div>
      <div className="burger__content">
        <nav className="burger__menu">
          <Link to="/" className="burger__link">
            Главная
          </Link>
          <Link to="/movies" className="burger__link">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="burger__link">
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
