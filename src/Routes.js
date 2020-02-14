import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./components/Main/Main";
import Login from "./components/Login/Login";


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;




