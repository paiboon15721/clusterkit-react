import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

const App = props => {
  return (
    <div>
      <h1>{props.counter}</h1>
      <button onClick={props.increment} className="btn btn-primary">
        Increment
      </button>
      <button onClick={props.decrement} className="btn btn-danger">
        Decrement
      </button>
    </div>
  );
};

export default connect(state => ({ counter: state.counter }), {
  increment,
  decrement
})(App);
