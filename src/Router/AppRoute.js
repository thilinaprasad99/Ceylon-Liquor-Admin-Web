import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import ArracksScreens from '../Screens/ArracksScreens/ArracksScreens';

const AppRoute = () => {
  return (
    <div>
      <Router>
        <main>
          <Switch>
            <Route path="/Arracks" exact>
              <ArracksScreens />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default AppRoute;
