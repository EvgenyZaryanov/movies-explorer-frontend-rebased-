// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavTab from '../NavTab/NavTab';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Сервис по поиску фильмов <br />
          <span className="promo__title promo__title_color">Movies Explorer</span>
        </h1>
        <NavTab />
      </div>
    </section>
  );
}

export default Promo;
