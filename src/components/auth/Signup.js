import React, { useState } from "react";
import axios from "axios";
import { Button, Container } from "reactstrap";

export function SignUpForm(props) {
  const [newCreds, setNewCreds] = useState([]);
  const [signupStatus, setSignupStatus] = useState("");

  const handleChange = (e) => {
    setNewCreds({ ...newCreds, [e.target.name]: e.target.value });
    console.log("newCreds: ", newCreds);
  };

  function signup(e) {
    console.log(`newCreds sent to signup: `, newCreds);
    e.preventDefault();
    axios
      .post("https://space-tracker-backend.herokuapp.com/api/auth/register", newCreds)
      .then((res) => {
        console.log("response from signup call: ", res);
        setNewCreds({
          username: "",
          password: "",
        });
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setSignupStatus(`${err}`);
      });
  }

  return (
    <div>
      <h2>Sign up to create your account</h2>
      <Container>
        <form onSubmit={signup}>
          <div>
            <label htmlFor="username">
              Username
              <input
                type="username"
                name="username"
                value={newCreds.username}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                value={newCreds.password}
                onChange={handleChange}
              />
            </label>
            <Button>Sign Up</Button>
            {{ signupStatus } && <p>{signupStatus}</p>}
          </div>
        </form>
      </Container>
    </div>
  );
}
