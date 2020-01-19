const { createStore, combineReducers } = require("redux");

function user(state = { name: "" }, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const reducers = combineReducers({ user, counter });

const store = createStore(reducers);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
