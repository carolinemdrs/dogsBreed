import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
import List from "../List";
import Photo from "../Photo";


export const routes = {
  login:"/",
  list: "/list",
  photo: "/photo"

};

function Router(props) {
    return (
      <ConnectedRouter history={props.history}>
        <Switch>
        <Route exact path={routes.list} component={List}/> 
        <Route exact path={routes.photo} component={Photo}/> 
        <Route exact path={routes.login} component={Login}/> 
        </Switch>
      </ConnectedRouter>
    );
}

export default Router;
