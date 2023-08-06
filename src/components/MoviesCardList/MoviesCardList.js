import "../MoviesCardList/MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { initialCards } from "../MoviesCard/cardsData";


function MoviesCardList() {


  return (
  <section className="movies__card-list">
      <div className="movies__card-list__box">
        {initialCards.map((film) => {
          return (
            <MoviesCard
              name={film.name}
              link={film.link}
              duration={film.duration} />
          );
        })}
      </div>
      <button className="movies__card-list__more-button" type="button">
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
