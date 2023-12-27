import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="burger-menu" type="button" onClick={handleToggleMenu}></button>
      {isOpen && (
        <>
          <div className="burger-popup">
            <button
              className="burger-popup__close-button"
              type="button"
              onClick={handleToggleMenu}
            ></button>
            <ul className="burger-popup__links">
              <li>
                <NavLink
                  exact
                  to="/"
                  className={({ isActive }) =>
                    `burger-popup__hyperlink ${isActive ? 'burger-popup__hyperlink_active' : ''}`
                  }
                >
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    `burger-popup__hyperlink ${isActive ? 'burger-popup__hyperlink_active' : ''}`
                  }
                >
                  Фильмы
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) =>
                    `burger-popup__hyperlink ${isActive ? 'burger-popup__hyperlink_active' : ''}`
                  }
                >
                  Сохраненные фильмы
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className="burger-popup__profile-link">
                  Аккаунт
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="burger-overlay" onClick={handleToggleMenu} />
        </>
      )}
    </>
  );
};

export default Navigation;
