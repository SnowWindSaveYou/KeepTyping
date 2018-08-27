/**
 * Button component
 * color1: the color of background
 * color2: the color of background when mouse hover it
 * t_color1: the color when this btn is normal state
 * t_color2: the color when mouse hover it
 */
import React, { Component } from "react";
import './style.css';

class PrimaryButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      color1: this.props.color1 ? this.props.color1  : "#fb7299",
      color2: this.props.color2 ? this.props.color2  : "#ff85ad",
      t_color1:this.props.t_color1 ? this.props.t_color1  : "#fff",
      t_color2:this.props.t_color2 ? this.props.t_color2  : "#fff",
      style:{ 
        color: this.props.t_color1 ? this.props.t_color1  : "#fff",
        background: this.props.color1 ? this.props.color1  : "#fb7299"
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
      <a className="PrimaryButton" 
      style={this.state.style}
      onClick={()=>this.props.onClick()}
      onMouseOver={this.handleMouseOver.bind(this)}
      onMouseLeave={this.handleMouseOut.bind(this)}>
        { this.props.children }
      </a>
    );
  }
}
export default PrimaryButton;