import "../Techs/Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__name-block">Технологии</h2>
      <div className="techs__block">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
          применили в дипломном проекте.
        </p>
        <div className="techs__elements">
          <p className="techs__element">HTML</p>
          <p className="techs__element">CSS</p>
          <p className="techs__element">JS</p>
          <p className="techs__element">React</p>
          <p className="techs__element">Git</p>
          <p className="techs__element">Express.js</p>
          <p className="techs__element">mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;
