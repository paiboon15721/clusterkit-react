import React, { useEffect } from "react";
import { Table } from "antd";
import { connect } from "react-redux";
import { fetchEmployee } from "../actions";

const App = props => {
  useEffect(() => {
    props.fetchEmployee();
  }, []);

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
  return (
    <Table
      columns={columns}
      dataSource={props.employees}
      loading={props.loading}
    />
  );
};

export default connect(
  state => ({
    employees: state.employee.employees,
    loading: state.employee.loading
  }),
  {
    fetchEmployee
  }
)(App);
