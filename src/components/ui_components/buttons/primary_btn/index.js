/**
 * Button component
 * color1: the color of background
 * color2: the color of background when mouse hover it
 * t_color1: the color when this btn is normal state
 * t_color2: the color when mouse hover it
 */
import React, { Component } from "react";
import './style.css';

const PRIMARY_COLOR = global.theme.primary_color;
const SECONDRY_COLOR = global.theme.primary_light_color;

class PrimaryButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      focus: true,
      style:{ 
        ...this.props.style,
        color: this.props.t_color1 ? this.props.t_color1  : "#fff",
        background: this.props.color1 ? this.props.color1  : PRIMARY_COLOR,
      },
      hoverStyle:{
        ...this.props.style,
        color: this.props.t_color2 ? this.props.t_color2  : "#fff",
        background: this.props.color2 ? this.props.color2  : SECONDRY_COLOR
      }
    }
  }
  handleMouseOver(){
    this.setState({focus:false})
  }
  handleMouseOut(){
    this.setState({focus:true })
  }
  render() {
    return (
      <button  className={ this.props.className + " PrimaryButton" }
          tabIndex="1"
          id={this.props.id}
          style={this.state.focus ? this.state.style:this.state.hoverStyle}
          
          onClick={this.props.onClick? ()=>this.props.onClick():null}
          onKeyUp={(e)=>{
            if(e.keyCode===13){
                this.props.onClick();
            }}}
          onFocus={this.handleMouseOver.bind(this)}
          onBlur={this.handleMouseOut.bind(this)}
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseLeave={this.handleMouseOut.bind(this)}>
        { this.props.children }
      </button>
    );
  }
}
export default PrimaryButton;