/**
 * Top Block
 */

import React, { Component } from "react";
import "./style.css";

class TopBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.props.style
        ? this.props.style
        : {
            color: "#aaa"
          }
    };
  }

  render() {
    return (
      <div
        className={this.props.className + " TopBlock "}
        style={this.state.style}
      >
        {this.props.children}
      </div>
    );
  }
}
export default TopBlock;
