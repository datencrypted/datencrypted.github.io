import React, { useState } from "react";
import axios from "axios";

const Register = ({ setMessage, handleLogin }) => {
  //REGEX FOR USERNAME AND PASSWORD VALIDATION
  const usernameRegex = /^[a-zA-Z0-9]{3,23}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,23})/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;

  //STATE FOR INPUTS
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState();

  const { username, email, password, password2 } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    //check if username is valid
    if (!usernameRegex.test(username)) {
      setError("Username must be between 3 and 23 characters");
      return;
    }

    //check if email is valid
    if (!emailRegex.test(email)) {
      setError("Email is not valid");
      return;
    }

    //check if password is valid
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be between 8 and 23 characters and contain at least one uppercase letter, one lowercase letter and one number"
      );
      return;
    }
    //check if passwords match

    if (password !== password2) {
      setError("passwords do not match");
    } else {
      const userData = {
        username,
        email,
        password,
      };
      axios
        .post("https://bryanhuvelin.fr/api/users/register", userData)
        .then((res) => {
          console.log(res);
          setMessage(res.data.message);
          handleLogin(res.data.token, res.data.username);
        })
        .catch((err) => {
          const response = err.response.data;
          if (response.username) {
            setError(response.username.message);
          } else if (response.email) {
            setError(response.email.message);
          }
        });
    }
  };
  return (
    <>
      <div className="register-form">
        <section className="heading">
          <h1>Register</h1>
          <p className="error_message">{error && error}</p>
        </section>
        <section className="form">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              Username :
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              E-mail :
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email address"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              Password :
              <input
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
              Confirm password :
              <input
                type="password"
                className="form-control"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirm your password"
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
export default Register;
