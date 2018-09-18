import React, { Component } from "react";
import "./App.css";
import Topic from "./Topic.js";
import Home from "./Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ForumDetail from "./ForumDetail";
import Login from "./Login/login";
import Register from "./Login/register";
import Test from "./page_templates/static_page/page_test";
import PrimaryButton from "./components/ui_components/buttons/primary_btn";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div class="text">
            {/* main linked */}
            <center>
              <h1>Welcome</h1>
              <input type="text" name="search" />
              <PrimaryButton
                onClick={() => {
                  console.log("sss");
                }}
              >
                <Link to="./Topic">search</Link>
              </PrimaryButton>
              <PrimaryButton
                onClick={() => {
                  console.log("sss");
                }}
              >
                <Link to="/test">Home</Link>
              </PrimaryButton>
              <PrimaryButton
                onClick={() => {
                  console.log("sss");
                }}
              >
                <Link to="./login">Login</Link>
              </PrimaryButton>
              <PrimaryButton
                onClick={() => {
                  console.log("sss");
                }}
              >
                <Link to="./register">Register</Link>
              </PrimaryButton>
            </center>
          </div>
          <hr />
          <Route path="/Topic" component={Topic} />
          <Route path="/Home" component={Home} />
          <Route path="/ForumDetail" component={ForumDetail} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/Test" component={Test} />
        </div>
      </Router>
    );
  }
}

export default App;
