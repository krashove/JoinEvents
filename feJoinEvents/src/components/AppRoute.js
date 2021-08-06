import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Forget from "../pages/Forget";
import Principal from "../pages/Principal";
import ResetPass from "../pages/ResetPass";
import GenerarEvento from "../pages/GenerarEvento";
import EventDetails from "../pages/EventDetails";
import ParticiparEvento from "../pages/ParticiparEvento";
import Profile from "../pages/Profile";

function AppRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forget" component={Forget} />
        <Route exact path="/pasword_reset/:id" component={ResetPass} />
        <Route exact path="/genevento" component={GenerarEvento} />
        <Route exact path="/eventdetails/:id" render={(props) => <EventDetails parametros={props.match.params} /> } />
        <Route exact path="/eventparticipation/:id" render={(props) => <ParticiparEvento parametros={props.match.params} /> } />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoute;
