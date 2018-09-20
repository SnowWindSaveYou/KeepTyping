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
        color:"#aaa"
      }
    }
  }

  render() {
    return (
      <div className={this.props.className +" SubBlock"}
        key={this.props.key}
        onClick={()=>this.props.onClick? this.props.onClick:null}
        onMouseOver={this.props.onMouseOver? this.props.onMouseOver.bind(this):null}
        onMouseLeave={this.props.onMouseLeave? this.props.onMouseLeave.bind(this):null}
        style={this.state.style}>
         { this.props.children }
      </div>
    );
  }
}
export default SubBlock;
