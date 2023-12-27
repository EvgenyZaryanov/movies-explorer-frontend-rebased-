import '../../index.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HeaderLoggedIn from '../HeaderLoggedIn/HeaderLoggedIn';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const navigate = useNavigate();
  const location = useLocation();
  const validPathsForFooter = ['/', '/movies', '/saved-movies'];
  const validPathsForHeaderLoggedIn = ['/movies', '/saved-movies', '/profile'];

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {location.pathname === '/' && <Header />}
        {validPathsForHeaderLoggedIn.includes(location.pathname) && <HeaderLoggedIn />}
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {validPathsForFooter.includes(location.pathname) && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
