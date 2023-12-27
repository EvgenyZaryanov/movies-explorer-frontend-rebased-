// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo-svg.svg';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Логотип сайта" className="header__logo" />
        <nav className="header__navigation">
          <Link to="/signup" className="header__link header__link_black">
            Регистрация
          </Link>
          <Link to="/signin" className="header__link">
            Войти
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
