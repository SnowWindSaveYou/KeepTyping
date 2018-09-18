import React, { Component } from "react";
import "./login.css";
import SubBlock from "../components/layout_components/sub_block";
import PrimaryButton from "../components/ui_components/buttons/primary_btn";

class Login extends Component {
  state = {};
  render() {
    return (
      <SubBlock className="loginP">
        <form>
          <label for="ubane">
            <b>User Name: </b>
          </label>
          <input type="text" name="uname" />
          <div>
            <label for="psw">
              <b>Password：</b>
            </label>
            <input type="password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <label>
            <input type="checkbox" checked="checked" name="remember" />
            Remember me
          </label>
          <div>
            <PrimaryButton type="button" class="cancelbtn">
              Cancel
            </PrimaryButton>
            <span class="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      </SubBlock>
    );
  }
}

export default Login;
