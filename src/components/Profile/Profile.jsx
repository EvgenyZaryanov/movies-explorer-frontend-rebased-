import React from 'react';
import { Link } from 'react-router-dom';
import useValidationForm from '../hooks/useValidationForm';

function Profile({ handleLogin }) {
  const { values, handleChange, resetForm, errors, isValid } = useValidationForm();

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values);
  }

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__greeting">Привет, Евгений!</h1>
          <form name="profile-form" className="profile-form" noValidate onSubmit={handleSubmit}>
            <div className="profile-form__name-container">
              <label className="profile-form__label">Имя</label>
              <input
                className={`profile-form__input ${errors.name && 'profile-form__paragraph-error'}`}
                placeholder="Введите ваше имя"
                onChange={handleChange}
                value={values.name || ''}
                type="name"
                name="name"
                autoComplete="off"
                required
                minLength={2}
                maxLength={30}
              ></input>
            </div>
            <p className="profile-form__paragraph">
              <span className="profile-form__paragraph-error">{errors.name || ''}</span>
            </p>
            <div className="profile-form__email-container">
              <label className="profile-form__label">E-mail</label>
              <input
                className={`profile-form__input ${errors.email && 'profile-form__paragraph-error'}`}
                placeholder="Введите ваш email"
                onChange={handleChange}
                value={values.email || ''}
                type="email"
                name="email"
                required
                autoComplete="off"
              ></input>
            </div>
            <p className="profile-form__paragraph">
              <span className="profile-form__paragraph-error">{errors.email || ''}</span>
            </p>
            <div className="profile-form__buttons">
              <button
                type="submit"
                className={`profile-form__button ${!isValid && 'profile-form__button_disabled'}`}
                disabled={!isValid}
              >
                Редактировать
              </button>
              <Link to="/">
                <button type="button" className="profile-form__button profile-form__button_red">
                  Выйти из аккаунта
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Profile;
