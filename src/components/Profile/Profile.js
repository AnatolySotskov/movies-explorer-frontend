import "../Profile/Profile.css";
import Header from "../Header/Header";
import { useEffect, useState } from "react";

function Profile({ loggedIn }) {
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

  return (
    <>
      <Header loggedIn={loggedIn} width={dataLayout.w} />
      <section className="profile">
        <div className="profile__block">
          <h2 className="profile__title">Привет, Анатолий!</h2>
          <form className="profile__form">
            <label className="profile__label">
              Имя
              <input
                type="text"
                className="profile__input"
                name="name"
                minLength="2"
                maxLength="30"
                required
                title="Введите имя"
              />
              <span className="profile__error"></span>
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
              />
              <span className="profile__error"></span>
            </label>
            <button className="profile__button" type="button">
              Редактировать
            </button>
            <button
              className="profile__button profile__button_exit"
              type="button"
            >
              Выйти из аккаунта
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
