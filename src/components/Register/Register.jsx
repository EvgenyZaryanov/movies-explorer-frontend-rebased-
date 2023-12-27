import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-svg.svg';
import useValidationForm from '../hooks/useValidationForm';

function Register({ handleRegister }) {
  const { values, handleChange, resetForm, errors, isValid } = useValidationForm();

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values);
  }

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className="main">
      <form name="registration" className="auth-form" noValidate onSubmit={handleSubmit}>
        <div className="auth-form__container">
          <Link to="/" className="auth-form__container-link">
            <img src={logo} alt="Логотип проекта" className="auth-form__logo" />
          </Link>
          <h1 className="auth-form__title">Добро пожаловать!</h1>
          <h2 className="auth-form__input-title">Имя</h2>
          <input
            className={`auth-form__input ${errors.name && 'auth-form__error'}`}
            onChange={handleChange}
            value={values.name || ''}
            type="name"
            name="name"
            placeholder="Введите ваше имя"
            autoComplete="off"
            required
            minLength={2}
            maxLength={30}
          />
          <span className="auth-form__error">{errors.name || ''}</span>
          <h2 className="auth-form__input-title">Email</h2>
          <input
            className={`auth-form__input ${errors.email && 'auth-form__error'}`}
            onChange={handleChange}
            value={values.email || ''}
            type="email"
            name="email"
            placeholder="Введите ваш email"
            required
            autoComplete="off"
          />
          <span className="auth-form__error">{errors.email || ''}</span>
          <h2 className="auth-form__input-title">Пароль</h2>
          <input
            className={`auth-form__input ${errors.password && 'auth-form__error'}`}
            onChange={handleChange}
            value={values.password || ''}
            type="password"
            name="password"
            minLength={6}
            maxLength={30}
            placeholder="Введите ваш пароль"
            required
            autoComplete="off"
          />
          <span className="auth-form__error">{errors.password || ''}</span>
          <Link to="/movies" className="auth-form__button">
            <button
              type="submit"
              className={`auth-form__submit-button ${
                !isValid && 'auth-form__submit-button_disabled'
              }`}
              disabled={!isValid}
            >
              Зарегистрироваться
            </button>
          </Link>
          <p className="auth-form__text">
            Уже зарегистрированы?
            <Link to="/signin" className="auth-form__link">
              Войти
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}

export default Register;
