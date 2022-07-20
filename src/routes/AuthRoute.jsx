import { Route, Redirect } from 'react-router-dom';

const AuthRoute = (props) => {
  const data = localStorage.getItem('credentials');

  if (!data) return <Redirect to="/login" />

  return <Route {...props} />;
}

export default AuthRoute;
