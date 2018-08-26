/**
 * Side Bar Block
 * the block put the tools, extentions and user info
 */
import React, { Component } from "react";
import './style.css';

class SideBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      style:this.props.style ? null: {
        color:"#FFF",
        background:"#000"
      }
    }
  }
  render() {
    return (
      <div className="SideBlock"
      style= {this.state.style} >
      { this.props.children }
      </div>
    );
  }
}

export default SideBlock;