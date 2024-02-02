function Footer() {
  return (
    <footer className="footer">
      <p className="footer__info">Pet-проект совместный с Яндекс.Практикум & BeatFilm.</p>
      <div className="footer__more-info">
        <p className="footer__copyright">&copy; 2023</p>
        <div className="footer__links">
          <a
            className="footer__link"
            href="https://vk.com/jeksson"
            target="_blank"
            rel="noreferrer"
          >
            VK
          </a>
          <a
            className="footer__link"
            href="https://github.com/EvgenyZaryanov"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
