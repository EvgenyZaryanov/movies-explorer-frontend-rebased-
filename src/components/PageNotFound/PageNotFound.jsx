import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className="main">
      <div className="page-not-found">
        <div className="page-not-found__container">
          <h1 className="page-not-found__title">404</h1>
          <p className="page-not-found__subtitle">Страница не найдена</p>
        </div>
        <button className="page-not-found__back-button" onClick={goBack}>
          Назад
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
