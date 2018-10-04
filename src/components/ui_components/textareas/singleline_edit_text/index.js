/**
 * Multiline EditText component
 * hint: the notice text display when user not typing in
 */
import React, { Component } from "react";
import './style.css';
const DEFAULT_COLOR_TWO = global.theme.secondary_color; 

class SingleLineEditText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover:false,
            focus: false,
            blank: true,
            background: this.props.background ?this.props.background :"#22222511",
            inputStyle: {},
        }
    }
    componentDidMount(){
        this.refreshStyle();
    }
    refreshStyle(){
        this.setState({ 
            inputStyle:{
                ...this.props.style,
                background:this.state.hover || this.state.focus ?null:this.state.background,
                border: this.state.hover || this.state.focus ? "solid 1px" : null,
                borderColor: this.state.hover ||this.state.focus ? DEFAULT_COLOR_TWO: null
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
        return (
            <input 
                {...this.props}
                className={this.props.className + " SingleLineEditText"} 
                type={this.props.type ? this.props.type : "text"}
                style={this.state.inputStyle}
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseLeave={this.handleMouseOut.bind(this)}
                onChange={this.props.onChange ? this.props.onChange: null} 
                value={this.props.value} />
        );
    }
}
export default SingleLineEditText;