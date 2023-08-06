import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

function Movies({ loggedIn }) {
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
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
        <Footer />
      </section>
    </>
  );
}

export default Movies;
