import React from "react";
import { Modal, Form, Input, Button } from "antd";
import './Login.css';

const LoginForm = ({ visible, onCancel }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    // Handle form submission logic here
  };

  return (
    <Modal
      title="Log In"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Log In
        </Button>,
      ]}
      className="login-form"
    >
        <br />
      <Form form={form} name="loginForm">
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginForm;
