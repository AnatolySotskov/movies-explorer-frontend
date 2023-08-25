import "../SavedMovies/SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function SavedMovies({
  loggedIn,
  deleteCardClick,
  flag,
  getSearchImputSaved,
  SearchChangeSave,
  cardsData,
  savedMovies,
  setCheckSavedMovies,
  checkSavedMovies,
  searchInputSave,
  query,
}) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();

  const [dataLayout, setData] = useState({
    w: 0,
  });

  useEffect(() => {
    // console.log(dataLayout.w);
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

  useEffect(() => {
    getSearchImputSaved();
  }, [savedMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} width={dataLayout.w} />
      <main className="saved-movies">
        <SearchForm
          SearchChange={SearchChangeSave}
          getSearchImput={getSearchImputSaved}
          // required={false}
          setCheckMovies={setCheckSavedMovies}
          checkMovies={checkSavedMovies}
          searchInput={searchInputSave}
        />

        <MoviesCardList
          query={query}
          onDeleteClick={deleteCardClick}
          cardsData={cardsData}
          flag={flag}
        />
      </main>
      <Footer />
    </>
  );
}
export default SavedMovies;
