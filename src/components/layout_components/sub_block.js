/**
 * Sub Block
 */

import React, { Component } from "react";
import './style.css';

class SubBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      style:this.props.style ? this.props.style: {
        
      }
    }
  }

  render() {
    return (
      <div className={this.props.className +" SubBlock"}
        style={this.state.style}>
         { this.props.children }
      </div>
    );
  }
}
export default SubBlock;
