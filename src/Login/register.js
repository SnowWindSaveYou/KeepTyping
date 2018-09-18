import React, { Component } from "react";
import PrimaryButton from "../components/ui_components/buttons/primary_btn";

class Register extends Component {
  state = {};
  render() {
    return (
      <form>
        <div>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" />

          <label for="psw">
            <b>Password</b>
          </label>
          <input type="password" />

          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input type="password" />
          <hr />
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>
          </p>

          <PrimaryButton type="submit" class="registerbtn">
            Register
          </PrimaryButton>
        </div>

        <div class="container signin">
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </form>
    );
  }
}

export default Register;
