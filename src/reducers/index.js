import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {list} from "./list"


export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    list
  });
