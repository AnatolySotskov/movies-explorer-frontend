import "../Register/Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import Preloader from "../Preloader/Preloader";

function Register({ onRegistration, props, errorMessage, isLoading }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegistration(values.name, values.email, values.password);
  }

  function handleReset() {
    resetForm();
    props.setErrorMessage("");
  }

  console.log(errorMessage);
  return (
    <section className="register">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Link to="/" className="register__logo" onClick={handleReset}>
            <img src={logo} alt="Логотип"></img>
          </Link>
          <h2 className="register__title">Добро пожаловать!</h2>
          <form className="register__form" onSubmit={handleSubmit}>
            <label className="register__label">
              Имя
              <input
                type="name"
                className="register__input"
                minLength="2"
                maxLength="30"
                required
                name="name"
                // pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                value={values.name || ""}
                onChange={handleChange}
              />
              <span className="register__error">{errors.name || ""}</span>
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
                value={values.email || ""}
                onChange={handleChange}
                pattern="^[a-zA-Z0-9]([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+){1,30}\.([a-zA-Z]{2,4})$"
              />
              <span className="register__error">{errors.email || ""}</span>
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
                value={values.password || ""}
                onChange={handleChange}
              />
              <span className="register__error">{errors.password || ""}</span>
            </label>

            <p className="register__error-button">{errorMessage}</p>

            <button
              type="submit"
              className={`register__submit-button ${
                isValid ? "" : "register__submit-button-disabled"
              }`}
              name="submit"
            >
              Зарегистрироваться
            </button>

            <p className="register__subtitle">
              Уже зарегистрированы?
              <Link to="/signin" className="register__link">
                Войти
              </Link>
            </p>
          </form>
        </>
      )}
    </section>
  );
}

export default Register;
