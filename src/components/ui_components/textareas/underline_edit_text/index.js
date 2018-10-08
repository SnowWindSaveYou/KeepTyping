/**
 * Multiline EditText component
 * hint: the notice text display when user not typing in
 */
import React, { Component } from "react";
import './style.css';

const DEFAULT_COLOR_ONE = "#ccc";


class UnderLineEditText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover:false,
            focus: false,
            blank: true,
            fontSize:this.props.fontSize ?this.props.fontSize :"12px",
            color: this.props.color ?this.props.color :"#333",
            hintColor: this.props.color ?this.props.color :"#999",
            inputStyle: {},

        }
    }
    componentDidMount(){
        this.refreshStyle();
    }
    refreshStyle(){
        this.setState({ 
            inputStyle:{
                borderBottom: "solid 2px",
                borderColor: this.state.hover ||this.state.focus ? global.theme.secondary_color: DEFAULT_COLOR_ONE
            }
        });
    }
    handleFocus() {
        let that = this;
        this.setState({ focus: true },()=>{
            that.refreshStyle();
        });
        this.refreshStyle();
    }
    handleBlur() {
        let that = this;
        this.setState({ focus: false },()=>{
            that.refreshStyle();
        });
        if (this.props.value === "") {
            this.setState({ blank: true });
        }
        this.refreshStyle();
    }
    handleMouseOver() {
        let that = this;
        this.setState({ hover: true },()=>{
            that.refreshStyle();
        }) ;
        
    }
    handleMouseOut() {
        let that = this;
        this.setState({ hover: false },()=>{
            that.refreshStyle();
        });
        this.refreshStyle();
    }
    render() {
        var {className,onFocus,onBlur,onMouseOver,onMouseLeave,onChange,...others} = this.props;
        return (
        <input className={this.props.className + " UnderLineEditText"} 
                type={this.props.type ? this.props.type : "text"}
                style={this.state.inputStyle}
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseLeave={this.handleMouseOut.bind(this)}
                onChange={this.props.onChange ? this.props.onChange: null} 
                value={this.props.value} 
                {...others}/>
        );
    }
}
export default UnderLineEditText;