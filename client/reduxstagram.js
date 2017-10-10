import React from 'react';
import { render } from 'react-dom';

// css
import css from './styles/style.styl';

// import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react-router
import { Router, Route, IndexRoute, browseHistory } from 'react-router'

const router = (
  <Router history={browseHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path='/view/:postId' component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));
