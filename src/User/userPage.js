import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div class="userprofio">
        <ul class="nav nav-pills pull-right">
          <li role="presentation" id="homeHyperlink" class="active">
            <a href="">Home</a>
          </li>
          <li role="presentation" id="addHyperLink">
            <a href="/">delet</a>
          </li>
          <li role="presentation" id="btnProfile">
            <a href="/">Profile</a>
          </li>
          <li role="presentation">
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
