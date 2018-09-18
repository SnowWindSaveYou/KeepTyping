/**
 * Multiline EditText component
 * hint: the notice text display when user not typing in
 */
import React, { Component } from "react";
import "./index.css";

const DEFAULT_COLOR_ONE = "#22222211";
const DEFAULT_COLOR_TWO = "#00a1d6";

class MultiLineEditText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.hint,
      hint: true,
      focus: false,
      defaultValue: this.props.hint,
      color1: this.props.color1 ? this.props.color1 : DEFAULT_COLOR_ONE,
      color2: this.props.color2 ? this.props.color2 : DEFAULT_COLOR_TWO,
      t_color1: this.props.t_color1 ? this.props.t_color1 : "#222",
      t_color2: this.props.t_color2 ? this.props.t_color2 : "#222",
      style: {
        color: this.props.t_color1 ? this.props.t_color1 : "#222",
        background: this.props.color1 ? this.props.color1 : DEFAULT_COLOR_ONE
      }
    };
  }
  handleFocus() {
    this.setState({ focus: true });
    if (this.state.hint) {
      this.setState({ value: "" });
      this.setState({ hint: false });
    }
  }
  handleBlur(e) {
    this.setState({ focus: false });
    if (this.state.value === "") {
      this.setState({ value: this.state.defaultValue });
      this.setState({ hint: true });
    }
    this.setState({
      style: {
        color: this.state.t_color1,
        background: this.state.color1
      }
    });
  }
  handleMouseOver(e) {
    this.setState({
      style: {
        color: this.state.t_color2,
        border: "solid 1px",
        borderColor: this.state.color2
      }
    });
  }
  handleMouseOut() {
    if (!this.state.focus) {
      this.setState({
        style: {
          color: this.state.t_color1,
          background: this.state.color1
        }
      });
    }
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <textarea
        className={this.props.className + " MultiLineEditText"}
        id={this.props.id}
        style={this.state.style}
        value={this.state.value}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseLeave={this.handleMouseOut.bind(this)}
      />
    );
  }
}
export default MultiLineEditText;
