import axios from "axios";

export const increment = () => ({ type: "INCREMENT" });
export const decrement = () => ({ type: "DECREMENT" });

export const fetchEmployee = () => dispatch => {
  dispatch({ type: "FETCH_EMPLOYEE" });

  axios.get("http://localhost:4000/employees").then(res => {
    dispatch({ type: "FETCH_EMPLOYEE_SUCCESS", payload: res.data });
  });
};
