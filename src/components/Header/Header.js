import "./Header.css";
import logo from "../../images/logo.svg";
import userIcon from "../../images/userIcon.svg";
import Burger from "../Burger/burger";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Header({ loggedIn, width }) {
  const [burgerOpened, setBurgerOpened] = useState(false);
  const location = useLocation();

  const { pathname } = useLocation()
  const headerBlack = location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile"; 

  return (
    <header className={`header ${(loggedIn && headerBlack) ? "header__authenticated" : ""}`}>
      <Link to="/" className="header__logo">
        <img src={logo} alt="Логотип"></img>
      </Link>

      {!loggedIn && (
        <div className="header__info">
          <Link className="header__link" to="/signup">
            Регистрация
          </Link>
          <Link className="header__link header__link_block" to={"/signin"}>
            Войти
          </Link>
        </div>
      )}

      {width > 768 && loggedIn && (
        <>
          <div className="header__info">
            <Link to="/movies" className={`header__link ${
              pathname !== "/movies" ? "" : "header__link_focus"
            }`}
            >
              Фильмы
            </Link>
            <Link to="/saved-movies" className={`header__link ${
              pathname !== "/saved-movies" ? "" : "header__link_focus"
            }`}>
              Сохранённые фильмы
            </Link>
            <Link
              to="/profile"
              className="header__link header__link_type_profile"
            >
              Аккаунт
              <div className="header__user">
                <img className="header__user-icon" src={userIcon}></img>
              </div>
            </Link>
          </div>
        </>
      )}

      {width <= 768 && loggedIn && (
        <button  className="burger__button" onClick={() => {setBurgerOpened(true)}}></button>
      )}

      {width <= 768 && (
        <Burger burgerOpened={burgerOpened} setBurgerOpened={setBurgerOpened} />
      )}
    </header>
  );
}

export default Header;
