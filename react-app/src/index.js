import React from "react";
import ReactDOM from "react-dom";
import LoginApp from "./LoginApp";
import CommentApp from "./CommentApp";

// const App = () => (
//   <div className="container">
//     <div className="row">
//       <div className="col">
//         <LoginApp name="Login App 1" />
//       </div>
//       <div className="col">
//         <LoginApp name="Login App 2" />
//       </div>
//     </div>
//   </div>
// );

ReactDOM.render(<CommentApp />, document.getElementById("root"));
