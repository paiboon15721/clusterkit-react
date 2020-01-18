import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setLoading(false);
      setUsers(res.data);
    });
  }, []);

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

  return <Table loading={loading} dataSource={users} columns={columns} />;
};

export default App;
