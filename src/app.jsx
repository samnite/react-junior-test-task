import React from 'react';
import { Switch, Route } from 'react-router-dom';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import themeFile from './util/theme';
import Navbar from './components/layout/navbar';
import Home from './pages/home';
import News from './pages/news';
import Login from './pages/login';
import NotFound from './pages/not-found';
import Profile from './pages/profile';
import AuthRoute from './util/auth-route';

const theme = createMuiTheme(themeFile);

const App = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/login" component={Login} />
          <AuthRoute path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </MuiThemeProvider>
    </>
  );
};

export default App;
