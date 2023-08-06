import "../Register/Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <Link to="/" className="register__logo"><img src={logo} alt=""></img></Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <label className="register__label">
          Имя
          <input
            type="text"
            className="register__input"
            minLength="2"
            maxLength="30"
            required
            name="name"
          />
          <span className="register__error"></span>
        </label>
        <label className="register__label">
          E-mail
          <input
            id="email"
            type="email"
            className="register__input"
            name="email"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="register__error"></span>
        </label>
        <label className="register__label">
          Пароль
          <input
            type="password"
            className="register__input"
            name="password"
            minLength="4"
            maxLength="20"
            required
          />
          <span className="register__error">Что-то пошло не так...</span>
        </label>

        <button className="register__submit-button" type="submit">
          Зарегистрироваться
        </button>
        <p className="register__subtitle">
          Уже зарегистрированы?
          <Link to="/sign-in" className="register__link">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
