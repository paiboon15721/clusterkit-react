import React from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

const App = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        axios.post("http://localhost:4000/customers", values).then(() => {
          message.success("Add Customer success");
        });
      }
    });
  };
  const { getFieldDecorator } = props.form;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator("name", {
          rules: [{ required: true, message: "กรุณาใส่ชื่อของท่าน" }]
        })(<Input placeholder="name" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("age", {
          rules: [{ required: true }]
        })(<Input placeholder="age" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("phone", { rules: [{ required: true }] })(
          <Input placeholder="phone" />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("email", {
          rules: [{ required: true }, { type: "email" }]
        })(<Input placeholder="email" />)}
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
