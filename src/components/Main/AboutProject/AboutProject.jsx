function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__content">
        <div className="about-project__info">
          <h3 className="about-project__info-header">Проект включал 5 этапов</h3>
          <p className="about-project__info-description">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>
        <div className="about-project__info">
          <h3 className="about-project__info-header">
            Под выполнение проекта было заложено 4 недели
          </h3>
          <p className="about-project__info-description">
            У каждого спринта был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            сдать проект в срок.
          </p>
        </div>
      </div>
      <div className="about-project__time">
        <h3 className="about-project__time-header">1 неделя</h3>
        <h3 className="about-project__time-header about-project__time-header_black">3 недели</h3>
        <p className="about-project__time-description">Back-end</p>
        <p className="about-project__time-description">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
