import { Route, Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  return <Route>{() => (props.loggedIn ? <Component {...props} /> : <Navigate to="/" />)}</Route>;
};

export default ProtectedRouteElement;
