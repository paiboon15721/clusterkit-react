import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../mobxStores";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary"
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  }
];
const App = () => {
  const { counter } = useStore();

  useEffect(() => {
    counter.fetchEmployees();
  }, []);

  return (
    <div>
      <h1>{counter.counter}</h1>
      <h1>{counter.fullName}</h1>
      <button
        onClick={() => (counter.counter += 1)}
        className="btn btn-primary"
      >
        Increment
      </button>
      <button
        onClick={() => (counter.counter += -1)}
        className="btn btn-danger"
      >
        Decrement
      </button>
      <Table columns={columns} dataSource={counter.employees} />
    </div>
  );
};

export default observer(App);
