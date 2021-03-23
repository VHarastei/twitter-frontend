import React from 'react';
import { SignIn } from './Pages/SignIn';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './Pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
