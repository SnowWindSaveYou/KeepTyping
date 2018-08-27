import React, { Component } from "react";
import './style.css';
import SubBlock from "../../../layout_components/sub_block";

class UserInfo extends Component {
    constructor(props){
      super(props);
      this.state = {
        style:this.props.style ? null: {
        },
        user_pic_style: {
            background:"#ff94b1"
        },
        style:{
        },
        style:{
        },

      }
    }
  
    render() {
      return (
        <SubBlock className="UserInfo" style={this.state.style}>
          <div className="top" style={this.state.user_pic_style}>

          </div>
          <div className="middle">
            <a className="user_name"></a>
            <p className="user_bias"></p>
          </div>
          <div className="bottom">
            <div className="number_part">

            </div >
            <div className="number_part">

            </div >
          </div>
          <img className="user_head"></img>
        </SubBlock>
      );
    }
  }
  export default UserInfo;