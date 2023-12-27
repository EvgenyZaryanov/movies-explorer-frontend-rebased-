function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__content">
          <li className="portfolio__content-box">
            <a
              className="portfolio__site"
              href="https://evgenyzaryanov.github.io/how-to-learn/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <span>Статичный сайт</span>
              <span className="portfolio__arrow">↗</span>
            </a>
          </li>
          <li className="portfolio__content-box">
            <a
              className="portfolio__site"
              href="https://evgenyzaryanov.github.io/russian-travel/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <span>Адаптивный сайт</span>
              <span className="portfolio__arrow">↗</span>
            </a>
          </li>
          <li className="portfolio__content-box">
            <a
              className="portfolio__site"
              href="https://zaryanov.nomoredomainsmonster.ru/sign-in"
              target="_blank"
              rel="noreferrer"
            >
              <span>Одностраничное приложение</span>
              <span className="portfolio__arrow">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
