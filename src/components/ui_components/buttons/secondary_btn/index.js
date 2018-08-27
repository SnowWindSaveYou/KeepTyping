/**
 * Button component
 * color1: the color of background and border
 * t_color1: the color when this btn is normal state
 * t_color2: the color when mouse hover it
 */

import React, { Component } from "react";
import './style.css';

const DEFAULT_COLOR = "#00a1d6";

class SecondaryButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      color1: this.props.color1 ? this.props.color1  : DEFAULT_COLOR,
      t_color1:this.props.t_color1 ? this.props.t_color1  : DEFAULT_COLOR,
      t_color2:this.props.t_color2 ? this.props.t_color2  : "#fff",
      style:{ 
        color: this.props.t_color1 ? this.props.t_color1  : DEFAULT_COLOR,
        borderColor: this.props.color1 ? this.props.color1  : DEFAULT_COLOR
      }

    }
  }
  handleMouseOver(e){
    this.setState({style:{
      color:this.state.t_color2,
      background:this.state.color1}})
  }
  handleMouseOut(){
    this.setState({style:{
      color:this.state.t_color1,
      borderColor:this.state.color1}})
  }
  render() {
    return (
      <a className="SecondaryButton" 
      style={this.state.style}
      onClick={()=>this.props.onClick()}
      onMouseOver={this.handleMouseOver.bind(this)}
      onMouseLeave={this.handleMouseOut.bind(this)}>
        { this.props.children }
      </a>
    );
  }
}
export default SecondaryButton;