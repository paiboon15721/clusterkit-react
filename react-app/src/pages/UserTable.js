import React from "react";
import { Table } from "antd";
import { useAsync } from "react-use";
import axios from "axios";

const App = () => {
  const users = useAsync(async () => {
    const { data: users } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return users;
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website"
    }
  ];

  return (
    <Table
      rowKey="id"
      loading={users.loading}
      dataSource={users.value}
      columns={columns}
    />
  );
};

export default App;
