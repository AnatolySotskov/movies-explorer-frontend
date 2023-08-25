import "../MoviesCardList/MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  cardsData,
  onLikeClick,
  onDeleteClick,
  cardSaved,
  flag,
  searchInput,
  query
}) {
  const location = useLocation().pathname;

  const [shownsMovies, setShownsMovies] = useState(0);

  //кол-во карточек при расширении экрана
  function countDisplayСard() {
    const display = window.innerWidth;
    if (display > 1279) {
      setShownsMovies(16);
    } else if (display > 989) {
      setShownsMovies(12);
    } else if (display > 730) {
      setShownsMovies(8);
    } else {
      setShownsMovies(5);
    }
  }

  useEffect(() => {
    countDisplayСard();
  }, [cardsData]);

  useEffect(() => {
    // setTimeout(() => {
    //   window.addEventListener("resize", countDisplayСard);
    // }, 500);
    window.addEventListener("resize", countDisplayСard);
    return () => {
      window.removeEventListener("resize", countDisplayСard);
    };
  });

  //кол-во добавление карточек при нажатии кнопки ЕЩЕ
  function showsMoreCard() {
    const display = window.innerWidth;
    if (display > 1279) {
      setShownsMovies(shownsMovies + 4);
    } else if (display > 989) {
      setShownsMovies(shownsMovies + 3);
    } else if (display > 730) {
      setShownsMovies(shownsMovies + 2);
    } else {
      setShownsMovies(shownsMovies + 2);
    }
  }

  return (
    <section className="movies__card-list">

      {!cardsData.length && query && (
        <p className="movies__card-list-error">Ничего не найдено</p>
      )}

      <div className="movies__card-list__box">
        {(location === "/saved-movies"
          ? cardsData
          : cardsData?.slice(0, shownsMovies)
        ).map((movie) => {
          return (
            <MoviesCard
              key={movie.id || movie._id}
              movie={movie}
              onLikeClick={onLikeClick}
              onDeleteClick={onDeleteClick}
              cardsData={cardsData}
              cardSaved={cardSaved}
              flag={flag}
            />
          );
        })}
      </div>

      {cardsData?.length > shownsMovies && location === "/movies" ? (
        <button
          className="movies__card-list__more-button"
          onClick={showsMoreCard}
        >
          Ещё
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

export default MoviesCardList;
