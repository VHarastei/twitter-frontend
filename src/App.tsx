import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Pages/Home';
import { SignIn } from './Pages/SignIn';

function App() {
  return (
    <Switch>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
