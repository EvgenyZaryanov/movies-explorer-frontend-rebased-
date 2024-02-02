import profilePhoto from '../../../images/profile-photo3.png';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Автор</h2>
        <div className="about-me__content">
          <div className="about-me__info">
            <h3 className="about-me__info-header">Евгений</h3>
            <h4 className="about-me__info-subheader">Фулстек-разработчик, 31 год</h4>
            <p className="about-me__info-description">
              Родился и живу в Москве, имею оконченное высшее образование МГУ. Есть опыт
              коммерческой разработки. Также имею трудовой стаж в качестве руководителя проектов и
              координатора программ, что позволяет вглянуть на процесс разработки под разными
              углами. С радостью стану частью дружной команды разработчиков, нацеленных на
              результат.
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
          <img className="about-me__photo" src={profilePhoto} alt="моя фотография профиля" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
