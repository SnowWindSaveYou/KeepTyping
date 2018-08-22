import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Favorite_topic extends Component {
  render() {
    var topics = [];

    for (var i = 1; i <= 5; i++) {
      topics.push(
        <button onclick="">
          topic
          {i}
        </button>
      );
    }
    return topics;
  }
}

export default Favorite_topic;
