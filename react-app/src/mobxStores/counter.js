import axios from "axios";

export default () => ({
  counter: 5,
  name: "myname",
  lastName: "mylastname",
  employees: [],
  get fullName() {
    return `${this.name} ${this.lastName}`;
  },
  async fetchEmployees() {
    const { data } = await axios.get("http://localhost:4000/employees");
    this.employees = data;
  }
});
