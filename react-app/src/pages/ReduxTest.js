import React from "react";
import { connect } from "react-redux";

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

const mapDispatchToProps = {
  increment: function() {
    return {
      type: "INCREMENT"
    };
  },
  decrement: function() {
    return {
      type: "DECREMENT"
    };
  }
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
