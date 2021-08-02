import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Forget from '../pages/Forget';
import Principal from '../pages/Principal';

function AppRoute(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Principal} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/forget" component={Forget} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRoute;