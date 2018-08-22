import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Favorite_topic from "./Favorite_topic.js";
import { Router, Route, hashHistory } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>User name</h1>
        <h3>ID</h3>
        <h3>email</h3>
        <h2>My favorite topic:</h2>
        <favorite_topic />
      </div>
    );
  }
}

export default Home;
