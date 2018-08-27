/**
 * Top Block
 * the block contain a row at the top
 */

import React, { Component } from "react";
import './style.css';

class TopBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      style:this.props.style ? this.props.style: {

      }
    }
  }

  render() {
    return (
      <div className="TopBlock"
        style={this.state.style}>
         { this.props.children }
      </div>
    );
  }
}
export default TopBlock;
