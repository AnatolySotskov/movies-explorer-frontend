import "../Portfolio/Portfolio.css";
import strelka from "../../../images/strelka.png";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title"> Портфолио</h2>
      <a
        href="https://github.com/AnatolySotskov/how-to-learn.git"
        className="portfolio__link"
        target="_blank"
      >
        <div className="portfolio__container">
          <p className="portfolio__text">Статичный сайт</p>
          <img
            className="portfolio__strelka"
            src={strelka}
            alt="Иконка стрелки"
          ></img>
        </div>
      </a>
      <a
        href="https://github.com/AnatolySotskov/russian-travel.git"
        className="portfolio__link"
        target="_blank"
      >
        <div className="portfolio__container">
          <p className="portfolio__text">Адаптивный сайт</p>
          <img
            className="portfolio__strelka"
            src={strelka}
            alt="Иконка стрелки"
          ></img>
        </div>
      </a>
      <a
        href="https://github.com/AnatolySotskov/react-mesto-api-full-gha.git"
        className="portfolio__link"
        target="_blank"
      >
        <div className="portfolio__container portfolio__container_last">
          <p className="portfolio__text">Одностраничное приложение</p>
          <img
            className="portfolio__strelka"
            src={strelka}
            alt="Иконка стрелки"
          ></img>
        </div>
      </a>
    </section>
  );
}

export default Portfolio;
