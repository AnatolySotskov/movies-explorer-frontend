import "../Login/Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login">
      <Link to="/" className="login__logo">
        <img src={logo} alt="Логотип"></img>
      </Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
        <label className="login__label">
          E-mail
          <input
            id="login__error_email"
            type="text"
            className="login__input"
            minLength="2"
            maxLength="30"
            required
            name="email"
            pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
          />
          <span className="login__error login__error_email">Вы ввели неправильный логин или пароль</span>
        </label>
        <label className="login__label">
          Пароль
          <input
            id="password"
            type="password"
            className="login__input"
            name="password"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="login__error"></span>
        </label>

        <button className="login__submit-button" type="submit">
          Войти
        </button>
        <p className="login__subtitle">
          Ещё не зарегистрированы?
          <Link to="/sign-up" className="login__link">
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
