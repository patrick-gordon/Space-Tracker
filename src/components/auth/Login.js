import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Button } from "reactstrap";


function Login(props) {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [loginStatus, setLoginStatus] = useState("");

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  function login(e) {
    e.preventDefault();
    axios
      .post("", creds)
      .then((res) => {
        console.log(`login response: `, res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userid", res.data.user.id); // this may not be called userid -- check with backend or check console for res
        setLoginStatus("Success!");
        setCreds({
          username: "",
          password: "",
        });
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log(err);
        setLoginStatus(`${err}`);
        setCreds({
          username: "",
          password: "",
        });
      });
  }

  return (
    <>
      <h2>Log in to see SpaceX and Nasa Information</h2>
      <Container>
        <form onSubmit={login}>
          <label htmlFor="username">
            Username
            <input
              type="username"
              name="username"
              value={creds.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              value={creds.password}
              onChange={handleChange}
            />
          </label>
          <Button>Log In</Button>
          <p>Don't have an account? </p>
          <p>
            <Link to="/signup">Sign up here</Link>
          </p>
          {loginStatus && <p>{loginStatus}</p>}
        </form>
      </Container>
    </>
  );
}

export default Login;
