import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Link,
  Navigate,
} from "react-router-dom";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as Auth from "../../utils/MainApi";
import * as movieApi from "../../utils/MoviesApi";
import ProtectedRoute from "../../utils/ProtectedRoute";

import {
  ERROR_PASSWORD_OR_LOGIN,
  ERROR_AUTH_TOKEN_POST,
  USER_EMAIL_EXISTS,
  ERROR_REGISTER_USER,
  ERROR_UPDATE,
  CHECK_BOX_TIME,
} from "../../utils/constants";

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ data: {} });

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);
  const [cardSaved, setCardSaved] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  const [savedSearch, setsavedSearch] = useState([]);

  const [searchInputSave, setSearchInputSave] = useState("");
  const [pageSaveSearch, setPageSaveSearch] = useState([]);

  const [checkMovies, setCheckMovies] = useState(false);
  const [checkSavedMovies, setCheckSavedMovies] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();




  // Регистрация
  function handleRegistration(name, email, password) {
    // console.log(name, email, password);
    setIsLoading(true);
    Auth.register(name, email, password)
      .then((data) => {
        handleAuthorization(email, password);
      })
      .catch((error) => {
        if (error === 409) {
          setErrorMessage(USER_EMAIL_EXISTS);
        } else {
          setErrorMessage(ERROR_REGISTER_USER);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }



  // Авторизация
  function handleAuthorization(email, password) {
    Auth.authorize(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        handleCheckToken();
        setloggedIn(true);
        navigate("/movies");
      })
      .catch((error) => {
        if (error === 401) {
          setErrorMessage(ERROR_PASSWORD_OR_LOGIN);
        } else {
          setErrorMessage(ERROR_AUTH_TOKEN_POST);
        }
      });
  }



  // Проверка токена
  function handleCheckToken() {
    const token = localStorage.getItem("token");
    if (token) {
      Auth.checkToken(token)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setloggedIn(true);
            navigate(location.pathname, { replace: true });
          }
        })
        .catch((err) => {
          console.error(`Ошибка проверки токена: ${err}`);
        });
    }
  }

  useEffect(() => {
    handleCheckToken();
  }, [loggedIn]);



  // Выход из аккаунта
  function onSignOut() {
    setloggedIn(false);
    setCurrentUser({});
    navigate("/");
    localStorage.clear();
  }

  useEffect(() => {
    if (loggedIn) {
      Auth.getInfoUser()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => console.log(`Ошибка: ${err}`));
    }
  }, [loggedIn]);



  // Обновления профиля
  function handlePatchProfile({ name, email }) {
    setIsLoading(true);
    Auth.patchProfile({ name, email })
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(ERROR_UPDATE))
      .finally(() => {
        setIsLoading(false);
      });
  }



  //карточки с апиМувис
  function getCardsData() {
    setIsLoading(true);
    movieApi
      .getCards()
      .then((data) => {
        setCards(data);
        // console.log(localStorage);
        localStorage.setItem("allMovies", JSON.stringify(data));
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
      .finally(() => {
        setIsLoading(false);
      });
  }



  //Добавление в избранное
  function handleCardLike(card) {
    Auth.createMovies(card)
      .then((newCard) => {
        setSavedMovies([newCard, ...savedMovies]);
      })
      .catch((err) => console.log(`Ошибка лайка: ${err}`));
  }

  useEffect(() => {
    if (loggedIn) {
      Auth.getSaveMovies()
        .then((data) => {
          setSavedMovies(data.reverse());
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
      const data = JSON.parse(localStorage.getItem("allMovies"));
      if (data) {
        setCards(data);
      } else {
        getCardsData();
      }
      setSearchInput(JSON.parse(localStorage.getItem("searchImput")));
      setCheckMovies(JSON.parse(localStorage.getItem("checkMovies")));
    }
  }, [loggedIn]);



  //Удаление карточки
  function handleCardDelete(movie) {
    Auth.deleteMovies(movie.id)
      .then(() => {
        const movies = savedMovies.filter((data) =>
          data.movieId === movie.id ? false : true
        );
        setSavedMovies(movies);
      })
      .catch((err) => console.log(`Ошибка удаления лайка: ${err}`));
  }



  //Поиск фильмов в мувис
  function getSearchImput() {
    let movSearch = [];
    if (checkMovies) {
      movSearch = checkBoxDuration(cards).filter(function (cardMovies) {
        return cardMovies.nameRU
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
    } else {
      movSearch = cards.filter(function (cardMovies) {
        return cardMovies.nameRU
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
    }
    setsavedSearch(movSearch);
  }

  function SearchChange(e) {
    setSearchInput(e.target.value);
    localStorage.setItem("searchImput", JSON.stringify(e.target.value));
  }




  // //Поиск фильмов в сохроненных
  function getSearchImputSaved() {
    let movSearchSave = [];
    if (checkSavedMovies) {
      movSearchSave = checkBoxDuration(savedMovies).filter(function (
        cardMovies
      ) {
        return cardMovies.nameRU
          .toLowerCase()
          .includes(searchInputSave.toLowerCase());
      });
    } else {
      movSearchSave = savedMovies.filter(function (cardMovies) {
        return cardMovies.nameRU
          .toLowerCase()
          .includes(searchInputSave.toLowerCase());
      });
    }
    setPageSaveSearch(movSearchSave);
  }

  function SearchChangeSave(e) {
    setSearchInputSave(e.target.value);
  }



  //Чекбокс в мувис 
  function checkBoxDuration(movies) {
    return movies.filter((cardMovies) => cardMovies.duration < CHECK_BOX_TIME);
  }



  //эффекты для мувис и сейфмувис 
  useEffect(() => {
    if (savedSearch.length) getSearchImput();
  }, [checkMovies]);

  useEffect(() => {
    if (searchInput) getSearchImput();
  }, [cards]);

  useEffect(() => {
    getSearchImputSaved();
  }, [checkSavedMovies]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                cardsData={savedSearch}
                onLikeClick={handleCardLike}
                deleteCardClick={handleCardDelete}
                cardSaved={savedMovies}
                flag={false}
                isLoading={isLoading}
                searchInput={searchInput}
                SearchChange={SearchChange}
                getSearchImput={getSearchImput}
                setCheckMovies={setCheckMovies}
                checkMovies={checkMovies}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                deleteCardClick={handleCardDelete}
                cardsData={pageSaveSearch}
                savedMovies={savedMovies}
                flag={true}
                SearchChangeSave={SearchChangeSave}
                getSearchImputSaved={getSearchImputSaved}
                setCheckSavedMovies={setCheckSavedMovies}
                checkSavedMovies={checkSavedMovies}
                searchInputSave={searchInputSave}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onSignOut={onSignOut}
                handlePatchProfile={handlePatchProfile}
                errorMessage={errorMessage}
              />
            }
          />

          <Route
            path="/signin"
            element={
              loggedIn ? (
                <Navigate to="/" />
              ) : (
                <Login
                  onAuthorization={handleAuthorization}
                  errorMessage={errorMessage}
                  isLoading={isLoading}
                />
              )
            }
          />

          <Route
            path="/signup"
            element={
              loggedIn ? (
                <Navigate to="/" />
              ) : (
                <Register
                  onRegistration={handleRegistration}
                  errorMessage={errorMessage}
                  isLoading={isLoading}
                />
              )
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
