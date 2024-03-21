// Create react login page with react router dom
import React, { useState } from "react";
import axios from "axios";

const Log = ({ handleLogin, setMessage }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const [error, setError] = useState();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://bryanhuvelin.fr/api/users/login", formData)
      .then((res) => {
        setMessage([res.data.message]);
        handleLogin(res.data.token, res.data.username);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  return (
    <>
      <div className="login_form">
        <section className="heading">
          <h1>Login</h1>
          <p className="error_message">{error && error}</p>
        </section>
        <p>Please login into your account</p>
        <section className="form">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                autoComplete="username"
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                placeholder="Enter your name"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                autoComplete="current-password"
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Log;
