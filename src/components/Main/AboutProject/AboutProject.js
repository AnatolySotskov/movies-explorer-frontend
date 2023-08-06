import "../AboutProject/AboutProject.css";

function AboutProject() {
  return (
    <section className="project">
      <h2 className="project__about-project">О проекте</h2>
      <div className="project__block">
        <div className="project__column">
          <p className="project__title">Дипломный проект включал 5 этапов</p>
          <p className="project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="project__column">
          <p className="project__title">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project__plan">
        <p className="project__week project__week_1">1 неделя</p>
        <p className="project__week project__week_4">4 недели</p>
        <p className="project__technology">Back-end</p>
        <p className="project__technology">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
