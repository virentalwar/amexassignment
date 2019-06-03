import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import BodyCarousel from './BodyCarousel';
import Footer from './Footer';
import Welcome from './Welcome';

import history from '../history';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={BodyCarousel} />
              <Route path="/user" exact component={Welcome} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
