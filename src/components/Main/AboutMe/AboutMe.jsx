function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__content">
          <div className="about-me__info">
            <h3 className="about-me__info-header">Евгений</h3>
            <h4 className="about-me__info-subheader">Фронтенд-разработчик, 31 год</h4>
            <p className="about-me__info-description">
              Я родился и живу в Москве, закончил факультет глобальных процессов МГУ, по
              специальности международные отношения. С 2015 года работал в НКО, занимающейся
              внешнеполитической деятельностью. С весны 2023 года решил сменить род деятельности и
              занялся программированием.
            </p>
            <a
              className="about-me__info-github"
              href="https://github.com/EvgenyZaryanov"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img
            className="about-me__photo"
            src="/src/images/profile-photo3.jpg"
            alt="моя фотография профиля"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
