import React, { Component } from "react";
import './style.css';

import {SubBlock} from "../../layout_components";
import ReplyRow from "./reply_row";





class ReplyList extends Component {

    renderPost(item, i){
        return <ReplyRow 
            key= {item._id}
            author={item.reply_author.name}
            content={item.reply_content}
            date={item.updatedAt}
        ></ReplyRow>
    }
    renderPostList(){
        var reply_list = [];
        for(var i in this.props.replys){
            reply_list.push(this.renderPost(this.props.replys[i],i));
        }
        
        return reply_list;
    }
    render() {
      return (
        <SubBlock className="PostList" {...this.props}>
            {this.renderPostList()}  
        </SubBlock>
      );
    }
  }
export default ReplyList;