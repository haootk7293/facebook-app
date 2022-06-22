import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePageLayout from '../components/layouts/HomePageLayout';
import ProfilePageLayout from '../components/layouts/ProfilePageLayout';
import HomePage from '../components/pages/home';
import LoginPage from '../components/pages/login';
import LogoutPage from '../components/pages/logout';
import PageNotFound from '../components/pages/notfound';
import ProfilePage from '../components/pages/profile';
import RegisterPage from '../components/pages/signup';
import { PrivateRoute } from './PrivateRoute';

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          exact={true}
          path="/"
          component={HomePage}
          layout={HomePageLayout}
        />
        <PrivateRoute
          exact={true}
          path="/profile"
          component={ProfilePage}
          layout={ProfilePageLayout}
        />
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" component={LogoutPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
