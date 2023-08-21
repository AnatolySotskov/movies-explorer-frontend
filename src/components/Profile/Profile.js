import "../Profile/Profile.css";
import Header from "../Header/Header";
import { useContext, useEffect, useState } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ loggedIn, props, onSignOut, handlePatchProfile, isLoading, errorMessage}) {

  const currentUser = useContext(CurrentUserContext);
  const [disabledInput, setDisabledInput] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [dataLayout, setData] = useState({
    w: 0,
  });

  useEffect(() => {
    console.log(dataLayout.w);
    setData({
      w: window.outerWidth,
    });
    window.addEventListener("resize", resize);
  }, []);

  const resize = (e) => {
    setData({
      w: e.target.outerWidth,
    });
  };

  const { values, errors, isValid, handleChange, resetForm, setValues } =
    useFormWithValidation();

  useEffect(() => {
    const { name, email } = currentUser;
    setValues({ name, email });
  }, [currentUser, setValues]);

  function handleEdit() {
    setIsEdit(true);
    setDisabledInput(false);
  }

  function handleSubmitClick(e) {
    setIsEdit(false);
    e.preventDefault();
    handlePatchProfile({ name: values.name, email: values.email });
    setDisabledInput(true);
  }

  return (
    <>
      <Header loggedIn={loggedIn} width={dataLayout.w} />
      <section className="profile">
        <div className="profile__block">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <form className="profile__form" onSubmit={handleSubmitClick}>
            <label className="profile__label">
              Имя
              <input
                type="name"
                className="profile__input"
                name="name"
                minLength="2"
                maxLength="30"
                required
                title="Введите имя"
                pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                value={values.name || ""}
                onChange={handleChange}
                disabled={disabledInput}

              />
              <span className="profile__error">{errors.name || ""}</span>
            </label>
            <label className="profile__label">
              Email
              <input
                type="email"
                className="profile__input"
                name="email"
                minLength="2"
                maxLength="30"
                required
                value={values.email || ""}
                onChange={handleChange}
                disabled={disabledInput}
              />
              <span className="profile__error">{errors.email || ""}</span>
            </label>

            <p className="profile__error-button">{errorMessage}</p>


            {isEdit ? (
              <button
                type="submit"
                className={`profile__button-saved ${
                  isValid ? "" : "profile__button-saved-disabled"
                }`}
                name="submit"
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  className="profile__button"
                  type="button"
                  onClick={handleEdit}
                >
                  Редактировать
                </button>

                <button
                  className="profile__button profile__button_exit"
                  type="button"
                  onClick={onSignOut}
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
