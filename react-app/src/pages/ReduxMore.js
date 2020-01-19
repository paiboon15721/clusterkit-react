import React from "react";
import { Progress } from "antd";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

const App = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Progress type="circle" percent={props.counter} />
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
