import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../components/home";
import Menu from "../components/menu";

const Main = () => {
    return (
        <div>
            <Switch>
                <Route component={Home} exact path="/" />
                <Route component={Menu} path="/Menu" />
            </Switch>
        </div>
    );
};

export default Main;