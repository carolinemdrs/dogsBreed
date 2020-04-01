import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
import List from "../List";
import DogListHusky from "../Photo/HuskyPics" ;
import DogListLabrador from './../Photo/LabradorPics';
import DogListPug from './../Photo/PugPics';

export const routes = {
  login:"/",
  list: "/list",
  husky: "/husky",
  pug: "/pug",
  labrador: "/labrador",

};

function Router(props) {
    return (
      <ConnectedRouter history={props.history}>
        <Switch>
          <Route exact path={routes.labrador} component={DogListLabrador}/> 
          <Route exact path={routes.pug} component={DogListPug}/> 
          <Route exact path={routes.list} component={List}/> 
          <Route exact path={routes.husky} component={DogListHusky}/> 
          <Route exact path={routes.login} component={Login}/> 
        </Switch>
      </ConnectedRouter>
    );
}

export default Router;
