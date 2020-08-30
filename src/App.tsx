import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/home" component={Home} />
          <Route path="*" component={SignIn} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
