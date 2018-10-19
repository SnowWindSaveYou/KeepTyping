/**
 * Button component
 * color1: the color of background and border
 * t_color1: the color when this btn is normal state
 * t_color2: the color when mouse hover it
 */

import React, { Component } from "react";
import './style.css';

const PRIMARY_COLOR = global.theme.primary_color;
const SECONDARY_COLOR = global.theme.secondary_color;

class SideLineButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      curr_style: true,
      style:{ 
        ...this.props.style,
        color: this.props.t_color1 || global.theme.font_light_color,
      },
      hoverStyle:{
        ...this.props.style,
        color: this.props.t_color2  || SECONDARY_COLOR,
        background: this.props.color2  || null,
      },
      selectStyle:{ 
        ...this.props.style,
        color: this.props.color1 || global.theme.primary_color,
      },
      lineStyle:{ background: this.props.color1 || PRIMARY_COLOR,},
      lineHoverStyle:{background: this.props.color3  || SECONDARY_COLOR}
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
      <a  className={ this.props.className + " SideLineButton" }
          id={this.props.id}
          style={this.state.curr_style ? (this.props.is_select? this.state.selectStyle:this.state.style):this.state.hoverStyle }
          onClick={this.props.onClick? ()=>this.props.onClick():null}
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseLeave={this.handleMouseOut.bind(this)}>
        { this.props.children }
        <label
          className="sideline"
          style={this.state.curr_style?(this.props.is_select?this.state.lineStyle:null):this.state.lineHoverStyle }/>
      </a>
    );
  }
}
export default SideLineButton;