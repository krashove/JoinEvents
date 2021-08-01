import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Principal from '../pages/Principal';

function AppRoute(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Principal} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRoute;