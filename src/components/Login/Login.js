import "../Login/Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import Preloader from "../Preloader/Preloader";


function Login({ onAuthorization, props, errorMessage }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    onAuthorization(values.email, values.password);
  }

  function handleReset() {
    resetForm();
    props.setErrorMessage("");
  }

  return (
    <section className="login">
      <Link to="/" className="login__logo" onClick={handleReset}>
        <img src={logo} alt="Логотип"></img>
      </Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label">
          E-mail
          <input
            id="login__error_email"
            type="email"
            className="login__input"
            minLength="2"
            maxLength="30"
            required
            name="email"
            value={values.email || ""}
            onChange={handleChange}
          />
          <span className="login__error login__error_email">
            {errors.email || ""}
          </span>
        </label>
        <label className="login__label">
          Пароль
          <input
            id="password"
            type="password"
            className="login__input"
            name="password"
            minLength="4"
            maxLength="30"
            required
            value={values.password || ""}
            onChange={handleChange}
          />
          <span className="login__error">{errors.password || ""}</span>
        </label> 

        <p className="login__error-button">{errorMessage}</p>

        <button
          type="submit"
          className={`login__submit-button ${
            isValid ? "" : "login__submit-button-disabled"
          }`}
          name="submit"
        >
          Войти
        </button>

        <p className="login__subtitle">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login__link">
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
