import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <h1>Clic Counter </h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={() => (<h2>Page introuvable</h2>)} />
        </Switch>
      </Router>
    )
  }
}

export default App;
