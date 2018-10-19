/**
 * Button component
 * color1: the color of background
 * color2: the color of background when mouse hover it
 * t_color1: the color when this btn is normal state
 * t_color2: the color when mouse hover it
 */
import React, { Component } from "react";
import './style.css';
import CircleBlock from "@layout/style_blocks/circle_block";

const PRIMARY_COLOR = global.theme.primary_color;

class CircleButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      curr_style: true,
      style:{ 
        ...this.props.style,
        color: this.props.t_color1 ? this.props.t_color1  : PRIMARY_COLOR,
        borderColor: this.props.color1 ? this.props.color1  : PRIMARY_COLOR,
        border: "0.05px solid ",
      },
      hoverStyle:{
        ...this.props.style,
        color: this.props.t_color2 ? this.props.t_color2  : "#fff",
        background: this.props.color1 ? this.props.color1  : PRIMARY_COLOR
      }
    }
  }
  handleMouseOver(){
    this.setState({curr_style:false})
  }
  handleMouseOut(){
    this.setState({curr_style:true })
  }
  render() {
    return (
      <CircleBlock  
          className={ this.props.className + " CircleButton" }
          radiu={this.props.radiu?this.props.radiu:10}
          style={this.state.curr_style ? this.state.style:this.state.hoverStyle}
          onClick={this.props.onClick? ()=>this.props.onClick():null}
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseLeave={this.handleMouseOut.bind(this)} >
        { this.props.children}
      </CircleBlock>
    );
  }
}
export default CircleButton;