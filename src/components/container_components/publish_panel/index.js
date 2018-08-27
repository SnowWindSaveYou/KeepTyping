import React, { Component } from "react";
import './style.css';
import SubBlock from "../../layout_components/sub_block";
import PostRow from "./post_row";

class AddPost extends Component {

    constructor(props){
      super(props);
        this.state = {
            style:this.props.style ? null: {
            }
      }
    }
    render() {
      return (
        <SubBlock className="AddPost" style={this.state.style}>
             
        </SubBlock>
      );
    }
  }
export default AddPost;