import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./component/Main/Main";
import Login from "./component/Login/Login";
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




