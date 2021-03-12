import React from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Fail from "./pages/Fail";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Success />
        </Route>
        <Route exact path="/fail">
          <Fail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
