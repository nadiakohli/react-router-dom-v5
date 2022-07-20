import React from 'react';
import { 
  Route, 
  Switch, 
  Redirect,
  BrowserRouter as Router, 
} from 'react-router-dom';

// Components
import Home from 'components/Home';
import Login from 'components/Login';
import NotFound from 'components/NotFound';
import AuthRoute from 'routes/AuthRoute';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Redirect exact from="/" to="/login" />
      <AuthRoute exact path="/home" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
