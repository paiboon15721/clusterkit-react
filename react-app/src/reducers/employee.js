const initialState = {
  employees: [],
  loading: false
};

function employee(state = initialState, action) {
  switch (action.type) {
    case "FETCH_EMPLOYEE":
      return { ...state, loading: true };
    case "FETCH_EMPLOYEE_SUCCESS":
      return { ...state, employees: action.payload, loading: false };
    default:
      return state;
  }
}

export default employee;
