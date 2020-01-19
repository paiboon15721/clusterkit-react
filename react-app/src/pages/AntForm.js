import React from "react";
import { Form, Input, Button } from "antd";

const App = props => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  console.log(props);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        <Input placeholder="name" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="age" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="phone" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="email" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: "addCustomer " })(App);
