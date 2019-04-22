import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Main from './components/Main';
import PhotoGrid from './containers/PhotoGrid';
import Single from './containers/Single';

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Route path='/' component={Main} />
      <Route exact path='/' component={PhotoGrid} />
      <Route path='/view/:postId' component={Single} />
    </Router>
  </Provider>
);

export default Routes;
