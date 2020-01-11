import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Home from './pages/home';
import News from './pages/news';
import Login from './pages/login';
import NotFound from './pages/not-found';
import Profile from './pages/profile';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
