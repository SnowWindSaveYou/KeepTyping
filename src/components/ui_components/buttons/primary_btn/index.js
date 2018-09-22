/**
 * Button component
 * color1: the color of background
 * color2: the color of background when mouse hover it
 * t_color1: the color when this btn is normal state
 * t_color2: the color when mouse hover it
 */
import React, { Component } from "react";
import './style.css';
import ThemeConfig from '@/configs/theme_config.js'

const DEFAULT_COLOR_ONE = ThemeConfig.primary_color;
const DEFAULT_COLOR_TWO = ThemeConfig.primary_light_color;

class PrimaryButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      curr_style: true,
      style:{ 
        color: this.props.t_color1 ? this.props.t_color1  : "#fff",
        background: this.props.color1 ? this.props.color1  : DEFAULT_COLOR_ONE
      },
      hoverStyle:{
        color: this.props.t_color2 ? this.props.t_color2  : "#fff",
        background: this.props.color2 ? this.props.color2  : DEFAULT_COLOR_TWO
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
      <a  className={ this.props.className + " PrimaryButton" }
          id={this.props.id}
          style={this.state.curr_style ? this.state.style:this.state.hoverStyle}
          onClick={this.props.onClick? ()=>this.props.onClick():null}
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseLeave={this.handleMouseOut.bind(this)}>
        { this.props.children }
      </a>
    );
  }
}
export default PrimaryButton;