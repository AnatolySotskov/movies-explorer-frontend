import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

function Movies({
  loggedIn,
  cardsData,
  onLikeClick,
  deleteCardClick,
  cardSaved,
  flag,
  isLoading,
  SearchChange,
  getSearchImput,
  checkMovies,
  setCheckMovies,
  searchInput,
}) {

  
  const [dataLayout, setData] = useState({
    w: 0,
  });

  useEffect(() => {
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
      <main className="movies">
        <SearchForm
          SearchChange={SearchChange}
          getSearchImput={getSearchImput}
          // checkBoxDuration={checkBoxDuration}
          required={true}
          checkMovies={checkMovies}
          setCheckMovies={setCheckMovies}
          searchInput={searchInput}
        />

        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            cardsData={cardsData}
            onLikeClick={onLikeClick}
            onDeleteClick={deleteCardClick}
            cardSaved={cardSaved}
            flag={flag}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
