// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo-svg.svg';
import Navigation from '../Navigation/Navigation';

function HeaderLoggedIn() {
  return (
    <header className="header-loggedIn">
      <div className="header-loggedIn__container">
        <Link to="/">
          <img src={logo} alt="Логотип проекта" className="header-loggedIn__logo" />
        </Link>
        <ul className="header-loggedIn__links">
          <li className="header-loggedIn__link">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `header-loggedIn__hyperlink ${isActive ? 'header-loggedIn__hyperlink_active' : ''}`
              }
            >
              Фильмы
            </NavLink>
          </li>
          <li className="header-loggedIn__link">
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `header-loggedIn__hyperlink ${isActive ? 'header-loggedIn__hyperlink_active' : ''}`
              }
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink to="/profile" className="header-loggedIn__profile">
          Аккаунт
        </NavLink>
        <Navigation />
      </div>
    </header>
  );
}

export default HeaderLoggedIn;
