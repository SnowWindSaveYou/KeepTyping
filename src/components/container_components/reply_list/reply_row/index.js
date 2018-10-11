import React, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css';
import {SubBlock,CircleBlock} from "@/components/layout_components";
import {UserAvater} from '@ui'
import {formateDate,formateDoc} from '@utils/formater'
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
                tabIndex="1" 
                {...this.props}
                style={{background:BACKGROUND_COLOR}}
                key={this.props.postId}>

                <div className="reply_left" >
                    <UserAvater className="user_head" 
                        uid={this.props.author._id}
                        src={this.props.author.avater}/>
                    <Link to={'/u/'+this.props.author._id}  className="reply_author" style={{color:PRIMARY_COLOR}} >{this.props.author.name}</Link>
                </div>
                <div className="reply_right">
                    <div className="reply_content" style={{color:FONT_COLOR}}>
                    {formateDoc(this.props.content)}</div> 
                    <div className="reply_pannel" style={{color:FONT_LIGHT_COLOR}}>
                        <p className="reply_date">{formateDate(this.props.date)}</p>
                    </div>
                </div>
            </SubBlock>
        );
    }
}

export default ReplyRow;