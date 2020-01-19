import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import counter from "./counter";
import user from "./user";
import employee from "./employee";

const reducers = combineReducers({ user, counter, employee });

const store = createStore(reducers, applyMiddleware(ReduxThunk));

console.log(store.getState());

export default store;
