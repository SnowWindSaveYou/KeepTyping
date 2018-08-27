/**
 * Top Block
 * the block contain a row at the top
 */

import React, { Component } from "react";
import './style.css';

class FooterBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      style:this.props.style ? this.props.style: {
      }
    }
  }

  render() {
    return (
      <div className="FooterBlock"
        style={this.state.style}>
         { this.props.children }
      </div>
    );
  }
}
export default FooterBlock;
