import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoRegistration from './pages/registration/Video';
import CategoryRegistration from './pages/registration/Category';


const Page404 = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
    <h1>Ops, broke everything :O</h1>
    <p>
      <a href="/">You can play or go back home :)</a>
    </p>
    <p>
      Or <a href="https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej">learn to make the game</a>
    </p>
    {}
    <iframe
      title="Flappy Bird Game"
      src="https://mariosouto.com/flappy-bird-devsoutinho/"
      width="340"
      height="600" />
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/registration/video" component={VideoRegistration} />
      <Route path="/registration/category" component={CategoryRegistration} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
