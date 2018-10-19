import React from "react";
import "./style.css";
import { SubBlock } from "@/components/layout_components";
import { UserAvater } from "@ui";
/**
 * Display the basic user information.
 * @param {user_name,user_head,user_bias,user_folloer,user_folloing} props
 */
const UserInfo = props => (
  <SubBlock className={props.className + " UserInfo"} style={props.style}>
    {/* Basic information of user: head, name*/}
    <div
      className="top inner"
      style={{ background: global.theme.primary_color }}
    >
      <UserAvater
        className="user_head"
        uid={props.user._id}
        src={props.user.avater}
      />
      <a className="user_name">{props.user.name}</a>
      <div className="clearfix" />
    </div>

    <div className="middle inner">
      <p className="user_bias">{props.user.bias}</p>

      <div className="follow_info pair_row">
        <div className="pair_part">
          {props.user.follower_num}
          <br />
          Follower
        </div>
        <div className="pair_part">
          {props.user.following_num}
          <br />
          Following
        </div>
      </div>
    </div>
    <div className="bottom inner">{props.children}</div>
  </SubBlock>
);
export default UserInfo;
