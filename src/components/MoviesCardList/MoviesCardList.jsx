import { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  const initialCardsToShow = 12;
  const additionalCardsToShow = 3;

  const allCards = [
    { MoviesCard },
    { MoviesCard },
    { MoviesCard },
    { MoviesCard },
    { MoviesCard },
    { MoviesCard },
    { MoviesCard },
    { MoviesCard },
    { MoviesCard },
    { MoviesCard },
    { MoviesCard },
    { MoviesCard },
    { MoviesCard },
    { MoviesCard },
    { MoviesCard }
  ];

  const [cardsToShow, setCardsToShow] = useState(initialCardsToShow);

  const handleShowMore = () => {
    setCardsToShow(prevCardsToShow => prevCardsToShow + additionalCardsToShow);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setCardsToShow(12);
      } else if (width >= 768) {
        setCardsToShow(8);
      } else if (width >= 425) {
        setCardsToShow(5);
      } else {
        setCardsToShow(5);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="movie-cardList">
      <ul className="movie-cardList__container">
        {allCards.slice(0, cardsToShow).map((card, index) => (
          <MoviesCard key={index} {...card} />
        ))}
      </ul>
      {cardsToShow < allCards.length && (
        <button className="movie-cardList__more-button" type="button" onClick={handleShowMore}>
          Еще
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
