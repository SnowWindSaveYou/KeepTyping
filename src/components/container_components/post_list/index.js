import React, { Component } from "react";
import './style.css';
import SubBlock from "../../layout_components/sub_block";
import PostRow from "./post_row";


const postData =[
    {
        author:"Alex",
        title:"Hello",
        content:"world",
        date:"30/2",
        reply_num:10
    },
    {
        author:"Alice",
        title:"This is a test Post",
        content:"this is some post contents",
        date:"31/8",
        reply_num:15
    },
    {
        author:"Bob",
        title:"Bob is here",
        content:"bobbobbo, just for test",
        date:"32/1",
        reply_num:0
    }
]

class PostList extends Component {

    constructor(props){
      super(props);
        this.state = {
            style:this.props.style ? null: {
            }
      }
    }
    renderPost(item){
        return <PostRow 
            author={item.author}
            title={item.title}
            content={item.content}
            date={item.date} 
            replyNum={item.reply_num}
        ></PostRow>
    }
    renderPostList(){
        var post_list = [];
        for(var i in postData){
            post_list.push(this.renderPost(postData[i]));
        }
        return post_list;
    }
    render() {
      return (
        <SubBlock className="PostList" style={this.state.style}>
            {this.renderPostList()}  
        </SubBlock>
      );
    }
  }
export default PostList;