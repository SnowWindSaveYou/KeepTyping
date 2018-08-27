import React, { Component } from "react";
import './style.css';

class HeaderBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      style: this.props.style ? this.props.style: {
      }
    }
  }
  render() {
    return (
      <div className="HeaderBlock"
      style= {this.state.style} >
        { this.props.children }
      </div>
    );
  }
}

export default HeaderBlock;
