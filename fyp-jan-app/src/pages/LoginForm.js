import React, { useState } from "react";
import FormInput from "../components/FormInput";

const LoginForm = ({ handleLogin }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Username"
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        placeholder="Enter your username"
        required
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Enter your password"
        required
      />
      <button type="submit" className="btn btn-primary">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
