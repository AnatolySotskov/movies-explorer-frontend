import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__info">
        <p className="footer__copyright">© 2023</p>
        <div className="footer__links">
          <Link
            to="https://practicum.yandex.ru/"
            target="_blank"
            className="footer__link"
          >
            Яндекс.Практикум
          </Link>
          <Link
            to="https://github.com/AnatolySotskov"
            target="_blank"
            className="footer__link"
          >
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
