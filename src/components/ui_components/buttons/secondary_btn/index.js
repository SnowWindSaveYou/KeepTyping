/**
 * Button component
 * color1: the color of background and border
 * t_color1: the color when this btn is normal state
 * t_color2: the color when mouse hover it
 */

import React, { Component } from "react";
import './style.css';

const PRIMARY_COLOR = global.theme.secondary_color;

class SecondaryButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      curr_style: true,
      style:{ 
        ...this.props.style,
        color: this.props.t_color1 ? this.props.t_color1  : PRIMARY_COLOR,
        borderColor: this.props.color1 ? this.props.color1  : PRIMARY_COLOR,
        border: "1px solid"
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
      <button  className={ this.props.className + " SecondaryButton" }
          tabIndex="1"
          onKeyUp={(e)=>{
            if(e.keyCode===13){
                this.props.onClick();
            }}}
          id={this.props.id}
          style={this.state.curr_style?this.state.style:this.state.hoverStyle }
          onClick={this.props.onClick? ()=>this.props.onClick():null}
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseLeave={this.handleMouseOut.bind(this)}>
        { this.props.children }
      </button>
    );
  }
}
export default SecondaryButton;