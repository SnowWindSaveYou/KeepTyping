import React from "react";
import './style.css';
import { SubBlock, CircleBlock } from "@/components/layout_components";
import defaultHead from '@/asset/default_head.png'
/**
 * 
 * @param {user_name,user_head,user_bias,user_folloer,user_folloing} props 
 */
const UserInfo = (props) => (
  <SubBlock className={"UserInfo"} style={props.style} >
    {/* Basic information of user: head, name*/}
    <div className="top inner" style={{ background: global.theme.primary_color }}>
      <CircleBlock className="user_head" radiu="35" style={{background:"#fff"}}>
        <img style={{ width: "100%", height: "100%" }}
          src={props.user_pic ? props.user_pic : defaultHead}></img>
      </CircleBlock>
      <a className="user_name">{props.user_name}</a>
      <div className="clearfix"></div>
    </div>

    <div className="middle inner">
      {props.user_bias ? <p className="user_bias">{props.user_bias}</p> : null}

      <div className="follow_info pair_row">
        <div className="pair_part">
          {props.user_folloer}<br />
          Folloer
              </div >
        <div className="pair_part">
          {props.user_folloing}<br />
          Folloing
              </div >
      </div>
    </div>
    <div className="bottom inner">
      {props.children}
    </div>
  </SubBlock>
)
export default UserInfo;