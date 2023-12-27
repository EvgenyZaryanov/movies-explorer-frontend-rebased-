import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <main className="main">
      <div className="page-not-found">
        <div className="page-not-found__container">
          <h1 className="page-not-found__title">404</h1>
          <p className="page-not-found__subtitle">Страница не найдена</p>
        </div>
        <Link to="/" className="page-not-found__back-button">
          Назад
        </Link>
      </div>
    </main>
  );
}

export default PageNotFound;
