import React, { Component } from "react";
import "./index.css";
import SubBlock from "../../../layout_components/sub_block";

class UserInfo extends Component {
  /** Test Only */
  userData = {
    user_name: "KiraKira",
    user_bias: "This person don't leave any bias",
    user_head: "",
    user_folloer: 10,
    user_folloing: 20
  };

  constructor(props) {
    super(props);
    this.state = {
      style: this.props.style ? null : {},
      user_pic_style: {
        background: "#ff94b1"
      }
    };
  }

  render() {
    return (
      <div className="UserInfo">
        <SubBlock style={this.state.style}>
          <div className="top inner" style={this.state.user_pic_style}>
            <a className="user_name">{this.userData.user_name}</a>
          </div>
          <div className="middle inner">
            <p className="user_bias">{this.userData.user_bias}</p>
            <div className="follow_info pair_row">
              <div className="pair_part">
                {this.userData.user_folloer}
                <br />
                Folloer
              </div>
              <div className="pair_part">
                {this.userData.user_folloing}
                <br />
                Folloing
              </div>
            </div>
          </div>
          <div className="bottom inner" />
        </SubBlock>
      </div>
    );
  }
}
export default UserInfo;
