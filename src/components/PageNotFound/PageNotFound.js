import "../PageNotFound/PageNotFound.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  const pageBack = () => navigate(-1);

  return (
    <section className="pageNotFound">
      <div className="pageNotFound__block">
        <h1 className="pageNotFound__title">404</h1>
        <p className="pageNotFound__subtitle">Страница не найдена</p>
      </div>

      <button className="pageNotFound__link-back" onClick={pageBack}>
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
