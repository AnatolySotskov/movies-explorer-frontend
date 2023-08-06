import { useLocation } from "react-router-dom";
import "../MoviesCard/cardsData";
import "../MoviesCard/MoviesCard.css"

function MoviesCard({name, link, duration}) {

  const { pathName} = useLocation;


  return (
    <article className="movie">
      <div className="movie__block">
        <div className="movie__content">
          <p className="movie__image">
            <img className="movie__photo" src={link} alt="Фильм" />
          </p>
          <h2 className="movie__title">{name}</h2>
          {pathName === "/saved-movies"
        ? <button className="movie__button" type="button" />
        : <button className="movie__button movie__button-delete" type="button" />}
          <p className="movie__duration">{duration}</p>
        </div>
      </div>
    </article>
    
  );
}

export default MoviesCard;
