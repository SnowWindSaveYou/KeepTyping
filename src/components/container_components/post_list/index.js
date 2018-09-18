import React, { Component } from "react";
import "./index.css";
import SubBlock from "../../layout_components/sub_block";
import PostRow from "./post_row";

const postData = [
  {
    post_id: "12345678ihv",
    author: "Alex",
    title: "Hello",
    content: "world",
    date: "30/2",
    reply_num: 10
  },
  {
    post_id: "zxchgjfy7uig",
    author: "Alice",
    title: "This is a test Post",
    content: "this is some post contents",
    date: "31/8",
    reply_num: 15
  },
  {
    post_id: "xrxycvobioh",
    author: "Bob",
    title: "Bob is here",
    content: "bobbobbo, just for test",
    date: "32/1",
    reply_num: 0
  }
];

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.props.style ? null : {}
    };
  }
  renderPost(item, i) {
    return (
      <PostRow
        key={i}
        postId={item.post_id}
        author={item.author}
        title={item.title}
        content={item.content}
        date={item.date}
        replyNum={item.reply_num}
      />
    );
  }
  renderPostList() {
    var post_list = [];
    for (var i in postData) {
      post_list.push(this.renderPost(postData[i], i));
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
