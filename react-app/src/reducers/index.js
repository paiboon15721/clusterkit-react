import { combineReducers, createStore } from "redux";
import counter from "./counter";
import user from "./user";

const reducers = combineReducers({ user, counter });

const store = createStore(reducers);

export default store;
