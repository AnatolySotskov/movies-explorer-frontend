import { Link, useLocation } from "react-router-dom";
import "../MoviesCard/MoviesCard.css";
import { useState, useEffect } from "react";

function MoviesCard({
  movie,
  onLikeClick,
  onDeleteClick,
  handleCardLike,
  handleCardDelete,
  cardSaved,
  flag,
}) {
  const [saved, setSaved] = useState(false);
  const location = useLocation();

  function handleLikeClick() {
    const cardInfo = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
    onLikeClick(cardInfo);
  }

  function handleDeleteClick() {
    flag ? onDeleteClick({ id: movie.movieId }) : onDeleteClick(movie);
  }

  // function cardCheck() {
  //   const savedList = cardSaved.map((l) => l.movieId);
  //   return savedList.includes(movie.id);
  // }

  useEffect(
    function () {
      if (!flag) {
        const savedList = cardSaved.map((l) => l.movieId);
        // console.log(savedList)
        // console.log(cardSaved);
        setSaved(savedList.includes(movie.id));
      }
    },
    [, cardSaved]
  );

  return (
    <article className="movie">
      <div className="movie__block">
        <div className="movie__content">
          <p className="movie__image">
            <a
              className="movie__link-photo"
              href={movie.trailerLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="movie__photo"
                src={
                  location.pathname === "/movies"
                    ? `https://api.nomoreparties.co${movie.image.url}`
                    : movie.image
                }
                alt={movie.nameRU}
              />
            </a>
          </p>
          <h2 className="movie__title">{movie.nameRU}</h2>

          {location.pathname === "/saved-movies" ? (
            <button
              className="movie__button_delete"
              type="submit"
              onClick={handleDeleteClick}
            ></button>
          ) : (
            <button
              className={`movie__button ${saved ? "movie__button_active" : ""}`}
              type="submit"
              onClick={saved ? handleDeleteClick : handleLikeClick}
            ></button>
          )}

          <p className="movie__duration">{`${Math.floor(
            movie.duration / 60
          )}ч ${movie.duration % 60}м`}</p>
        </div>
      </div>
    </article>
  );
}

export default MoviesCard;
