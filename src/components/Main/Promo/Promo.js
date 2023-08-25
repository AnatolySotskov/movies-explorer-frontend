import "../Promo/Promo.css";
import banner from "../../../images/spiralka.png"

function Promo() {
    return (
      <section className="main-banner">
            <h1 className="main-banner__text">Учебный проект студента факультета Веб-разработки.</h1>
            <img className="main-banner__img" src={banner} alt="Спиралька"></img>
      </section>
    );
  }
  
  export default Promo;