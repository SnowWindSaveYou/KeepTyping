/**
 * Main Block
 * the block put main things of page
 */
import React, { Component } from "react";
import './style.css';

class MainBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      child: this.props.children,
      style:this.props.style ? null: {
        color:"#FFF",
        background:"#999"
      }
    }
  }
  render() {
    return (
      <div className="MainBlock"
      style= {this.state.style} >
        { this.props.children }
      </div>
    );
  }
}
export default MainBlock;