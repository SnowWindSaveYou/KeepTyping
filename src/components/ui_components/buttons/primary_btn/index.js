/**
 * Button component
 * color1: the color of background
 * color2: the color of background when mouse hover it
 * t_color1: the color when this btn is normal state
 * t_color2: the color when mouse hover it
 */
import React, { Component } from "react";
import './style.css';

const DEFAULT_COLOR_ONE = "#fb7299";
const DEFAULT_COLOR_TWO = "#ff85ad";

class PrimaryButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      color1: this.props.color1 ? this.props.color1  : DEFAULT_COLOR_ONE,
      color2: this.props.color2 ? this.props.color2  : DEFAULT_COLOR_TWO,
      t_color1:this.props.t_color1 ? this.props.t_color1  : "#fff",
      t_color2:this.props.t_color2 ? this.props.t_color2  : "#fff",
      style:{ 
        color: this.props.t_color1 ? this.props.t_color1  : "#fff",
        background: this.props.color1 ? this.props.color1  : DEFAULT_COLOR_ONE
      },
      staticStyle:{
        height:"100px"
      }
    }
  }
  handleMouseOver(e){
    this.setState({style:{
      color:this.state.t_color2,
      background:this.state.color2}})
  }
  handleMouseOut(){
      this.setState({style:{
      color:this.state.t_color1,
      background:this.state.color1}})
  }
  render() {
    return (
      <a  className={ this.props.className + " PrimaryButton" }
          id={this.props.id}
          style={this.state.style}
          onClick={this.props.onClick? ()=>this.props.onClick():null}
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseLeave={this.handleMouseOut.bind(this)}>
        { this.props.children }
      </a>
    );
  }
}
export default PrimaryButton;