import React, { Component } from "react";
import './style.css';
import {SubBlock,CircleBlock} from "@/components/layout_components";
import {mongoToPost} from '@utils/date_formater'

import defaultHead from '@/asset/default_head.png'
const PRIMARY_COLOR = global.theme.primary_color;
const BACKGROUND_COLOR = global.theme.base_color;
const FONT_COLOR = global.theme.font_color;
const FONT_LIGHT_COLOR = global.theme.font_light_color;


/**
 * 
 * @param {reply_id,reply_author, reply_content, sub_replys}props
 */
class ReplyRow extends Component {
    render(){
        return (
            <SubBlock className="ReplyRow" 
                {...this.props}
                style={{background:BACKGROUND_COLOR}}
                key={this.props.postId}>

                <div className="reply_left" >
                    <CircleBlock className="user_head" radiu="35">
                        <img style={{ width: "100%", height: "100%" }}
                        src={this.props.user_pic ? this.props.user_pic : defaultHead}></img>
                    </CircleBlock>
                    <a className="reply_author" style={{color:PRIMARY_COLOR}} >{this.props.author}</a>
                </div>
                <div className="reply_right">
                    <div className="reply_content" style={{color:FONT_COLOR}}>{this.props.content}</div> 
                    <div className="reply_pannel" style={{color:FONT_LIGHT_COLOR}}>
                        <p className="reply_date">{mongoToPost(this.props.date)}</p>
                    </div>
                </div>
            </SubBlock>
        );
    }
}

export default ReplyRow;