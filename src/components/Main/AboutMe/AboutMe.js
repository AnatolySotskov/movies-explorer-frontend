import "../AboutMe/AboutMe.css";
import photo from "../../../images/ava.png";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <section className="AboutStudent">
      <h2 className="AboutStudent__name-block">Студент</h2>
      <div className="AboutStudent__block">
        <div className="AboutStudent__information">
          <h2 className="AboutStudent__name">Анатолий</h2>
          <p className="AboutStudent__profession">
            Фронтенд-разработчик, 28 лет
          </p>
          <p className="AboutStudent__text">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
            экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
            слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
            С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
            После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься
            фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <Link
            to="https://github.com/AnatolySotskov?tab=repositories"
            className="AboutStudent__link"
            target="_blank"
          >
            Github
          </Link>
        </div>
        <img
          className="AboutStudent__img"
          src={photo}
          alt="Фото студента"
        ></img>
      </div>
    </section>
  );
}

export default AboutMe;
