/**
 * Side Block
 * the row block contains the main block and side block
 */
import React, { Component } from "react";
import "./style.css";

class SideBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      child: this.props.children,
      style: this.props.style ? this.props.style : {}
    };
  }
  render() {
    return (
      <div className="SideBlock " style={this.state.style}>
        {this.props.children}
      </div>
    );
  }
}
export default SideBlock;
