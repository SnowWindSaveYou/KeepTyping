import React, { Component } from "react";
import "./Thread.css";
import ThreadDetail from "../ThreadDetail";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Thread extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>movie thread</h1>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
        <button>search</button>
        <hr />

        <div class="vertical-menu">
          <a href="#" class="active">
            Threads
          </a>

          <a href="./threadDetail">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
        </div>

        <div class="create">
          <input type="submit" value="Create a new thread" />
        </div>
      </div>
    );
  }
}

export default Thread;
