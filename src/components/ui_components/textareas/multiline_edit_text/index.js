/**
 * Multiline EditText component
 * hint: the notice text display when user not typing in
 */
import React, { Component } from "react";
import './style.css';

const COVER_COLOR = "#22222511";
const BORDER_COLOR = global.theme.secondary_color;

class MultiLineEditText extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            hover:false,
            focus: false,
            blank: true,
            fontSize:this.props.fontSize ?this.props.fontSize :"12px",
            color: this.props.color ?this.props.color :"#333",
            hintColor: this.props.color ?this.props.color :"#999",
            coverStyle: {},
            inputStyle: {},
        }
    }
    componentDidMount(){
        this.refreshStyle();
    }
    refreshStyle(){
        this.setState({ 
            coverStyle: {
                color:  this.state.hintColor,
                fontSize:this.state.fontSize,
                visibility: this.state.hover || this.state.focus ||!this.state.blank? "hidden" :"visible",
            },
            inputStyle:{
                color:  this.state.color,
                fontSize:this.state.fontSize,
                background: this.state.hover || this.state.focus ? null: COVER_COLOR,
                border: this.state.hover || this.state.focus ? "solid 1px" : null,
                borderColor: this.state.hover ||this.state.focus ? BORDER_COLOR: null
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
            <div className={this.props.className + " MultiLineEditText"} id={this.props.id} 
                style={this.props.style}>
                <label 
                    className={"cover"}
                    htmlFor={this.props.id + "slet"}
                    style={this.state.coverStyle}
                    >
                    {this.props.value==="" ? this.props.children:null}
                </label>
                <textarea id={this.props.id + "slet"} type={this.props.type ? this.props.type : "text"}
                        style={this.state.inputStyle}
                        onFocus={this.handleFocus.bind(this)}
                        onBlur={this.handleBlur.bind(this)}
                        onMouseOver={this.handleMouseOver.bind(this)}
                        onMouseLeave={this.handleMouseOut.bind(this)}
                        onChange={this.props.onChange ? this.props.onChange: null} 
                        value={this.props.value} />
            </div>
        );
    }
}
export default MultiLineEditText;